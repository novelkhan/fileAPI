import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // Implementing lazy loading by following format
  {path:'files', loadChildren: () => import('./modules/files/files.module').then(module => module.FilesModule)},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
