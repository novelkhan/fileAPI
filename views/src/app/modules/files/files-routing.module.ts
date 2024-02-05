import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { FilesComponent } from './files.component';

const routes: Routes = [
  {path: '', component: FilesComponent},
  {path: 'add', component: FileuploadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
