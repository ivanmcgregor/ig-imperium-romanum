<template>
  <Section title="Anleitungen und Infos">
    <b-row>
      <b-col
        v-for="anleitung in anleitungen"
        :key="anleitung.name"
        cols="12"
        md="6"
      >
        <!-- The images should have the same name as the page and be in the
         folder `static/AnleitungsBilder` and in `.png format. -->
        <LinkImage
          :to="anleitung.path"
          :bg-image="`/AnleitungsBilder/${anleitung.text}.png`"
          >{{ anleitung.text }}</LinkImage
        >
      </b-col>
    </b-row>
  </Section>
</template>

<script>
import _ from 'lodash'
import { getRefinedRoutes } from '~/utils/routesHelper'
import Section from '~/components/section'
import LinkImage from '~/components/LinkImage'

export default {
  name: 'AnleitungsVerzeichnis',
  components: { Section, LinkImage },
  computed: {
    anleitungen() {
      const routes = getRefinedRoutes(this.$router.options.routes)
      const guides = Object.values(
        _.get(
          routes,
          ['Tipps & Tricks', 'children', 'anleitungen', 'children'],
          {}
        )
      )
      return _.sortBy(guides, ['name'])
    }
  }
}
</script>

<style scoped></style>
