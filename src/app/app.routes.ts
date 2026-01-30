import { Routes } from '@angular/router';
import { Home } from './testmenu/home/home';
import { Analytic } from './testmenu/analytic/analytic';
import { Setting } from './testmenu/setting/setting';
import { Bindingx } from './bindingx/bindingx';
import { authGuard } from './Guard/auth-guard';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { Userdashboard } from './userdashboard/userdashboard';
import { authcGuard } from './Guard/authc-guard';
import { authdGuard } from './Guard/authd-guard';
import { authmGuard } from './Guard/authm-guard';
import { Status } from './status/status';
import { Learnsignal } from './signal/learnsignal/learnsignal';
import { Product } from './signal/product/product';
import { Datatransfer } from './signal/datatransfer/datatransfer';

export const routes: Routes = [
    {
        path: '', component: Home,
        children: [
            { path: 'admin', component: Admin },
            { path: 'user', component: Userdashboard }
        ],
        canActivateChild: [authcGuard]
    },
    {
        path: 'analytics', component: Analytic, canActivate: [authGuard]
    },
    {
        path: 'settings', component: Setting, canMatch: [authmGuard]
    },
    {
        path: 'binding', component: Bindingx
    },
    {
        path: 'login', component: Login, canDeactivate: [authdGuard]
    },
    {
        path: 'signal', component: Learnsignal
    },
    {
        path: 'product', component: Product
    },
    {
        path: 'transfer', component: Datatransfer
    },
    {
        path: '**', component: Status
    }
];
