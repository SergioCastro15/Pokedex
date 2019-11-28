<template>
  <div>
    <v-container>
        <h1 class="text-center">Pokedex</h1>
        <v-text-field
          v-model="namePokemon"
          label="search a pokemon"
        />
        <v-row justify="space-around">
          <div v-for="(type, index) in getType" :key="index">
            <v-checkbox v-model="types[type]" class="types" :label="type"></v-checkbox>
          </div>
        </v-row>
      <v-row>
        <v-col cols ="2" v-for="pokemon in getPokemon" :key="pokemon.id">
            <Card
              :name = pokemon.name
              :sprite = pokemon.sprites.front_default
              :typesPokemon = pokemon.types
            />
            <v-btn
              block
              small
              class="btn"
            >
              Show details
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from '../components/Card';
import Search from '../components/UI/Search';

export default {
  components: {
    Card,
    Search,
  },
  data() {
    return {
      namePokemon: '',
      types: {
        fire: false,
        water: false,
        flying: false,
        normal: false,
        poison: false,
        ground: false,
        grass: false,
        bug: false,
        fighting: false,
        rock: false,
      }
    };
  },

  beforeMount() {
    this.$store.dispatch('getListOfPokemon');
  },

  computed: {
    allPokemon() {
      return this.$store.state.pokemon;
    },
    getPokemon() {
      if( this.namePokemon.length > 0 ) {
        return this.allPokemon.filter(pokemon => pokemon.name.includes(this.namePokemon));
      }

      if( this.filterPokemonSelected.length > 0 ) {
        return this.getPokemonsChecked;
      }
      return this.allPokemon;
    },
    getType() {
      const type = Object.keys(this.types);
      return type;
    },
    getPokemonsChecked() {
      const pokemonSelected = this.filterPokemonSelected;

      const pokemonFiltered =  this.allPokemon.filter(element => {
        let isTypeChecked = false;

        element.types.forEach(typePokemon => {
          isTypeChecked = pokemonSelected.includes(typePokemon.type.name);
        });

        return isTypeChecked;
      });

      return pokemonFiltered;
    },
    filterPokemonSelected() {
      return this.getType.filter(type => this.types[type] === true);
    },
  }
}
</script>

<style lang="scss" scoped>
  .types{
    margin-right: 100px;
  }
</style>