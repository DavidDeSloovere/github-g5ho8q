<script setup lang="ts">
const { locale } = useI18n();
const { data: dataWithQuery } = await useFetch('/api/hello?source=component', {
  query: { locale: locale.value },
});

// THIS ONE CAN BE CHANGED into a function like this
// () => `/api/hello?source=component&locale=${locale.value}`
// and that would work, but in index.vue is't not required
const { data: dataInUrl } = await useFetch(
  `/api/hello?source=component&locale=${locale.value}` // not working
  //() => `/api/hello?source=component&locale=${locale.value}` // working
);
</script>

<template>
  <div>
    Footer in child component. <br />Locale: {{ locale }} <br />
    <p>{{ $t('welcome') }}</p>
    <b>THESE WILL NOT UPDATE</b>
    <pre>dataWithQuery: {{ dataWithQuery }} </pre>
    <pre>dataInUrl: {{ dataInUrl }} </pre>
  </div>
</template>
