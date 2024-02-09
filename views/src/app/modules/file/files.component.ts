import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent {

  public pageTitle = 'Welcome to View Files component';
  constructor(private http:  HttpClient) {
    this.getAllFiles();
  }
  files: any = [];
  getAllFiles()
  {
    debugger
    return this.http.get('https://localhost:7077/api/filemanager')
    .subscribe((result) => {
      this.files = result;
      console.log(result);
  });
  }

  downloadFile(id: number, contentType: string)
  {
    return this.http.get(`https://localhost:7077/api/filemanager/${id}`, {responseType: 'blob'})
    .subscribe((result: Blob) => {
      const blob = new Blob([result], { type: contentType }); // you can change the type
      const url= window.URL.createObjectURL(blob);
      window.open(url);
      console.log("Success");
    });
  }

}
