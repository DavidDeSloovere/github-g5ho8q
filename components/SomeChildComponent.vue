<script setup lang="ts">
const { locale } = useI18n();
const { data: dataWithQuery } = await useFetch('/api/hello?source=component', {
  query: { locale: locale.value }, // not working - reactivity is lost
  //query: { locale: locale }, // working - this is reactive
});

const { data: dataInUrl } = await useFetch(
  //`/api/hello?source=component&locale=${locale.value}` // not working - reactivity is lost
  () => `/api/hello?source=component&locale=${locale.value}` // working - this is reactive
);
</script>

<template>
  <div>
    Footer in child component. <br />Locale: {{ locale }} <br />
    <p>{{ $t('welcome') }}</p>
    <pre>dataWithQuery: {{ dataWithQuery }} </pre>
    <pre>dataInUrl: {{ dataInUrl }} </pre>
  </div>
</template>
