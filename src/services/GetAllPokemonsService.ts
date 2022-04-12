import fetch from 'node-fetch'
import { Pokemon } from '../models/Pokemon'

export class GetAllPokemonsService {
    private allPokemons: Pokemon [] = [];

    constructor () {
      this.getPokemons()
    }

    public async getPokemonsData () {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      const data = await response.json()
      data.results.forEach((element: any) => this.getPokemonData(element))
    }

    public async getPokemonData (pokemon: any) {
      const url = pokemon.url
      const response = await fetch(url)
      const data = await response.json()

      const newPokemon: Pokemon = await new Pokemon(data.forms[0].name, data.base_experience, data.types[0].type.name, data.id)
      this.allPokemons.push(newPokemon)
      console.log(this.allPokemons)
    }

    public async getPokemons () {
      await this.getPokemonsData()
    }
}
