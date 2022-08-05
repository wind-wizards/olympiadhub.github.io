import { Component, Input, OnInit } from '@angular/core';
import { Papers } from 'src/app/core/models/papers';
import { Router, ActivatedRoute } from '@angular/router';
import { PapersService } from 'src/app/core/services/papers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
})
export class PaperComponent implements OnInit {
  paper$!: Observable<Papers>;
  mypaper!: Papers;
  constructor(
    private route: ActivatedRoute,
    private paperService: PapersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.paper$ = this.paperService.getPaperById(id);
  }
}
