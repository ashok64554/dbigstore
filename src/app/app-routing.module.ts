import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'product-image', loadChildren: './add-product/product-image/product-image.module#ProductImagePageModule' },
  { path: 'product-details', loadChildren: './add-product/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'product-details/:upload',
    resolve:{
      special: DataResolverService
    },
    loadChildren: './add-product/product-details/product-details.module#ProductDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
