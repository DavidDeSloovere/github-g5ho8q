<script lang="ts" setup>
const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div>
    NUXTLINK WITH TO:
    <NuxtLink
      v-for="option in locales"
      :key="option"
      :to="`/${option}`"
      :class="{
        'font-bold': option === currentLocale,
      }"
    >
      {{ option }}
    </NuxtLink>

    <br />
    NUXTLINK WITH @setLocale:
    <NuxtLink
      v-for="option in locales"
      :key="option"
      :to="`/${option}`"
      :class="{
        'font-bold': option === currentLocale,
      }"
      @click.prevent.stop="setLocale(option)"
    >
      {{ option }}
    </NuxtLink>

    <br />
    NUXTLINK WITH @switchLocalePath:
    <NuxtLink
      v-for="option in locales"
      :key="option"
      :to="switchLocalePath(option)"
      :class="{
        'font-bold': option === currentLocale,
      }"
    >
      {{ option }}
    </NuxtLink>
  </div>
</template>

<style>
a {
  margin: 0 2px;
}
.font-bold {
  font-weight: bold;
}
</style>
