import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OffresEmploiComponentComponent,
    ArticleComponentComponent,
    NavbarComponent,
    Notfound404Component,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
