<script setup lang="ts">
const { locale } = useI18n();
const { data: dataWithQuery } = await useFetch('/api/hello?source=index', {
  query: { locale: locale.value },
});
const { data: dataInUrl } = await useFetch(
  `/api/hello?source=index&locale=${locale.value}`
);
</script>

<template>
  <div>
    <form>
      <!-- Locale:
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select> -->
      <p>{{ $t('welcome') }}</p>
      <b>THESE WILL UPDATE</b>
      <pre>dataWithQuery: {{ dataWithQuery }} </pre>
      <pre>dataInUrl: {{ dataInUrl }} </pre>
    </form>
  </div>
</template>
