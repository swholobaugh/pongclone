<template>
  <v-app>
    <v-app-bar app clipped-left dark color="green lighten-1">
      <v-toolbar-title>VuePongClone</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app clipped class="white">
      <v-list-item>
        <v-list-item-content>
          <v-spacer />
          <v-list-item-title class="display-2">{{ $store.state.score }}</v-list-item-title>
          <v-list-item-subtitle>Score</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Game</v-list-item-title>
          <v-list-item-subtitle>Settings</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="title">Ball</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item>
          <v-slider v-model="$store.state.diameter" label="Diameter" color="success darken-2" track-color="success lighten-1" thumb-label max="200" min="50"></v-slider>
        </v-list-item>
        <v-list-item>
          <v-slider v-model="$store.state.xBallChange" label="Speed X" color="success darken-2" track-color="success lighten-1" thumb-label max="10" min="-10"></v-slider>
        </v-list-item>
        <v-list-item>
          <v-slider v-model="$store.state.yBallChange" label="Speed Y" color="success darken-2" track-color="success lighten-1" thumb-label max="10" min="-10"></v-slider>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-slider v-model="$store.state.paddleWidth" label="Width" color="success darken-2" track-color="success lighten-1" thumb-label max="300" min="10"></v-slider>
        </v-list-item>
        <v-list-item>
          <v-slider v-model="$store.state.paddleSpeed" label="Speed" color="success darken-2" track-color="success lighten-1" thumb-label max="200" min="10"></v-slider>
        </v-list-item>
      </v-list>
      <v-list-item>
        <v-btn block color="green lighten-1 white--text" @click="$router.go(0)">Reload</v-btn>
      </v-list-item>
    </v-navigation-drawer>
    <v-content class="error noOverflow">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  }
}
</script>
