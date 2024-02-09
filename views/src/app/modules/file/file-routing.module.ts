import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files.component';
import { AllFilesComponent } from './components/all-files/all-files.component';

const routes: Routes = [
  {path: '', component: FilesComponent},
  {path: 'all-files', component: AllFilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
