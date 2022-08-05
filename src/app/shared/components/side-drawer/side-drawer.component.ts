import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.css'],
})
export class SideDrawerComponent implements OnInit {
  @Input() categories?: any[];

  constructor() {}

  ngOnInit(): void {}
}
