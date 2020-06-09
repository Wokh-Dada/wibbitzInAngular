import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private secondPageStore: ServiceService) { }

  /*listener*/
  blog() {
    return this.secondPageStore.getBlogItems().p;
  }

  newlistner() {
    return this.secondPageStore.getFirsrPageItems().newlistner;
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
