import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import Article from './models/article.model';
import { map, Subscription } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};

export class ExampleComponent {

  articles: Article[] = [];
  articleSubscription: Subscription;

  http = inject(HttpClient); 

  ngOnInit() {
    this.articleSubscription = this.http.get<Article[]>('http://api.exemple.com/articles').subscribe(data => {
      this.articles = data;
    });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}