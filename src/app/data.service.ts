import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  
  public getCatalogue(): Observable<JSON[]> {
    return this.httpClient.get<JSON[]>('http://localhost:3000/catalogo');
  }
}
