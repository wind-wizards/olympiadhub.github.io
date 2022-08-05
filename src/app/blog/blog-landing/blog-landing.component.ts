import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { IPageInfo } from 'ngx-virtual-scroller';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css'],
})
export class BlogLandingComponent implements OnInit {
  links$ = this.scully.available$.pipe(
    map((routes) =>
      routes.filter((route: ScullyRoute) => route.route.startsWith('/blog/'))
    )
  );
  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      titleClasses: '',
    },
  ];

  loading: boolean = false;

  fetchMore($event: IPageInfo) {
    if ($event.endIndex !== 8 - 1) return;
    this.loading = true;
    // console.log('loading more ...');
    // this.fetchNextChunk(this.buffer.length, 4).then(
    //   (chunk) => {
    //     this.buffer = this.buffer.concat(chunk);
    //     this.loading = false;
    //   },
    //   () => {
    //     this.loading = false;
    //   }
    // );
  }

  // fetchNextChunk(skip: number, limit: number): Promise<number[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.itemsList.slice(skip - 1, skip + limit - 1));
  //     }, 5000);
  //   });
  // }

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {}
}
