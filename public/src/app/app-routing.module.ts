import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'products',
    component : ProductListComponent
  },
  {
    path : 'new',
    component : ProductCreateComponent
  },
  {
    path : 'edit/:id',
    component : ProductEditComponent
  },
  {
    path : "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "**",
    component: PageNotFoundComponentComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
