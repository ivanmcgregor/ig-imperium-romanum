<template>
  <div>
    <div class="ig-banner">
      <div class="ig-banner-mosaik"></div>
      <h1 class="ig-hero mb-0 p-1">
        <nuxt-link to="/">IG IMPERIUM ROMANUM</nuxt-link>
      </h1>
    </div>
    <b-navbar toggleable="lg" class="ig-nav">
      <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <div v-for="route in routes" :key="route.name">
            <b-nav-item :to="route.path">{{ route.text }}</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import getSortedMainMenu from '~/utils/routesHelper'

export default {
  name: 'HeaderComponent',
  computed: {
    routes() {
      return getSortedMainMenu(this.$router.options.routes)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/variables.scss';

.ig-banner {
  width: 100%;

  .ig-hero {
    background: $primary;
    background-image: url('~assets/marble.jpg');
    background-size: 512px;
    text-align: center;
    a {
      color: $white;
      font-size: 3.5rem;
    }
  }

  .ig-banner-mosaik {
    background-image: url('~assets/mosaik.jpg');
    background-size: auto 60px;
    height: 60px;
  }
}
@media (max-width: 767.98px) {
  .ig-banner {
    .ig-hero {
      a {
        font-size: 3rem;
      }
    }
  }
}

.ig-nav.navbar-light .navbar-nav .nav-link {
  font-family: $headings-font-family;
  font-size: 1.1rem;
  color: $primary;
  &.nuxt-link-exact-active {
    text-decoration: underline;
  }
}
</style>
