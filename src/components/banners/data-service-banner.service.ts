import {Injectable, Injector, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

export interface dataBannerService {
  title: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})


export class DataServiceBannerService {
  BnnerData$!: Observable<dataBannerService>;
  subBabber!: Subscription;

  constructor() {
    this.BnnerData$ = new Observable((observer: Observer<dataBannerService>) => {
      observer.next({
        title: 'We Are Hexashop',
        description: 'Lorem Ipsum is simply dummy text of the printingand typesetting industry.',
        image: '/assets/image/images.png'
      });
      observer.next({title: 'Women', description: 'Lorem Ipsum is simply dummy', image: '/assets/image/women.jpg'});
      observer.next({title: 'kids', description: 'Lorem Ipsum is simply dummy', image: '/assets/image/kids.png'});
      observer.next({title: 'Men', description: 'Lorem Ipsum is simply dummy', image: '/assets/image/men.png'});
      observer.next({
        title: 'Accessories',
        description: 'Lorem Ipsum is simply dummy',
        image: '/assets/image/accessories.jpg'
      });
    });
  }


  getDataBanner() {
    this.subBabber = this.BnnerData$.subscribe({
      next: value => console.log('Observable emitted the next value: ' + value.title),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    })

  }
}
