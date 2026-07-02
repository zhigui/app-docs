<script setup lang="ts">
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()

const isBambooRoute = computed(() => route.path.startsWith('/bamboo/'))
const navbarBrandLink = computed(() =>
  isBambooRoute.value ? '/bamboo/' : routeLocale.value
)
const navbarBrandTitle = computed(() =>
  isBambooRoute.value ? 'Bamboo' : siteLocale.value.title
)
</script>

<template>
  <RouterLink :to="navbarBrandLink">
    <span v-if="navbarBrandTitle" class="site-name">
      {{ navbarBrandTitle }}
    </span>
  </RouterLink>
</template>
