<template>
  <n-config-provider :theme="theme" :locale="arDZ" :date-locale="dateArDZ" :hljs="hljs">
    <NuxtLayout />
  </n-config-provider>
</template>
<script lang="ts" setup>
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { NConfigProvider, arDZ, dateArDZ } from 'naive-ui'
import { type GlobalTheme, darkTheme } from 'naive-ui'

hljs.registerLanguage('javascript', javascript)

const theme = ref<GlobalTheme | null>(darkTheme)
</script>
