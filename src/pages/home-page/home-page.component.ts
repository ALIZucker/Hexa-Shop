import {Component, OnInit} from '@angular/core';
import {BannersComponent} from "../../components/banners/banners.component";
import {ShowPostComponent} from "../../components/show-post/show-post.component";
import {menPostItems, Postdetail} from "./post-data";
import {dataBannerService} from "../../components/banners/data-service-banner.service";
import {DataBackendService} from "./data-backend.service";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ExplorProductComponent} from "../../components/explor-product/explor-product.component";
import {SocialMediaComponent} from "../../components/social-media/social-media.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannersComponent,
    ShowPostComponent,
    ExplorProductComponent,
    SocialMediaComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  menPostItems!: Postdetail[];
  womanDataPostsArray:Postdetail[]=[];
  KidsDataPostsArray:Postdetail[]=[];
  constructor(private dataservice: DataBackendService) {
  }

  ngOnInit(): void {
    this.menPostItems = menPostItems
    this.womanDataPostsArray = this.dataservice.getDataFromBackend('http://localhost:3001/Post',0)
    this.KidsDataPostsArray = this.dataservice.getDataFromBackend('http://localhost:3001/Post',1)



  }


}
