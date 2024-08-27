import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";
import { RatingModule } from 'primeng/rating';
import {postdetail, Postdetail} from "./post-data";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-post-cart',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    Button,
    RatingModule,
    FormsModule
  ],
  templateUrl: './post-cart.component.html',
  styleUrl: './post-cart.component.css'
})
export class PostCartComponent implements OnInit {
  constructor() {
  }
  listPost!: Postdetail[];
  value: any=3;

  ngOnInit(): void {
    this.listPost=postdetail
  }

}
