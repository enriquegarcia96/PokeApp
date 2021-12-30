import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeList } from '../poke/interfaces/pokeList.interface';
import { PokeData } from '../poke/interfaces/pokeData.interface';
@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private baseURl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  get url() {
    return this.baseURl + '/pokemon/';
  }

  //.- trae la lista .-//
  getList(page: number = 0) {
    return this.http.get<PokeList>(`${this.baseURl}/pokemon/`, {
      params: {
        offset: page,
        limit: 8,
      },
    });
  }

  // .- trae las imagenes .-//
  getPokeData(name: string) {
    return this.http.get<PokeData>(`${this.baseURl}/pokemon/${name}`);
  }
}
