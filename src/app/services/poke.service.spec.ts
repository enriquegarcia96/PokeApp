import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokeList } from '../poke/interfaces/pokeList.interface';

import { pokeListMock } from '../__mocks__/pokeList.mock';
import { PokeService } from './poke.service';
import { pokeDataMock } from '../__mocks__/pokeData.mock';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeService],
    });

    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeService);
  });

  afterEach(() => {
    httpClient.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // .- testiar la parte de un obserbablo .-//
  it('Deberia hacer una peticion htpp  DE TIPO GET', (done: DoneFn) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8';

    service.getList().subscribe(() => {
      done(); //termina el obserbablo
    });

    const req: TestRequest = httpClient.expectOne(url); // permite que espere una peticion

    expect(req.request.url).toEqual(service.url);
    expect(req.request.urlWithParams).toEqual(url);
    expect(req.request.method).toEqual('GET');

    req.flush(pokeListMock);
  });

  it('Deberia retornar la lista de pokemones', (done: DoneFn) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8';

    service.getList().subscribe((res) => {
      expect(res).toEqual(pokeListMock);
      expect(res.results.length).toBe(8);

      done(); //termina el obserbablo
    });

    httpClient.expectOne(url).flush(pokeListMock); // permite que espere una peticion
  });

  it('Deberia retornar la imagen del pokemon', (done: DoneFn) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';

    service.getPokeData('1').subscribe((res) => {
      expect(res).toEqual(pokeDataMock);
      done(); //termina el obserbablo
    });

    httpClient.expectOne(url).flush(pokeDataMock); // permite que espere una peticion
  });
});
