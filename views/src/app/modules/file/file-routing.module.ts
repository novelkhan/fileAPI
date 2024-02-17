import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files.component';
import { AllFilesComponent } from './components/all-files/all-files.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  {path: '', component: FilesComponent},
  {path: 'all-files', component: AllFilesComponent},
  {path: 'upload', title: 'Upload' ,component: UploadFileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
