import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  themeSelected: string = 'dark'
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }
  showSettings() {
    let setting = document.getElementById("settings")
    if (setting)
      setting.style.display = 'block'
  }
}
