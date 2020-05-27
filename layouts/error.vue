<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404" class="text-center mt-5">
      Wir konnten die Seite nicht finden
    </h1>
    <h1 v-else class="text-center mt-5">Da ist etwas schief gegangen</h1>
    <b-img
      src="/Galerien/Angelbachtal Marktbesuch 11.08.2019/IMG-20190811-WA0025.jpg"
      center
      :style="{ maxHeight: '60vh' }"
    />
    <p class="mt-2">
      Wenn du glaubst, dass das nicht hätte passieren sollen, dann öffne doch
      bitte ein
      <a href="https://github.com/ivanmcgregor/ig-imperium-romanum/issues"
        >Issue auf GitHub</a
      >
      oder schick uns eine Email an
      <a href="mailto:ig-romanum@web.de">IG-Romanum@web.de</a>
    </p>
    <p>Zurück zur <nuxt-link to="/">Startseite</nuxt-link></p>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
