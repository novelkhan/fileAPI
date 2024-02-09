import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from '../../services/file.service';
import { Files } from '../../models/files.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrl: './all-files.component.scss'
})
export class AllFilesComponent implements OnInit{
  public pageTitle = 'Welcome to View Files component';

  files$?: Observable<Files[]>;

  constructor(private fileService: FileService, private http:  HttpClient) {
  }
  

  



  ngOnInit(): void {
    this.files$ = this.fileService.getAllFiles();
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