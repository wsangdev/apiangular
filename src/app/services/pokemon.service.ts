import { HttpClient } from "@angular/common/http"; // HTTP 
import { Injectable } from "@angular/core";   // INJECTABLE
import { Observable } from "rxjs";  // OBSERVABLE 
import { PokemonResults } from "../Interfaces/pokemon";  // INTERFACE

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0` // esta es mi url de mi services

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(this.apiUrl);
  }
}