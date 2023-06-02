<template>
  <n-card class="p-10">
    <client-only>
      <editor
        v-model="html"
        output-format="html"
        api-key="uqay1aww6z4so9dwp2zaoem9ojo5bp5iikfvtqvk409cmhbl"
      />
    </client-only>

    <n-h1>
      HTML
    </n-h1>
    <n-code :code="html" language="html" />

    <n-h1>
      Markdown
    </n-h1>
    <n-code :code="markdown" language="html" />
  </n-card>
</template>
<script setup lang="ts">
import editor from '@tinymce/tinymce-vue'
import TurnDownService from 'turndown'

const turndownService = new TurnDownService()

const html = ref('const x = 3')
const markdown = computed(() => turndownService.turndown(html.value))

</script>
