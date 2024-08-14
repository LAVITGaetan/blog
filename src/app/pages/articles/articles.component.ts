import { Component } from '@angular/core';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  currentCategory: string = 'tout';

  articles = [
    {
      category: 'litterature',
      title: 'Charles Bukowski : Le Poète de la Réalité Brute et du Quotidien',
      tag: 'Littérature',
      backgroundImage: 'bukowski.webp'
    },
    {
      category: 'uiux',
      title: 'Dark Mode vs Light Mode : Quel Impact sur l’Expérience Utilisateur ?',
      tag: 'UI/UX',
      backgroundImage: 'dark-light.webp'
    },
    {
      category: 'histoire',
      title: 'La Chute du Mur de Berlin : Un Tournant dans l\'Histoire Mondiale',
      tag: 'Histoire',
      backgroundImage: 'berlin.webp'
    },
    {
      category: 'litterature',
      title: 'Friedrich Nietzsche : Philosophie, Rébellion et L\'Homme au-delà du Bien et du Mal',
      tag: 'Littérature',
      backgroundImage: 'friedrich-nietzsche.webp'
    }
    ,   {
      category: 'litterature',
      title: 'Le Livre des Cinq Anneaux : Stratégie et Philosophie d\'un Maître Samouraï',
      tag: 'Littérature',
      backgroundImage: 'musashi.webp'
  },   {
      category: 'litterature',
      title: 'Les Rêveries du Promeneur Solitaire : Une Exploration de Rousseau',
      tag: 'Littérature',
      backgroundImage: 'assets/img/rousseau.webp'
  },
  {
      category: 'litterature',
      title: 'Les Mondes Contrastés de Dickens',
      tag: 'Littérature',
      backgroundImage: 'assets/img/dickens.webp'
  },
  {
      category: 'histoire',
      title: 'L\'Ascension et la Chute de l\'Empire Romain',
      tag: 'Histoire',
      backgroundImage: 'assets/img/rome.webp'
  },
  {
      category: 'uiux',
      title: 'Accessibilité en UI/UX',
      tag: 'UI/UX',
      backgroundImage: 'assets/img/accessibility.webp'
  },
  {
      category: 'histoire',
      title: 'Les Grandes Découvertes : De Christophe Colomb à Magellan',
      tag: 'Histoire',
      backgroundImage: 'assets/img/discoveries.webp'
  },
  {
      category: 'uiux',
      title: 'L\'Impact du Responsive Design sur l\'Expérience Utilisateur',
      tag: 'UI/UX',
      backgroundImage: 'assets/img/responsive-design.webp'
  },
  {
      category: 'histoire',
      title: 'La Révolution Industrielle : Transformations et Innovations',
      tag: 'Histoire',
      backgroundImage: 'assets/img/industrial-revolution.webp'
  },
  {
      category: 'uiux',
      title: 'Maîtriser les Grilles en CSS : Une Introduction Complète',
      tag: 'UI/UX',
      backgroundImage: 'assets/img/grid.webp'
  },
  {
      category: 'histoire',
      title: 'Les Guerres Napoléoniennes : Une Réflexion sur l\'Influence de Napoléon',
      tag: 'Histoire',
      backgroundImage: 'assets/img/napoleon.webp'
  },
  {
      category: 'uiux',
      title: 'Les Outils CSS pour Des Designs Réactifs et Performants',
      tag: 'UI/UX',
      backgroundImage: 'assets/img/tools.webp'
  },
  {
      category: 'litterature',
      title: 'Les Misérables : Une Analyse de Victor Hugo',
      tag: 'Littérature',
      backgroundImage: 'assets/img/hugo.webp'
  },
  {
      category: 'histoire',
      title: 'L\'Époque Médiévale : Une Exploration des Dynasties Européennes',
      tag: 'Histoire',
      backgroundImage: 'assets/img/medieval.webp'
  },
  {
      category: 'uiux',
      title: 'Tendances Actuelles dans le Design de Produit Numérique',
      tag: 'UI/UX',
      backgroundImage: 'assets/img/design-trend.webp'
  }
  ];
  filterArticles(category: string) {
    this.currentCategory = category
  }
}
