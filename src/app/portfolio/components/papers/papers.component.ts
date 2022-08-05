import { Component, Input, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Papers } from 'src/app/core/models/papers';
import { CrudService } from 'src/app/shared/services/crud.service';
import { HeaderService } from '../../../core/services/header.service';
import { PapersService } from '../../../core/services/papers.service';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css'],
})
export class PapersComponent implements OnInit {
  @Input() item: Papers = {} as Papers;
  paper: Papers = {} as Papers;

  constructor(
    // private crudApi: CrudService,
    private papersService: PapersService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    if (this.item) this.paper = this.item;
  }
}
