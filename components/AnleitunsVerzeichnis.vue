<template>
  <Section title="Anleitungen und Infos">
    <b-nav vertical>
      <b-nav-item
        v-for="anleitung in anleitungen"
        :key="anleitung.name"
        :to="anleitung.path"
      >
        {{ anleitung.text }}
      </b-nav-item>
    </b-nav>
  </Section>
</template>

<script>
import _ from 'lodash'
import { getRefinedRoutes } from '~/utils/routesHelper'
import Section from '~/components/section'

export default {
  name: 'AnleitungsVerzeichnis',
  components: { Section },
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
