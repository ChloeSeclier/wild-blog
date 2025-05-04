import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Article from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/articles';

  private http = inject(HttpClient);

  // Méthode pour récupérer tous les articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  // Méthode pour récupérer un article par id
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
