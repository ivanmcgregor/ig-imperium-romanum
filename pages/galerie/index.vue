<template>
  <div>
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
              :to="`/galerie/${gallery.link}`"
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
  computed: {
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
  head() {
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

<style lang="scss" scoped></style>
