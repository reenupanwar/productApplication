import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Pokemon } from '../pokemon';
import { isNumber } from 'util';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  // Output
  message: string;
  @Output() selectedPokemon = new EventEmitter<string>();

  constructor(public restApi: PokemonListService,
    private router: Router,
    private route: ActivatedRoute, ) { }
  Pokemon: any = [];
  // selectedPokemon:Pokemon;
  currentPage = 1;
  page = {};
  limit = 20;
  totalPage;
  searchText;
  loading:boolean;

  ngOnInit() {
    this.loading = true;
    this.loadPokemons()
  }

  // Get employees list
  loadPokemons() {
    return this.restApi.getPokemon().subscribe((data: {}) => {
      this.Pokemon = data;
      this.totalPage = Math.ceil(this.Pokemon.count / this.limit);
      this.loading = false;
    })
  }

  selectedPageListender(parameter) {
    this.loading = true;
    if (isNumber(parameter)) {
      this.limit = parameter;
      return this.restApi.getPokemonwithLimit(parameter).subscribe((data: {}) => {
        this.Pokemon = data;
        this.totalPage = Math.ceil(this.Pokemon.count / this.limit);
        this.loading = false;

      })
    }
    else {
      return this.restApi.getPokemonwithQuery(parameter).subscribe((data: {}) => {
        this.Pokemon = data;
        this.totalPage = Math.ceil(this.Pokemon.count / this.limit);
        this.loading = false;
      })

    }

  }

  getDetails(name) {
    this.router.navigate(['pokemon/' + name]);

  }

}
