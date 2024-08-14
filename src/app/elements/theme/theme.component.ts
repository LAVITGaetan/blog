import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  accentColor: string = localStorage.getItem('color') || 'purple'
  themeSelected: string = localStorage.getItem('theme') || 'dark'
  constructor(private themeService: ThemeService) {

    this.themeService.theme$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }

  ngOnInit() {
    this.applyTheme(this.themeSelected, this.accentColor);
  }

  applyTheme(theme: string, color: string) {
    this.addBorder(theme);
    this.changeAccentColor(color)
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
        document.documentElement.style.setProperty('--clr-purple', '#7656ff');
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
        document.documentElement.style.setProperty('--clr-green', '#50d350');
        document.documentElement.style.setProperty('--clr-pink', '#FD86CE');
        document.documentElement.style.setProperty('--clr-yellow', '#ffc139');
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
          document.documentElement.style.setProperty('--clr-accent-selected', '#7656ff');
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
          document.documentElement.style.setProperty('--clr-accent-selected', '#50d350');
          break;
        case 'pink':
          document.documentElement.style.setProperty('--clr-accent-selected', '#FD86CE');
          break;
        case 'yellow':
          document.documentElement.style.setProperty('--clr-accent-selected', '#ffc139');
          break;
        default:
          break;
      }
    }
  }

  changeAccentColor(color: string) {
    this.accentColor = color;
    localStorage.setItem('color', color);
    this.setAccentColor(this.themeSelected)
  }
}
