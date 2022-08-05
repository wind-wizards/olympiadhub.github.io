import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ObserverDirective } from './directives/observer.directive';
import { StepperComponent } from './components/stepper/stepper.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';
@NgModule({
  declarations: [
    InfiniteScrollComponent,
    ObserverDirective,
    StepperComponent,
    SideDrawerComponent,
  ],
  imports: [CommonModule, VirtualScrollerModule, FormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    InfiniteScrollComponent,
    ObserverDirective,
    StepperComponent,
    SideDrawerComponent,
  ],
})
export class SharedModule {}
