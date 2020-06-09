import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private firstPageStore: ServiceService) {
  }

  getFirsrPageItems() {
    return this.firstPageStore.getFirsrPageItems();
  }

  /*news-a*/
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

  /*news-a*/

  /*new-post*/
  newPostTitle() {
    return this.firstPageStore.getFirsrPageItems().newPostTitle;
  }

  newPost() {
    return this.firstPageStore.getFirsrPageItems().newPost;
  }

  /**
   * клик по ссылке read report в компоненте newpost
   */
  public clickOnNewPost({detail}) {
    return console.log("clickOnNewPost:", detail);
  }

  /*new-post*/

  /*popular-resources*/
  popularAsideTitle() {
    return this.firstPageStore.getFirsrPageItems().popularAsideTitle;
  }

  popularAside() {
    return this.firstPageStore.getFirsrPageItems().popularAside;
  }

  popularBanner() {
    return this.firstPageStore.getFirsrPageItems().popularBanner;
  }

  /**
   * клик по элементам aside sidebar в компоненте popular resources
   */
  public clickOnPopular({detail}) {
    return console.log("clickOnPopular:", detail);
  }

  /*popular-resources*/

  /*events-a*/
  eventsTitle() {
    return this.firstPageStore.getFirsrPageItems().eventsTitle;
  }

  events() {
    return this.firstPageStore.getFirsrPageItems().events;
  }

  /**
   * клик по ссылке read report в компоненте newpost
   */
  public clickOnEvents({detail}) {
    return console.log("clickOnEvents:", detail);
  }

  /*events-a*/

  /*listener*/
  newlistner() {
    return this.firstPageStore.getFirsrPageItems().newlistner;
  }

  /**
   * клик по button в компоненете Listiner
   */
  public clickOnListiner({detail}) {
    return console.log("clickOnListiner:", detail);
  }

  /*listener*/


  ngOnInit(): void {
  }

}
