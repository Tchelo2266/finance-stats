import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  // },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( mod => mod.DashboardPage)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'movimento',
    loadChildren: () => import('./movimento/movimento.module').then( m => m.MovimentoPageModule)
  },  {
    path: 'cadastro-movimento',
    loadChildren: () => import('./cadastro-movimento/cadastro-movimento.module').then( m => m.CadastroMovimentoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
