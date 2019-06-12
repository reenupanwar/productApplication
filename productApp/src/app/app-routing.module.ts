import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
    { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
    { path: '', component: PokemonComponent },
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'pokemon/:name', component: PokemonDetailComponent }
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
export class AppRoutingModule { }