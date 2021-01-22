import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = 'http://localhost:8088/api/projects/';

  constructor(private http:HttpClient) {}

  public getProjects(languages){
    return this.http.get(`${this.url}/${languages}`);
  }

  public getAllProjects(): Observable<any>{
    return this.http.get(this.url);
  }
  
}
