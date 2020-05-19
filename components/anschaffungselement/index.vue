<template>
  <b-container>
    <b-row>
      <b-col cols="12" offset-md="1" md="10" class="mb-5">
        {{ intro }}
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(element, index) in elements"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="mb-4"
      >
        <element-component
          :img-src="element.imgSrc"
          :title="element.title"
          :text="element.text"
        ></element-component>
      </b-col> </b-row
  ></b-container>
</template>

<script>
import ElementComponent from '~/components/anschaffungselement/element'

export default {
  name: 'Anschaffungsratgeber',
  components: { ElementComponent },
  props: {
    elements: {
      type: Array,
      required: true
    },
    intro: {
      type: String,
      required: true
    }
  }
}
</script>
