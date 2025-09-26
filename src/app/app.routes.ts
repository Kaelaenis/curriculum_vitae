import { Routes } from '@angular/router';

import { Resume } from './pages/resume/resume';
import { Projects } from './pages/projects/projects';
import { Main } from './pages/main/main';

export const routes: Routes = [
    {path: 'resume', component: Resume},
    {path: 'projects', component: Projects},
    {path: '', component: Main}
];


