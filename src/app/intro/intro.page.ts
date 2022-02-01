import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      subtitle: "Que es MIUZIK?",
      description: "Proyecto de seminario.",
      image: "assets/images/logo.jpg",
      alt: "imagen de logo"
    },
    {
      id: 1,
      subtitle: "Musica a tu gusto.",
      description: "Encuentra tu musica favorita.",
      image: "assets/images/i4.jpg",
      alt: "imagen de musica"
    },
    {
      id: 2,
      subtitle: "Crea y comparte play list.",
      description: "Crea y comparte play list.",
      image: "assets/images/i2.jpg",
      alt: "imagen de musica 2"
    },
    {
      close:"arrow-forward-circle-outline",
      id: 3,
      subtitle: "Aun no nos conocias?",
      description: "Empecemos",
      icon: "close",
      image: "assets/images/i5.jpg",
      alt: "imagen de musica 3"
    }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
