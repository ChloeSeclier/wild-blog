import { Component, Input } from '@angular/core';
import Article from '../../models/article.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss',
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
}
