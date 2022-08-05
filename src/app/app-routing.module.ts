import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StepperComponent } from './shared/components/stepper/stepper.component';
const routes: Routes = [
  {
    path: 'stepper',
    component: StepperComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'papers',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'competitions',
    loadChildren: () =>
      import('./competitions/competitions.module').then(
        (m) => m.CompetitionsModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/Admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
