<template>
  <v-card
    max-width="400"
    :hover="true"
  >
    <v-img :src="sprite"> </v-img>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-text class="text--primary">
      {{typePokemon}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    sprite: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '',
    },
    typesPokemon: {
      type: Array,
      default: '',
    }
  },

  computed: {
    typePokemon() {
      return this.typesPokemon.map(element => element.type.name).join(' - ');
    }
  }
}
</script>