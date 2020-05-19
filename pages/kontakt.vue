<template>
  <div>
    <Intro small :image-url="require('~/assets/banner/banner_kontakt2.jpg')">
      <h2 class="mb-5">Kontakt</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Du hast Fragen zu unserer Truppe oder den vielen Anleitungen? Du hast
          Interesse an der Darstellung eines antiken Römers oder möchtest sogar
          mal bei einem Event bei unserer Gruppe reinschnuppern? Dann melde Dich
          einfach bei uns, wir heißen jeden herzlich willkommen!
        </b-col>
      </b-row>
      <a href="mailto:ig-romanum@web.de" class="text-center"
        >IG-Romanum@web.de</a
      >
    </Intro>
  </div>
</template>

<script>
import Intro from '~/components/intro'

export default {
  name: 'KontaktVue',
  components: { Intro },
  head() {
    return {
      title: 'Kontakt',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Nimm Kontakt zur IG Romanum auf!'
        }
      ]
    }
  }
}
</script>
