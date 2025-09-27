import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Array<{title: string, description: string, imageUrl?: string, technologies: string[], link?: string}> = [];

  constructor() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        title: "Bot d'attribution rôles Discord",
        description: 'Un bot Discord permettant d\'attribuer des rôles automatiquement en fonction des réactions. Version initiale en Node.js avec Discord.js qui demande soit une hébergement permanent, soit un démarrage manuel.',
        technologies: ['Node.js', 'Discord.js'],
        imageUrl: 'assets/images/discord-bot.jpg',
        link: 'https://github.com/Kaelaenis/Discord_reactionrolebot'
      },
      {
        title: "Site de portfolio",
        description: 'Un site web personnel pour présenter mes projets et compétences.',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Angular', 'Bootstrap', 'TypeScript', 'FontAwesome'],
        imageUrl: 'assets/images/portfolio.jpg',
        link: 'https://github.com/Kaelaenis/curriculum_vitae'
      },
    ];
  }
}
