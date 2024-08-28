import {Component, OnInit} from '@angular/core';
import {BannersComponent} from "../../components/banners/banners.component";
import {ShowPostComponent} from "../../components/show-post/show-post.component";
import {menPostItems, Postdetail} from "./post-data";
import {dataBannerService} from "../../components/banners/data-service-banner.service";
import {DataBackendService} from "./data-backend.service";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannersComponent,
    ShowPostComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  menPostItems!: Postdetail[];
  allDataPosts$!:Observable<Postdetail[][]>;
  womanDataPostsArray:Postdetail[]=[];
  constructor(private dataservice: DataBackendService) {
  }

  ngOnInit(): void {
    this.menPostItems = menPostItems
    this.allDataPosts$ = this.dataservice.getDataFromBackend('http://localhost:3001/Post')

    this.allDataPosts$.subscribe((response) => {
       response[0].forEach(post => { console.log(post) ;
         this.womanDataPostsArray.push(post as Postdetail)})
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.error,"--------------");
      })

  }


}
