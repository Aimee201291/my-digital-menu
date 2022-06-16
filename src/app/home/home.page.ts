import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  categories = [];
  highlights = [];
  featured = [];
  photo = '/assets/images/hamburguesa_background.jpg';

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  highlightSlideOpts =  {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
  };

  featuredSlideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true
  };

  showLocationDetail = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json').subscribe((res: any) => {
      console.log((res));

      this.categories = res.categories;
      this.highlights = res.highlights;
      this.featured = res.featured;
    });
  }

  doRefresh(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 2000);
  }

  onScroll(ev) {
    const offset = ev.detail.scrollTop;
    this.showLocationDetail = offset > 50;
  }

  scrollToLabel($event) {
    var titleELe = document.getElementById($event);
    this.content.scrollToPoint(0, titleELe.offsetTop - 50);
  }
}
