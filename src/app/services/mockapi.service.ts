import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaBlockProps } from '../components/pizza-block/pizza-block.component';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private http: HttpClient) { }

  getPizzasJson(): Observable<PizzaBlockProps[]> {
    return this.http.get<PizzaBlockProps[]>('https://63de507d9fa0d60060fc8e1c.mockapi.io/items');
  }

}
