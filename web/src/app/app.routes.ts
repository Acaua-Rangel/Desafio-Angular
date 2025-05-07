import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { WelcomePageComponent } from './page/welcome-page/welcome-page.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomePageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'dashboard',
        component: WelcomePageComponent
    }
];
