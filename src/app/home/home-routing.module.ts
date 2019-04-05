import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children:
            [
                {
                    path: 'popular',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '..popular/popular.module#PopularPageModule'
                            }
                        ]
                }
           ]
     }
]

@NgModule({
  
  exports: [RouterModule]
})
export class HomeRoutingModule { }
