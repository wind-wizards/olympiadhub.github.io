import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  declarations: [BlogComponent, BlogLandingComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    VirtualScrollerModule,
  ],
})
export class BlogModule {}
