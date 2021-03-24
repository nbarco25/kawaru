import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  bannerImages: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];
  mySwiper: Swiper;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      observer: true,
      observeParents: true,
      parallax: true,
      centeredSlides: true,
      centerInsufficientSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    });
  }

}
