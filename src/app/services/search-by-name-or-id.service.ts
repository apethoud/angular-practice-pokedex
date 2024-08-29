import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchByNameOrIdService {

  BASE_URL = "https://pokeapi.co/api/v2/"

  constructor() { }

  async getPokemonByNameOrId(searchTerm: string): Promise<any> {
    const data = await fetch(`${this.BASE_URL}/pokemon/${searchTerm}`);
    return (await data.json()) ?? [];
  }
}
