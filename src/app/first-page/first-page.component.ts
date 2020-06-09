import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private firstPageStore: ServiceService) {}

  newsImg() {
    return this.firstPageStore.newsImg();
  }

  news() {
    return this.firstPageStore.news();
  }

  sidebar() {
    return this.firstPageStore.sidebar();
  }

  /**
   * клик по элементам clickOnNews
   */
  public clickOnNews({detail}) {
    return console.log("clickOnNews:", detail);
  }


  ngOnInit(): void {
  }

}
