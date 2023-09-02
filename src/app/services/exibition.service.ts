import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exibition } from '../model/exibition.model';
import { Artworks } from '../model/artworks.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ExibitionService {
  constructor(private httpClient: HttpClient) {}

  getExibitions(): Observable<Exibition[]> {
    return this.httpClient.get(`${baseURL}/exibitions`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Exibition(elem))) || [];
      })
    );
  }

  getOne(id: number): Observable<Exibition> {
    return this.httpClient.get(`${baseURL}/exibitions/${id}`).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  getArtworks(id: number): Observable<Artworks[]> {
    return this.httpClient.get(`${baseURL}/exibitions/${id}/artworks`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artworks(elem))) || [];
      })
    );
  }

  getAllArtworks() {
    return this.httpClient.get(`${baseURL}/artworks`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artworks(elem))) || [];
      })
    );
  }

  addExhibition(exibition: Exibition) {
    return this.httpClient.post(`${baseURL}/exibition`, Exibition);
  }
}
