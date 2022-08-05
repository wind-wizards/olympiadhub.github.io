import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { queryConfig } from '../../models/queryConfig';
import { FireFeedService } from '../../services/fire-feed.service';
import { IPageInfo, VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
  providers: [
    FireFeedService,
    { provide: 'virtualScroller.scrollThrottlingTime', useValue: 0 },
    { provide: 'virtualScroller.scrollDebounceTime', useValue: 0 },
    { provide: 'virtualScroller.scrollAnimationTime', useValue: 750 },
    { provide: 'virtualScroller.scrollbarWidth', useValue: undefined },
    { provide: 'virtualScroller.scrollbarHeight', useValue: undefined },
    { provide: 'virtualScroller.checkResizeInterval', useValue: 1000 },
    { provide: 'virtualScroller.resizeBypassRefreshThreshold', useValue: 5 },
  ],
})
export class InfiniteScrollComponent implements OnInit {
  @ViewChild(VirtualScrollerComponent)
  private virtualScroller?: VirtualScrollerComponent;
  index: number;
  public itemsList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  public buffer: any[] = [1, 2, 3, 4, 5, 6, 7, 8];

  @Input() public itemListInput?: any[];
  @Input() public query?: queryConfig;
  @Input() public component?: any;
  @Input() public display?: boolean;
  public loading?: boolean;

  public dynamicComponent: any;

  displayClasses: string = '';

  query2: queryConfig = {
    path: 'papers-list',
    field: 'created_at',
    limit: 10,
    reverse: false,
    prepend: false,
  };

  constructor(private _feedService: FireFeedService) {
    this.index = 24;
  }

  displayArrangment() {}

  fetchMore($event: IPageInfo) {
    console.log(this.buffer, $event.endIndex);
    // if ($event.endIndex !== this.buffer.length - 1) return;
    // this.loading = true;
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
  fetchNextChunk(skip: number, limit: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.itemsList.slice(skip - 1, skip + limit - 1));
      }, 5000);
    });
  }
  ngOnDestroy() {}

  async ngOnInit() {
    if (this.itemListInput) this.buffer = this.itemListInput;
    if (this.component) this.dynamicComponent = this.component;
  }
}
