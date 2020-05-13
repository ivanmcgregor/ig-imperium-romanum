<template>
  <div>
    <Intro small :image-url="require('~/assets/banner/banner_galerien.jpg')">
      <h2 class="mb-5">Galerie</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Hier sind einige Bilder von unseren Aktionen.
        </b-col>
      </b-row>
    </Intro>
    <b-container>
      <div class="images">
        <div v-for="(gallery, imageIndex) in galleries" :key="imageIndex">
          <nuxt-link :to="galleryLinks[imageIndex]" append>{{
            gallery.title
          }}</nuxt-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Galerien from './galerien'
import Intro from '~/components/intro'

export default {
  name: 'Galerie',
  components: { Intro },
  computed: {
    galleryLinks() {
      return Object.keys(Galerien)
    },
    galleries() {
      return Object.values(Galerien)
    }
  }
}
</script>

<style lang="scss" scoped></style>
