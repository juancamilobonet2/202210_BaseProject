import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { ArticulosDetailComponent } from './articulos-detail/articulos-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ArticulosListComponent],
  declarations: [ArticulosListComponent, ArticulosDetailComponent]
})
export class ArticulosModule { }
