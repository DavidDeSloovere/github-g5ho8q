<script lang="ts" setup></script>

<template>
  <Html>
    <header>
      This is the header from the layout file. {{ $t('welcome') }}<br />
      <LangSwitcher />
    </header>
    <hr />
    <main>
      <slot />
    </main>
    <hr />
    <footer>
      <SomeChildComponent />
    </footer>
  </Html>
</template>

<style></style>
