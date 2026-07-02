<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobile = ref(false)

const navbarLinks = computed(() => {
  if (!route.path.startsWith('/bamboo/')) {
    return []
  }

  return [
    {
      text: 'Support',
      link: '/bamboo/support.html'
    },
    {
      text: 'Privacy',
      link: '/bamboo/privacy_policy.html'
    },
    {
        text: 'Chrome Web Clipper',
        link: 'https://chromewebstore.google.com/detail/bamboo-web-clipper/hmflieklkcopnhecjmhfafafoohniohf'
    }
  ]
})

onMounted(() => {
  const mobileDesktopBreakpoint = 719
  const handleMobile = (): void => {
    isMobile.value = window.innerWidth < mobileDesktopBreakpoint
  }

  handleMobile()
  window.addEventListener('resize', handleMobile, false)
  window.addEventListener('orientationchange', handleMobile, false)
})
</script>

<template>
  <nav v-if="navbarLinks.length" class="navbar-items">
    <div v-for="item in navbarLinks" :key="item.text" class="navbar-item">
      <AutoLink :item="item" :class="isMobile ? 'mobile' : ''" />
    </div>
  </nav>
</template>
