import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(public restApi: PokemonListService) { }
  id:number = 1;
  pokemonData: any = {};

 

  ngOnInit() { 
    this.restApi.getPokemonDetail(this.id).subscribe((data: {}) => {
    this.pokemonData = data;
    })
  }

}
