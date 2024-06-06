import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  
  pokemons: Pokemon[] = []; // defino variables para almacenar los datos

  /* Injecto el servicio en el constructor */
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemons = response.results; // asigna los datos a esa variable
      },
      error: (err) => {
        console.log('error al traer los datos de pokermo', err); // manejo del error
      },
    });
  }
}
