import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulos';

@Component({
  selector: 'app-articulos-detail',
  templateUrl: './articulos-detail.component.html',
  styleUrls: ['./articulos-detail.component.css']
})
export class ArticulosDetailComponent implements OnInit {

  @Input() articuloDetail! : Articulo;

  constructor() { }

  ngOnInit() {
  }

}
