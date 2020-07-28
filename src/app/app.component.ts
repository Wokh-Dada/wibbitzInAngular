import {Component} from '@angular/core';
import {ServiceService} from "./service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {constructor(private headerStore: ServiceService, private router: Router) {
  }

  /**
   * путь к логотипу
   * */
  logo() {
    return this.headerStore.getHeaderItems().logoUrl;
  }

  /**
   * путь к меню
   * */
  menu() {
    return this.headerStore.getHeaderItems().menu;
  }

  /**
   * boolean кнопки преключения тем
   **/
  theme = true;

  /**
   * функция переключения тем
   **/
  clickOnTheme() {
    this.theme = !this.theme
  }

  /**
   * клик по элементам Toggle theme
   */
  public clickOnSwitchTheme({detail}) {
    if (detail.id === 'theme_1'){
      this.router.navigate(['']);
    } else if (detail.id === 'theme_2') {
      this.router.navigate(['theme_2']);
    }
  }

  /**
   * текст кнопки header
   * */
  searchSubscribe() {
    return this.headerStore.getHeaderItems().searchSubscribe;
  }


  /**
   * клик по элементам Header
   */
  public clickOnHeader({detail}) {
    return console.log('clickOnHeader:', detail)

  }

  /*****footer****/

  /**
   * путь к логотипу
   * */
  footer() {
    return this.headerStore.getFooter();
  }

  /**
   * клик по элементам Footer
   */
  public clickOnFooter({detail}) {
    return console.log('clickOnHeader:', detail)
  }

}
