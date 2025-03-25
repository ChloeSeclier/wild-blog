import { Component } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list/article-list.component';

@Component({
  selector: 'app-home-page',
  imports: [ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
