import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
   savedTheme = localStorage.getItem('theme') || 'dark';
    private themeSubject = new BehaviorSubject<string>(this.savedTheme);
    
    theme$ = this.themeSubject.asObservable();
  
    setTheme(theme: string) {
      this.themeSubject.next(theme);
      localStorage.setItem('theme', theme);
    }
}
