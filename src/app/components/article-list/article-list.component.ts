import { Component } from '@angular/core';
import Article from '../../models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})

export class ArticleListComponent {
  article: Article = {
    title: 'Titre de l\' article',
    content: 'Voici le contenu de l\' article.',
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'Angular',
  };
}
