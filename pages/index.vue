<script setup lang="ts">
const { path } = useRoute();
const { locale } = useI18n();
const { data: dataWithQuery } = await useFetch('/api/hello?source=index', {
  //query: { locale: locale.value }, // this is not reactive, but is rerun on page navigation
  query: { locale: locale }, // this is reactive - actually runs twice, on page nav and because of ref change
});
const { data: dataInUrl } = await useFetch(
  //`/api/hello?source=index&locale=${locale.value}` // this is not reactive, but is rerun on page navigation
  () => `/api/hello?source=index&locale=${locale.value}` // this is reactive - actually runs twice, on page nav and because of ref change
);
</script>

<template>
  <div>
    Everything in the pages/index.vue is rerendered on navigation
    <br>PATH: {{ path }}
    <br>LOCALE: {{ locale }}
    <form>
      <!-- Locale:
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>  -->
      <p>{{ $t('welcome') }}</p>
      <b>THESE WILL UPDATE</b>
      <pre>dataWithQuery: {{ dataWithQuery }} </pre>
      <pre>dataInUrl: {{ dataInUrl }} </pre>
    </form>
    <hr>
    PAGE COMP
    <PageComponent />
    <hr>
    CHILD COMP
    <SomeChildComponent />
  </div>
</template>
