import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();
  isLoggedIn = this.authService.isLoggedIn;

  menuItems = [
    { title: 'About Us', homePath: '/', pagePath: '/about' },
    { title: 'Papers', homePath: '/papers', pagePath: '/papers' },
    {
      title: 'Competitions',
      homePath: '',
      pagePath: '/competitions',
    },
    { title: 'Blog', homePath: '/blog', pagePath: '/blog' },
  ];

  loginItem = {
    title: 'Sign In',
    homePath: '/login',
    pagePath: '/login',
  };

  constructor(
    private bioService: BioService,
    private headerService: HeaderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
}
