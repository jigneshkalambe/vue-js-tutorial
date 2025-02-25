<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { VBtn } from 'vuetify/components'
// import Home from './components/Home.vue'
import { ref } from 'vue'
import { QueryClient } from 'vue-query'
import { useQueryProvider } from 'vue-query'
import VueLoading from 'vue-loading-overlay'
import { isLoading } from './router/routes'
export default {
  name: 'App',
  components: {
    // Home,
    VBtn,
    VueLoading,
  },
  setup() {
    const queryClient = new QueryClient()
    useQueryProvider(queryClient)
    const randomRoute = ref(`/profile/id/${Math.floor(Math.random() * 10)}`)
    const gettingRandomRoute = () => {
      randomRoute.value = `/profile/id/${Math.floor(Math.random() * 10)}`
    }
    const loadingColor = 'black'
    const loaderSize = 20
    const loadingType = 'spinner'
    const transitions = 'fade'
    const loadingBg = 'white'
    return {
      randomRoute,
      gettingRandomRoute,
      queryClient,
      VueLoading,
      isLoading,
      loadingColor,
      loaderSize,
      loadingType,
      transitions,
      loadingBg,
    }
  },
}
</script>

<template>
  <vue-loading
    :active="isLoading"
    :is-full-page="true"
    :color="loadingColor"
    :size="loaderSize"
    :loader-type="loadingType"
    transition="transitions"
    width="60"
    height="60"
    opacity="0.5"
    :background-color="loadingBg"
  />
  <!-- <QueryClientProvider :client="queryClient"> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <!-- <Home /> -->
  <div>
    <div style="display: flex; flex-wrap: wrap; width: 500px; gap: 12px; margin-bottom: 20px">
      <v-btn style="width: 48%" to="/">Home Component </v-btn>
      <v-btn style="width: 48%" to="/A">
        <!-- <router-link to="/A"> -->
        Load A Component
        <!-- </router-link> -->
      </v-btn>
      <v-btn style="width: 48%" to="/B">
        <!-- <router-link to="/B"> -->
        Load B Component
        <!-- </router-link> -->
      </v-btn>
      <v-btn style="width: 48%" to="/C">
        <!-- <router-link to="/C"> -->
        Load C Component
        <!-- </router-link> -->
      </v-btn>
      <v-btn style="width: 48%" to="/profile">Profile Component </v-btn>
      <v-btn style="width: 48%" to="/profile/D">D's Component</v-btn>
      <v-btn style="width: 48%" to="/profile/Jignesh">Jignesh's Component</v-btn>
      <v-btn style="width: 48%" to="/random">Not a Route</v-btn>
      <v-btn style="width: 48%" :to="randomRoute" @click="gettingRandomRoute"
        >Route with Number</v-btn
      >
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
  <!-- </QueryClientProvider> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
