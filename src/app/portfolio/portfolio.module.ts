import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioRoutingModule } from './portfolio-routing.module';

import { AboutComponent } from './about/about.component';
import { PapersListComponent } from './pages/papers-list/papers-list.component';
import { PapersComponent } from './components/papers/papers.component';
import { PaperComponent } from './components/paper/paper.component';
import { SideDrawerComponent } from '../shared/components/side-drawer/side-drawer.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { SharedModule } from '../shared/shared.module';
import { ManagePapersComponent } from './pages/manage-papers/manage-papers.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    VirtualScrollerModule,
    SharedModule,
  ],
  declarations: [
    AboutComponent,
    PapersComponent,
    PaperComponent,
    PapersListComponent,
    ManagePapersComponent,
  ],
  schemas: [],
})
export class PortfolioModule {}
