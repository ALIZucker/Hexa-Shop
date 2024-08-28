import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Postdetail} from "./post-data";

@Injectable({
  providedIn: 'root'
})
export class DataBackendService {


  constructor(private http: HttpClient) {
  }

  getDataFromBackend(url: string, index: number): Postdetail[] {
    let arrayData: Postdetail[] = [];
    this.http.get<Postdetail[][]>(url).subscribe((response) => {
        response[index].forEach(post => {
          console.log(post);
          arrayData.push(post as Postdetail)
        })
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.error, "--------------");
      })
    return arrayData
  }
}
