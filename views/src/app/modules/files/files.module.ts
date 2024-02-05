import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { FilesComponent } from './files.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FileuploadComponent,
    FilesComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    HttpClientModule
  ]
})
export class FilesModule { }
