<script setup lang="ts">
const { locale } = useI18n();
const { data: dataWithQuery } = await useFetch('/api/hello?source=page-component', {
  query: { locale: locale.value }, // this is not reactive, but is rerun on page navigation
  //query: { locale: locale }, // this is reactive - actually runs twice, on page nav and because of ref change
});
const { data: dataInUrl } = await useFetch(
  `/api/hello?source=index&locale=${locale.value}` // this is not reactive, but is rerun on page navigation
  //() => `/api/hello?source=page-component&locale=${locale.value}` // this is reactive - actually runs twice, on page nav and because of ref change
);
</script>

<template>
  <div>
    <form>
      <!-- Locale:
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>  -->
      <p>{{ $t('welcome') }}</p>
      <pre>dataWithQuery: {{ dataWithQuery }} </pre>
      <pre>dataInUrl: {{ dataInUrl }} </pre>
    </form>
  </div>
</template>
