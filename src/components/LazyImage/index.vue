<template>
  <div class="lazy-image-wrapper" :style="wrapperStyle">
    <img
      v-if="!lazy"
      :src="src"
      :srcset="srcset"
      :sizes="sizes"
      :alt="alt"
      :class="className"
      :fetchpriority="fetchpriority"
      :loading="loading"
      @error="handleError"
    />
    <img
      v-else
      v-img-lazy="src"
      :srcset="srcset"
      :sizes="sizes"
      :alt="alt"
      :class="className"
      @error="handleError"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [Number, String],
    default: null,
  },
  height: {
    type: [Number, String],
    default: null,
  },
  className: {
    type: String,
    default: '',
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  fetchpriority: {
    type: String,
    default: 'auto', // 'high', 'low', 'auto'
    validator: (val) => ['high', 'low', 'auto'].includes(val),
  },
  loading: {
    type: String,
    default: 'lazy', // 'lazy', 'eager'
    validator: (val) => ['lazy', 'eager'].includes(val),
  },
  format: {
    type: String,
    default: 'auto', // 'auto', 'webp', 'avif', 'original'
    validator: (val) => ['auto', 'webp', 'avif', 'original'].includes(val),
  },
})

const wrapperStyle = computed(() => {
  const style = {}
  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  return style
})

const srcset = computed(() => {
  if (props.format === 'original') return ''
  
  const baseName = props.src.replace(/\.[^/.]+$/, '')
  const ext = props.src.split('.').pop().toLowerCase()
  
  const formats = []
  if (props.format === 'auto' || props.format === 'webp') {
    formats.push(`${baseName}.webp`)
  }
  if (props.format === 'auto' || props.format === 'avif') {
    formats.push(`${baseName}.avif`)
  }
  formats.push(props.src)
  
  return formats.join(', ')
})

const sizes = computed(() => {
  if (!props.width) return ''
  const width = typeof props.width === 'number' ? props.width : parseInt(props.width)
  return `(max-width: ${width}px) 100vw, ${width}px`
})

const handleError = (e) => {
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f5f5f5" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="12" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3Eimage error%3C/text%3E%3C/svg%3E'
}
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
}

.lazy-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>