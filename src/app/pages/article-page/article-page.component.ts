import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import Article from '../../models/article.model';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../../components/article-thumbnail/article-thumbnail.component';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent implements OnInit {
  articleId!: number;
  articles$! : Observable<Article>;

  route: ActivatedRoute = inject(ActivatedRoute);
  apiService = inject(ApiService);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.articles$=this.apiService.getArticleById(this.articleId);  
    });
  }
}
