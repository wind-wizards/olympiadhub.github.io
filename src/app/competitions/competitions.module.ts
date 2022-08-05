import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsComponent } from './pages/competitions/competitions.component';

@NgModule({
  declarations: [CompetitionsComponent],
  imports: [CommonModule, CompetitionsRoutingModule],
})
export class CompetitionsModule {}
