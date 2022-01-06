<template>
  <Section title='Anleitungen und Infos'>
    <b-row>
      <b-col
        v-for='anleitung in anleitungen'
        :key='anleitung.name'
        cols='12'
        md='6'
      >
        <!-- The images should have the same name as the page and be in the
         folder `static/AnleitungsBilder` and in `.jpg format. -->
        <LinkImage
          :to='anleitung.path'
          :bg-image='`/AnleitungsBilder/${anleitung.text}.jpg`'
        >{{ anleitung.text }}
        </LinkImage
        >
      </b-col>
    </b-row>
  </Section>
</template>

<script>
import Section from '~/components/section'
import LinkImage from '~/components/LinkImage'

export default {
  name: 'AnleitungsVerzeichnis',
  components: { Section, LinkImage },
  computed: {
    anleitungen() {
      return [
        'cingulum',
        'feminalia',
        'focale',
        'hamata',
        'penula',
        'schuhe',
        'scutum',
        'segmentata',
        'subarmalis',
        'tunika'
      ].map((e) => ({ text: e, path: `/Tipps %26 Tricks/anleitungen/${e}` }))
    }
  }
}
</script>
