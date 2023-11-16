import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseURL = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getRepositories(username: any): Observable<any> {
    return this.http.get(`${this.baseURL}${username}/repos`);
  }
}
