import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';

import { Articulo } from './articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrl);
  }

}
