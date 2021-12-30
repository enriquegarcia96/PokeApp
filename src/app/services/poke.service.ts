import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private baseURl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  //.- trae la lista .-//
  getList(page: number = 0) {
    return this.http.get(`${this.baseURl}/pokemon/`, {
      params: {
        offset: page,
        limit: 8,
      },
    });
  }

  // .- trae las imagenes .-//
  getPokeData(name: string) {
    return this.http.get(`${this.baseURl}/pokemon/${name}`);
  }
}
