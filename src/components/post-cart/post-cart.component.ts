import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";
import {postdetail, Postdetail} from "./post-data";

@Component({
  selector: 'app-post-cart',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    Button
  ],
  templateUrl: './post-cart.component.html',
  styleUrl: './post-cart.component.css'
})
export class PostCartComponent implements OnInit {
  constructor() {
  }
  listPost!: Postdetail[];

  ngOnInit(): void {
    this.listPost=postdetail
  }

}
