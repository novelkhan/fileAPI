import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FilesComponent } from './files.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { AllFilesComponent } from './components/all-files/all-files.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilesComponent,
    AddFileComponent,
    AllFilesComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class FileModule { }
