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
      <b-row>
        <b-col
          v-for="(gallery, imageIndex) in galleries"
          :key="imageIndex"
          cols="12"
          md="6"
        >
          <LinkImage
            :to="`/galerie/${galleryLinks[imageIndex]}`"
            :bg-image="`/Galerien/${gallery.folder}/${gallery.coverFoto}`"
            >{{ gallery.title }}</LinkImage
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Galerien from './galerien'
import Intro from '~/components/intro'
import LinkImage from '~/components/LinkImage'

export default {
  name: 'Galerie',
  components: { Intro, LinkImage },
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
