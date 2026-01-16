import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Features } from './pages/features/features';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'features', component: Features },
    { path: 'services', component: Services },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' }
];
