import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../articulo.service';
import { Articulo } from '../articulos';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css']
})
export class ArticulosListComponent implements OnInit {
  selected: Boolean = false;
  selectedArticulo!: Articulo;

  articulos: Array<Articulo> = [];

  avgPrice: number = 0;

  constructor(private articuloService: ArticuloService) { }

  getArticulos(): void {
    this.articuloService.getArticulos().subscribe((articulos) => {
      this.articulos = articulos;
      this.avgPrice = this.calcAvg(articulos);
    });
  }

  calcAvg(articulos: Articulo[]) : number{
    let totalPrice: number = 0;
    articulos.forEach(articulo => {
      totalPrice = articulo.price + totalPrice;
    });
    let avgPrice: number = Math.ceil(totalPrice/(articulos.length));
    return avgPrice;
  }

  ngOnInit() {
    this.getArticulos();
  }

  onSelected(articulo: Articulo){
    this.selected = true;
    this.selectedArticulo = articulo;
  }


}
