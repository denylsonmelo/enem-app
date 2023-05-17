import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'abas',
    component: TabsPage,
    children: [
      {
        //abas/tab1
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        //abas/tab2
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        //abas/tab3
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        //abas/perfil
        path: 'perfil',
        loadComponent: () =>
          import('../perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        //abas/
        path: '',
        redirectTo: '/abas/perfil',
        pathMatch: 'full',
      },
    ],
  },
  {
    // /
    path: '',
    redirectTo: '/abas/perfil',
    pathMatch: 'full',
  },
];
