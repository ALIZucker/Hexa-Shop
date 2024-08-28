import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Postdetail} from "./post-data";

@Injectable({
  providedIn: 'root'
})
export class DataBackendService {

  constructor(private http: HttpClient) {
  }

  getDataFromBackend(url: string): Observable<Postdetail[][]> {
    return this.http.get<Postdetail[][]>(url)
  }
}
