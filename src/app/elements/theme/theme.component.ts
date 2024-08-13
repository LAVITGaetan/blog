import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  themeSelected: string = "dark"
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }
  closeSettings() {
    let setting = document.getElementById("settings")
    if (setting)
      setting.style.display = 'none'
  }
  addBorder(theme: string) {
    this.themeService.setTheme(theme)
    switch (theme) {
      case 'light':
        document.getElementsByClassName('interface-item-block')[0].classList.add('border-selected')
        document.getElementsByClassName('interface-item-block')[1].classList.remove('border-selected')
        document.documentElement.style.setProperty('--clr-main', '#FFFFFF');
        document.documentElement.style.setProperty('--clr-main-light', '#EAEBE9');
        document.documentElement.style.setProperty('--clr-text', '#111824');
        document.documentElement.style.setProperty('--clr-text-grey', '#2E3542');
        break;
      case 'dark':
        document.getElementsByClassName('interface-item-block')[0].classList.remove('border-selected')
        document.getElementsByClassName('interface-item-block')[1].classList.add('border-selected')
        document.documentElement.style.setProperty('--clr-main', '#111824');
        document.documentElement.style.setProperty('--clr-main-light', '#2E3542');
        document.documentElement.style.setProperty('--clr-text', '#ffffff');
        document.documentElement.style.setProperty('--clr-text-grey', '#E2E4EF  ');
        break;
      default:
        break;
    }
  }
  changeAccentColor(color: string) {
    let selected_color = ''
    switch (color) {
      case 'purple':
        selected_color = '#8787FA';
        break;
      case 'green':
        selected_color = '#8BFF8B';
        break;
      case 'pink':
        selected_color = '#FD86CE';
        break;
      case 'yellow':
        selected_color = '#FBD47E';
        break;

      default:
        selected_color = '#8787FA';
        break;
    }
    document.documentElement.style.setProperty('--clr-accent-selected', selected_color);
  }
}
