<template>
  <div class="link-with-image pb-4">
    <b-button variant="primary" size="lg" :to="to" block>
      <slot />
    </b-button>
    <nuxt-link class="image-container" :to="to">
      <div
        class="image"
        :style="{ backgroundImage: `url('${bgImage}')` }"
      ></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LinkImage',
  props: {
    /**
     * The prop will not be required, so should either have been required before
     * or have a path to somewhere in the static folder
     */
    bgImage: {
      type: String,
      required: true
    },
    to: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.link-with-image {
  display: flex;
  flex-direction: column;
  height: 100%;

  .image-container {
    width: 100%;
    overflow: hidden;

    flex-grow: 1;
    flex-basis: 240px;
    align-items: stretch;
    display: flex;

    .image {
      width: 100%;
      background-color: lightgray; /* fallback color */
      background-position: center;
      background-size: cover;
      transition: transform 300ms;
      position: relative;
    }
  }
  &:hover,
  &:focus {
    .image {
      cursor: pointer;
      transform: scale(1.15);
    }
    .btn {
      color: white;
      background-color: #640000;
      border-color: #570000;
    }
  }
}
</style>
