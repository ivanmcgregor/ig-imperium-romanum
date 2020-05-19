<template>
  <div>
    <Intro small :image-url="coverFoto">
      <h2 class="mb-5">{{ usedGallery.title }}</h2>
      <b-row v-if="usedGallery.description" class="mb-4">
        <b-col offset-md="1" md="10">
          {{ usedGallery.description }}
        </b-col>
      </b-row>
    </Intro>
    <b-container>
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
  validate({ params, payload }) {
    const gallery = params.galerie.toLowerCase()
    const check =
      payload ||
      Object.keys(Galerien)
        .map((g) => g.toLowerCase())
        .includes(gallery)
    if (!check) {
      console.warn('Invalid gallery identifier', gallery)
    }
    return check
  },
  data: () => ({
    index: null
  }),
  computed: {
    usedGallery({ payload }) {
      if (payload) {
        return payload
      }

      const gallery = this.$query.params.galerie.toLowerCase()
      return Object.values(Galerien)[
        Object.keys(Galerien)
          .map((g) => g.toLowerCase())
          .findIndex((g) => g === gallery)
      ]
    },
    images() {
      return this.usedGallery.fotos.map(this.toSrc)
    },
    coverFoto() {
      return this.toSrc(this.usedGallery.coverFoto)
    }
  },
  methods: {
    toSrc(img) {
      return `/Galerien/${this.usedGallery.folder}/${img}`
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
