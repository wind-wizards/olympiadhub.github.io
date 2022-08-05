import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PaperComponent } from './components/paper/paper.component';
import { PapersListComponent } from './pages/papers-list/papers-list.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: '',
    component: PapersListComponent,
    data: { animation: 'papers' },
    // children: [
    //   {
    //     path: 'id',
    //     component: PaperComponent,
    //     data: { animation: 'paper' },
    //   },
    // ],
  },
  {
    path: ':id',
    component: PaperComponent,
    data: { animation: 'paper' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
