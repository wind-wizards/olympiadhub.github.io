import { Component, OnInit } from '@angular/core';
import { IPageInfo } from 'ngx-virtual-scroller';
import { mergeMap, Observable } from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';
import { PapersService } from 'src/app/core/services/papers.service';

@Component({
  selector: 'app-papers-list',
  templateUrl: './papers-list.component.html',
  styleUrls: ['./papers-list.component.css'],
})
export class PapersListComponent {
  queryConfig = {
    path: 'papers-list',
    field: 'date',
    limit: 10,
    reverse: false,
    prepend: false,
  };

  isHome$ = this.headerService.isHome();
  papers$ = this.isHome$.pipe(
    mergeMap((atHome) => this.papersService.getPapers(atHome))
  );

  categories = [
    {
      category: 'Subject',
      options: ['Math', 'Chemistry', 'Physics', 'Programming'],
      selected: 'subject',
    },
    {
      category: 'Level',
      options: ['International', 'National', 'State', 'Regional'],
      selected: 'level',
    },
    {
      category: 'Competition',
      options: ['IPHO', 'ICHO', 'IMO', 'IIO', 'APHO', 'NfBPHO'],
      selected: 'competition',
    },
  ];

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      useSmallerHeadings: false,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      useSmallerHeadings: true,
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

  constructor(
    // private crudApi: CrudService,
    private papersService: PapersService,
    private headerService: HeaderService
  ) {}
}
