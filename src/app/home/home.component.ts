import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bio$ = this.bioService.getBio();
  deferLoad = false;

  competitions = [
    {
      title: '🧪 Chemistry',
      bgcolor: 'bg-success',
      lottie: 'https://assets8.lottiefiles.com/packages/lf20_dzu4dzms.json',
      speed: 1,
      description:
        'Learn about the proccess to participate in the international chemistry olympiad (IChO)',
    },
    {
      title: '🔭 Physics',
      bgcolor: 'bg-danger',
      lottie:
        'https://assets1.lottiefiles.com/private_files/lf30_rn8hog3p.json',
      speed: 1,
      description:
        'Learn about the proccess to participate in the international physics olympiad (IPhO)',
    },
    {
      title: '🧾 Mathematics',
      bgcolor: 'bg-primary',

      lottie: 'https://assets9.lottiefiles.com/packages/lf20_e27xvycf.json',
      // lottie: 'https://assets6.lottiefiles.com/packages/lf20_p6ywl1q2.json',
      speed: 0.5,
      description:
        'Learn about the proccess to participate in the international mathematics olympiad (IMO)',
    },
  ];

  papers = [
    {
      title: 'IPHO XL',
      subject: 'physics',
      img: '../../../assets/images/shhh.PNG',
      description: 'Lorem Ipsum dolorem martir',
      bgclass: 'bg-danger',
      link: '/papers/paper/1',
    },
    {
      title: 'ICHO XL',
      img: '../../../assets/images/shhh.PNG',
      subject: 'chemistry',
      description: 'Lorem Ipsum dolorem martir',
      bgclass: 'bg-success',
      link: '/papers/paper/2',
    },
    {
      title: 'IMO XL',
      subject: 'mathematics',
      img: '../../../assets/images/shhh.PNG',
      description: 'Lorem Ipsum dolorem martir',
      bgclass: 'bg-secondary',
      link: '/papers/paper/3',
    },
  ];

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: false,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];

  constructor(private bioService: BioService) {}

  ngOnInit(): void {}
}
