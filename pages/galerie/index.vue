<template>
  <div>
    <Intro small :image-url="require('~/assets/banner/banner_galerien.jpg')">
      <h2 class="mb-5">Galerie</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Text für Galerien
        </b-col>
      </b-row>
    </Intro>
    <b-container>
      <h3 class="h4 mt-4">Testgalerie</h3>
      <client-only>
        <v-gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></v-gallery>
      </client-only>
      <div class="images">
        <div
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          class="image"
          @click="index = imageIndex"
        >
          <div
            class="bg-image"
            :style="{ backgroundImage: `url('${image}')` }"
          ></div>
          <!--<b-img :src="image" @click="index = imageIndex"></b-img>-->
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Intro from '~/components/intro'

export default {
  name: 'Galerie',
  components: { Intro },
  data: () => ({
    imagesRaw: [
      'DSC_1170XX.jpg',
      'DSC_1202XX.jpg',
      'DSC_1212XXXX.jpg',
      'DSC_1222XXXX.jpg',
      'DSC_1253.JPG',
      'DSC_1257XXX.jpg'
    ],
    index: null
  }),
  computed: {
    images() {
      return this.imagesRaw.map(this.toSrc)
    }
  },
  methods: {
    toSrc(img) {
      return `/Galerien/Winterwanderung 08.12.19 Donnersberg/${img}`
    }
  }
}
</script>

<style lang="scss" scoped>
.images {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.image {
  flex: 1 1 25%;
  padding: 5px;
  max-width: 50%;
  cursor: pointer;

  .bg-image {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    background-position: center;
    background-size: cover;
  }
}
</style>
