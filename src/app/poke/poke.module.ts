import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [GridComponent, NavbarComponent, CardComponent],
  imports: [CommonModule],
  exports: [GridComponent],
})
export class PokeModule {}
