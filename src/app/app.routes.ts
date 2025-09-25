import { Routes } from '@angular/router';

import { Resume } from './resume/resume';
import { Projects } from './projects/projects';
import { Main } from './main/main';

export const routes: Routes = [
    {path: 'resume', component: Resume},
    {path: 'projects', component: Projects},
    {path: '', component: Main}
];


