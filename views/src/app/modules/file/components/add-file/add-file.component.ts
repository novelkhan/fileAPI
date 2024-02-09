import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrl: './add-file.component.scss'
})
export class AddFileComponent {



  public pageTitle = 'Welcome to fileupload component';
  fileForm = new FormGroup({
    altText: new FormControl(''),
    description: new FormControl('')
  });
  fileToUpload: any;
  constructor(private http:  HttpClient) {
  }
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  saveFileInfo()
  {
    debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    formData.append('altText', (this.fileForm.value.altText) as string);
    formData.append('description', (this.fileForm.value.description) as string);
    return this.http.post('https://localhost:7077/api/filemanager', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }



}
