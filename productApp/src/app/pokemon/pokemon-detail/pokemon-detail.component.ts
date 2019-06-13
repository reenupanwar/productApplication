import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError, ObservableInput } from 'rxjs';
import * as _ from "lodash"

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
  loading:boolean;

 

  ngOnInit() { 
    this.loading = true;
    this.name = this.route.snapshot.params.name;
    this.loadPokemonDetails();
    
  }

  key_value_pairs(obj) 
   {
    var keys = this._keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], obj[keys[i]]];

    }
    return pairs;
  }

 _keys(obj) 
  {
    if (!this.isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
   isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }


  loadPokemonDetails() {
    this.restApi.getPokemonDetail(this.name).subscribe((data: {}) => {
    this.pokemonData = data;
    this.loading = false;
    })

  }

}
