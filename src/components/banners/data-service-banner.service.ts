import {Injectable, Injector, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Observer, Subscription} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

export interface dataBannerService {
  title: string;
  description: string;
  image: string;
  hovered?: boolean
}

@Injectable({
  providedIn: 'root'
})


export class DataServiceBannerService {
  BnnerData$!: Observable<dataBannerService>;
  subBabber!: Subscription;
  BannerArray: dataBannerService[] = [];

  // banner: BehaviorSubject<Array<{cat: string, data:dataBannerService}>> = new BehaviorSubject<any>([]);

  constructor() {
    // this.banner.next()
    this.BnnerData$ = new Observable((observer: Observer<dataBannerService>) => {
      observer.next({
        title: 'We Are Hexashop',
        description: 'Lorem Ipsum is simply dummy text of the printingand typesetting industry.',
        image: '/assets/image/images.png'
      });
      observer.next({title: 'Women', description: 'Lorem Ipsum is simply dummy', image: '/assets/image/women.jpg'});
      observer.next({title: 'kids', description: 'Lorem Ipsum is simply dummy', image: '/assets/image/kids.png'});
      observer.next({title: 'Men', description: 'Lorem Ipsum is simply dummy', image: '/assets/image/men.jpg'});
      observer.next({
        title: 'Accessories',
        description: 'Lorem Ipsum is simply dummy',
        image: '/assets/image/accessories.jpg'
      });
      observer.complete();
    });
  }


  getDataBanner(): dataBannerService[] {
    this.BnnerData$.subscribe(value => this.BannerArray.push(value as dataBannerService));
    return this.BannerArray;

  }
}
