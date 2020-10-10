<template>
  <div v-if="validGallery">
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
  <div v-else>
    <Intro small :image-url="require('~/assets/banner/banner_galerien.jpg')">
      <h2 class="mb-5">Galerie</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          Hier sind einige Bilder von unseren Aktionen. Von manchen gibt es auch
          Videos, die auf
          <a href="https://www.youtube.com/channel/UCjS_3WWLf1DhOFzcmril1LA"
            >unserem YouTube Kanal</a
          >
          geschaut werden können.
        </b-col>
      </b-row>
    </Intro>
    <Section
      v-for="year in galleriesByYear"
      :key="year.year"
      :title="year.year"
      use-alternate-headline-font
    >
      <b-container>
        <b-row>
          <b-col
            v-for="(gallery, galleryIndex) in year.galleries"
            :key="galleryIndex"
            cols="12"
            md="6"
          >
            <LinkImage
              :to="`/galerie?galerie=${gallery.link}`"
              :bg-image="`/Galerien/${gallery.folder}/${gallery.coverFoto}`"
              >{{ gallery.title }}</LinkImage
            >
          </b-col>
        </b-row>
      </b-container>
    </Section>
  </div>
</template>

<script>
import _ from 'lodash'
import Galerien from './galerien'
import Intro from '~/components/intro'
import LinkImage from '~/components/LinkImage'
import Section from '~/components/section/index'

export default {
  name: 'Galerie',
  components: { Intro, LinkImage, Section },
  data: () => ({
    index: null
  }),
  computed: {
    validGallery() {
      const gallery = this.$route.query.galerie || ''
      return Galerien.map((g) => g.link.toLowerCase()).includes(
        gallery.toLowerCase()
      )
    },
    usedGallery({ payload }) {
      if (payload) {
        return payload
      }
      if (!this.validGallery) {
        return {}
      }

      const gallery = this.$route.query.galerie.toLowerCase()
      return Galerien.find((g) => g.link.toLowerCase() === gallery)
    },
    images() {
      return this.usedGallery.fotos.map(this.toSrc)
    },
    coverFoto() {
      return this.toSrc(this.usedGallery.coverFoto)
    },
    splitGalleries() {
      const sorted = _.orderBy(Galerien, ['date'], ['desc'])
      const split = sorted.reduce((prev, curr) => {
        const year = curr.date.substring(0, 4)
        if (prev[year]) {
          prev[year].galleries.push(curr)
          return prev
        }
        return {
          ...prev,
          ...{
            [year]: {
              year,
              galleries: [curr]
            }
          }
        }
      }, {})
      return split
    },
    galleriesByYear() {
      return _.orderBy(Object.values(this.splitGalleries), ['year'], ['desc'])
    }
  },
  methods: {
    toSrc(img) {
      return `/Galerien/${this.usedGallery.folder}/${img}`
    }
  },
  head() {
    if (this.validGallery) {
      return {
        title: this.usedGallery.title,
        meta: [
          {
            hid: 'ogTitle',
            property: 'og:title',
            content: `Galerie: ${this.usedGallery.title} der IG Romanum`
          }
        ]
      }
    }
    return {
      title: 'Galerien',
      meta: [
        {
          hid: 'ogTitle',
          property: 'og:title',
          content: 'Galerien von Veranstaltungen der IG Romanum'
        }
      ]
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
