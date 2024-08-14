import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './elements/hero/hero.component';
import { FooterComponent } from './elements/footer/footer.component';
import { LastArticlesComponent } from './elements/last-articles/last-articles.component';
import { ThemeComponent } from './elements/theme/theme.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesListComponent } from './elements/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    FooterComponent,
    LastArticlesComponent,
    ThemeComponent,
    ArticlesComponent,
    CategoriesComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
