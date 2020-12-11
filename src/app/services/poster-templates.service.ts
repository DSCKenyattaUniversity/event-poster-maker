import { Injectable } from '@angular/core';
import { Template } from '../models/poster';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosterTemplatesService {

  constructor(private http: HttpClient) { }

  allTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>('templates/meta.json');
  }
}
