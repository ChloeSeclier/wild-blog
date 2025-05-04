import { Component, inject } from '@angular/core';
import Article from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})

export class ArticleListComponent {
  articles$!: Observable<Article[]>;

  apiService = inject(ApiService);

  ngOnInit() {
    this.articles$ = this.apiService.getArticles();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
