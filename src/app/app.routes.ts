import { Routes } from '@angular/router';
import { Home } from './testmenu/home/home';
import { Analytic } from './testmenu/analytic/analytic';
import { Setting } from './testmenu/setting/setting';

export const routes: Routes = [
    {
        path:'',component:Home
    },
    {
        path:'analytics',component:Analytic
    },
    {
        path:'settings',component:Setting
    }
];
