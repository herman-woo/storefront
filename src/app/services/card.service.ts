import { Injectable } from '@angular/core';
import { Card } from 'src/models/Card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Card[]>{
    return this.http.get<Card[]>("http://localhost:4200/assets/data.json")
  }
}
