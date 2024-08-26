import {Component, OnInit} from '@angular/core';
import {DataServiceBannerService} from "./data-service-banner.service";

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css'
})
export class BannersComponent implements OnInit {
  constructor(private service: DataServiceBannerService) {
  }

  ngOnInit(): void {
   const sub =this.service.getDataBanner()

    }

}
