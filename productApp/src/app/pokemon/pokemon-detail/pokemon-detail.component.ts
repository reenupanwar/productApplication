import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError, ObservableInput } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(public restApi: PokemonListService,
    private router: Router,
    private route: ActivatedRoute) { }
  name:string;
  pokemonData: any = {};
  objectKeys = Object.keys;

 

  ngOnInit() { 
    this.name = this.route.snapshot.params.name;
    this.loadPokemonDetails();
    
  }

  loadPokemonDetails() {
    this.restApi.getPokemonDetail(this.name).subscribe((data: {}) => {
      console.log("data---", typeof data)
    this.pokemonData = new Array([
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      },
      {
        color: "cyan",
        value: "#0ff"
      },
      {
        color: "magenta",
        value: "#f0f"
      },
      {
        color: "yellow",
        value: "#ff0"
      },
      {
        color: "black",
        value: "#000"
      }
    ]);
    console.log("this.pokemonData---", typeof this.pokemonData,this.pokemonData)
    })

  }

}
