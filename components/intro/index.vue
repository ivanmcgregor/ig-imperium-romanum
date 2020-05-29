<template>
  <div :class="classes">
    <div class="ig-mosaic"></div>
    <div class="ig-marble-1">
      <div class="ig-offset-image">
        <div class="container">
          <b-img fluid :src="imageUrl" class="ig-img-cover"></b-img>
        </div>
      </div>
    </div>
    <div class="ig-marble-2">
      <div class="container">
        <div class="ig-border-box">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    small: {
      type: Boolean,
      default: false,
      required: false
    },
    imageUrl: {
      type: String,
      required: false,
      default: require(`~/assets/banner.jpg`)
    }
  },
  computed: {
    classes() {
      return `ig-intro text-center${this.small ? ' ig-intro-small' : ''}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.ig-intro {
  margin-bottom: $large-margin;

  .ig-mosaic {
    background-image: url('~assets/mosaik.jpg');
    background-size: auto 60px;
    height: 60px;
    margin-top: 200px;
  }
  .ig-marble-1 {
    background-image: url('~assets/marble.jpg');
    background-position: bottom left;
    background-size: 512px;
    position: relative;
    height: 310px;

    .ig-offset-image {
      position: absolute;
      top: -260px;
      width: 100%;

      .ig-img-cover {
        object-fit: cover;
      }

      img {
        height: 540px;
        width: 100%;
      }
    }
  }
  .ig-marble-2 {
    background-image: url('~assets/marble_short.jpg');
    background-position: top left;
    background-size: 410px;
    background-repeat: repeat-x;

    .ig-border-box {
      padding: 20px;
    }
  }

  &.ig-intro-small {
    margin-bottom: $large-margin / 2;
    .ig-marble-1 {
      height: 100px;
      .ig-offset-image {
        img {
          height: 330px;
        }
      }
    }
  }
}

@media (max-width: 767.98px) {
  .ig-intro {
    .ig-mosaic {
      margin-top: 80px;
    }
    .ig-marble-1 {
      height: 120px;
      .ig-offset-image {
        top: -140px;
        img {
          height: 240px;
        }
      }
    }
    &.ig-intro-small {
      .ig-mosaic {
        margin-top: 40px;
      }
      .ig-marble-1 {
        .ig-offset-image {
          top: -100px;
          img {
            height: 180px;
          }
        }
      }
    }
  }
}
</style>
