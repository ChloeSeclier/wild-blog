import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ArticlePageComponent} from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'contact', component:ContactPageComponent},
    {path:'article/:id', component:ArticlePageComponent},
    {path:'inscription', component:InscriptionComponent},
    {path:'**', component:NotFoundComponent}
];
