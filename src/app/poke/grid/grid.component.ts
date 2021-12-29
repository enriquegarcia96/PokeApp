import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  pokeList: any[] = []

  constructor(private pokeService: PokeService) {
    pokeService.getList().subscribe((res: any) => {
      this.pokeList = res.results;
    });
  }
}
