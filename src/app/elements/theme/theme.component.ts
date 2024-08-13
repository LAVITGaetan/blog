import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  accentColor: string = "purple"
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
        document.documentElement.style.setProperty('--clr-purple', '#0402FE');
        document.documentElement.style.setProperty('--clr-green', '#44b678');
        document.documentElement.style.setProperty('--clr-pink', '#FC0299');
        document.documentElement.style.setProperty('--clr-yellow', '#FDAB05');
        this.setAccentColor(theme)
        break;
      case 'dark':
        document.getElementsByClassName('interface-item-block')[0].classList.remove('border-selected')
        document.getElementsByClassName('interface-item-block')[1].classList.add('border-selected')
        document.documentElement.style.setProperty('--clr-main', '#111824');
        document.documentElement.style.setProperty('--clr-main-light', '#2E3542');
        document.documentElement.style.setProperty('--clr-text', '#ffffff');
        document.documentElement.style.setProperty('--clr-text-grey', '#E2E4EF');
        document.documentElement.style.setProperty('--clr-purple', '#8787FA');
        document.documentElement.style.setProperty('--clr-green', '#8BFF8B');
        document.documentElement.style.setProperty('--clr-pink', '#FD86CE');
        document.documentElement.style.setProperty('--clr-yellow', '#FBD47E');
        document.documentElement.style.setProperty('--clr-yellow', '#FBD47E');
        this.setAccentColor(theme)
        break;
      default:
        break;
    }
  }
  setAccentColor(theme: string) {
    if (theme === 'light') {
      switch (this.accentColor) {
        case 'purple':
          document.documentElement.style.setProperty('--clr-accent-selected', '#0402FE');
          break;
        case 'green':
          document.documentElement.style.setProperty('--clr-accent-selected', '#44b678');
          break;
           case 'pink':
          document.documentElement.style.setProperty('--clr-accent-selected', '#FC0099');
          break; 
          case 'yellow':
          document.documentElement.style.setProperty('--clr-accent-selected', '#FDAB05');
          break;
        default:
          break;
      }
    } else {
      switch (this.accentColor) {
        case 'purple':
          document.documentElement.style.setProperty('--clr-accent-selected', '#8787FA');
          break;
        case 'green':
          document.documentElement.style.setProperty('--clr-accent-selected', '#8BFF8B');
          break;
           case 'pink':
          document.documentElement.style.setProperty('--clr-accent-selected', '#FD86CE');
          break; 
          case 'yellow':
          document.documentElement.style.setProperty('--clr-accent-selected', '#FBD47E');
          break;
        default:
          break;
      }
    }
  }

  changeAccentColor(color: string) {
    this.accentColor = color;
    this.setAccentColor(this.themeSelected)
  }
}
