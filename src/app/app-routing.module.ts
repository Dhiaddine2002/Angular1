import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {product} from "./Core/model/products";
import {ProductComponent} from "./product/product.component";
import {offsetSegment} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {ArticleComponentComponent} from "./article-component/article-component.component";
import {OffresEmploiComponentComponent} from "./offres-emploi-component/offres-emploi-component.component";
import {Notfound404Component} from "./notfound404/notfound404.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";


const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:"full"},
  {path:'products',component:ProductComponent},
  {path:'articles',component:ArticleComponentComponent},
  {path:'product/:id',component:DetailProduitComponent},
  {path:'offresemploi',component:OffresEmploiComponentComponent},
  {path:'**',component:Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
