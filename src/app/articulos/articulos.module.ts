import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ArticulosListComponent],
  declarations: [ArticulosListComponent]
})
export class ArticulosModule { }
