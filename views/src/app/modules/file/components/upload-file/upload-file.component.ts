import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {

  public pageTitle = 'Welcome to fileupload component';

  @ViewChild('fileInput') fileInput: any;

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
    // formData.append('myFile', this.fileToUpload);
    formData.append('myFile', this.fileInput.nativeElement.files[0]);
    formData.append('altText', (this.fileForm.value.altText) as string);
    formData.append('description', (this.fileForm.value.description) as string);
    return this.http.post('https://localhost:7077/api/filemanager', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }

}
