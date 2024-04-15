import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class blocService {

  private baseUrl = 'http://10.0.2.15:8087/bloc';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findAll`);
  }

  add(bloc: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, bloc);
  }

  update(id: number, bloc: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, bloc);
  }
  

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findById/${id}`);
  }
}
