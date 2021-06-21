import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageOneComponent } from './pages/page-one/page-one.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: '', //Redirect all'homepage in caso di path vuoto
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path:'categorie',
    component: CategorieComponent
  },
  {
    path: '**', //Wildcard route - generico
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
