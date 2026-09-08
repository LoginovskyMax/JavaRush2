import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRickApi } from '../types/auth';

@Injectable({
  providedIn: 'root',
})
export class RickApi {

constructor(private http: HttpClient) {}

private route = 'https://rickandmortyapi.com/api/character/?page=2"'
private rickData: null = null

fetchRickApi(){
     return this.http.get<IRickApi>(this.route)
  }

}
