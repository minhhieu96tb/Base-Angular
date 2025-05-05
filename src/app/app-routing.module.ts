import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './service-custom/CustomPreloadingStrategy';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'admin/manage/all/1' },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  //   data: { preload: true },
  //   // runGuardsAndResolvers: 'always'
  //   // canActivate: [AuthGuard],
  // },
  // {
  //   path: 'not-authorized',
  //   component: NotAuthorizedComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: CustomPreloadingStrategy,
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy],
})

export class AppRoutingModule { }
