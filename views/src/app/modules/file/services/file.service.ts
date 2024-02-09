import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Files } from '../models/files.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<Files[]> {
    return this.http.get<Files[]>(`${environment.fileApiBaseUrl}/Filemanager`);
  }






  // addFile(model: AddMan): Observable<void> {
  //   return this.http.post<void>(`${environment.manApiBaseUrl}/man`, model);
  // }

  // getManById(id: number): Observable<Man> {
  //   return this.http.get<Man>(`${environment.manApiBaseUrl}/man/`+ id);
  // }

  // updateMan(id: number, model: Man) : Observable<Man> {
  //   return this.http.put<Man>(`${environment.manApiBaseUrl}/man/`+ id, model);
  // }

  // deleteMan(id: number) : Observable<Man> {
  //   return this.http.delete<Man>(`${environment.manApiBaseUrl}/man/`+ id);
  // }







//   getImageBlob(id:Number): Observable<Blob> {
//     return this.http.get(`${environment.fileApiBaseUrl}/Filemanager/${id}`{responseType: "blob"})
//     .toPromise();
//   }
}

// get(`https://localhost:7077/api/filemanager/${id}`, {responseType: 'blob'})
