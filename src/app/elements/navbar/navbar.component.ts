import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  themeSelected: string = 'dark'
  constructor(private themeService: ThemeService, private route: ActivatedRoute) {
    this.themeService.theme$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }

  currentRoute : string = ''

  ngOnInit() {
    this.route.url.subscribe(el => {
      this.currentRoute = el[0].path
    })
  }
  showSettings() {
    let setting = document.getElementById("settings")
    if (setting)
      setting.style.display = 'block'
  }
}
