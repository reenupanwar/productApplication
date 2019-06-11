import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(public restApi: PokemonListService) { }
  Pokemon: any = [];

  ngOnInit() {
    this.loadPokemons()
    }

    // Get employees list
    loadPokemons() {
  return this.restApi.getPokemon().subscribe((data: {}) => {
  this.Pokemon = data;
  })
  }

}
