import {Component, OnInit} from '@angular/core';
import {dataBannerService, DataServiceBannerService} from "./data-service-banner.service";
import {BotenComponent} from "../boten/boten.component";
import {BannerDirectiveDirective} from "./banner-directive.directive";
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [
    BotenComponent,
    BannerDirectiveDirective,
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css'
})
export class BannersComponent implements OnInit {
  constructor(private service: DataServiceBannerService) {
  }

  dataBanners!: dataBannerService[];

  ngOnInit(): void {
    this.dataBanners = this.service.getDataBanner()
  }

  showMessage($event: string) {
    alert($event)
  }

  onMouseover(index: number): void {
    this.dataBanners[index].hovered = true
  }

  onMouseleave(index: number): void {
    this.dataBanners[index].hovered = false
  }
}
