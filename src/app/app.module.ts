import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { TastoIniziaComponent } from './components/tasto-inizia/tasto-inizia.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { PaginaRistoranteComponent } from './pages/pagina-ristorante/pagina-ristorante.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import {EntryDialogComponent} from './entry-components/entry-dialog/entry-dialog.component';
import { RestaurantViewerComponent } from './components/restaurant-viewer/restaurant-viewer.component';

import { SearchBarInizialeComponent } from './components/search-bar-iniziale/search-bar-iniziale.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CarouselGalleryComponent } from './components/carousel-gallery/carousel-gallery.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { CategorieComponent } from './pages/categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogoComponent,
    TastoIniziaComponent,
    
    FooterComponent,
    CarouselComponent,
    PageOneComponent,
    NavbarComponent,
    SearchComponent,
    PaginaRistoranteComponent,
    SearchPipe,
    EntryDialogComponent,
    RestaurantViewerComponent,

    SearchBarInizialeComponent,
      GalleryComponent,
      CarouselGalleryComponent,
      ChiSiamoComponent,
      CategorieComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    MatDialogModule,
    
    FormsModule,  //si puo anche togliere?
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
