import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Array<{title: string, description: string, imageUrl?: string, technologies: string[]}> = [];

  constructor() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        title: 'Project 1',
        description: 'Description for Project 1',
        technologies: ['Angular', 'TypeScript', 'CSS'],
        imageUrl: 'assets/images/profile.jpg'
      },
      {
        title: 'Project 2',
        description: 'Description for Project 2',
        technologies: ['JavaScript', 'HTML', 'CSS'],
      }
    ];
  }
}
