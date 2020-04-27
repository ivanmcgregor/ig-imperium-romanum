<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Galerie</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Text für Galerien
        </b-col>
      </b-row>
    </Intro>
    <b-container>
      <h3 class="h4 mt-4">Testgalerie</h3>
      <v-gallery
        :images="images"
        :index="index"
        @close="index = null"
      ></v-gallery>
      <div class="images">
        <div
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          class="image"
        >
          <b-img :src="image" @click="index = imageIndex"></b-img>
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
    mp4Raw: [
      // 'IGFilmchenAndroid.mp4'
    ],
    index: null
  }),
  computed: {
    images() {
      return this.imagesRaw.map(this.toSrc).concat(
        this.mp4Raw.map((el) => ({
          title: 'Gesang',
          href: this.toSrc(el),
          type: 'video/mpeg',
          poster: 'https://dummyimage.com/350/ffffff/000000'
        }))
      )
    }
  },
  methods: {
    toSrc(img) {
      return require(`assets/Galerien/Winterwanderung 08.12.19 Donnersberg/${img}`)
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
  margin: 5px;
  flex: 1 1 40%;

  img {
    width: 100%;
  }
}
</style>
