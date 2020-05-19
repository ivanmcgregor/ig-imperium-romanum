<template>
  <div class="layout">
    <HeaderComponent />
    <nuxt />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '~/components/header'
import FooterComponent from '~/components/footer'
export default {
  name: 'DefaultLayout',
  components: { HeaderComponent, FooterComponent },
  head() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'IG Imperium Romanum',
      // all titles will be injected into this template
      titleTemplate: '%s | IG Imperium Romanum',

      htmlAttrs: {
        lang: 'de'
      },

      meta: [
        {
          hid: 'overall',
          name: 'description',
          content:
            'Wir sind eine Interessengemeinschaft, die zivile wie militärische römische Darstellung um die Zeit 150n. Chr betreibt.'
        },
        {
          hid: 'overallRobots',
          name: 'robots',
          content: 'index, follow'
        },
        {
          hid: 'ogType',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'ogSiteName',
          property: 'og:site_name',
          content: 'vioma GmbH'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
