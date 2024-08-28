import {Component, OnInit,Input} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";
import { RatingModule } from 'primeng/rating';
import { Postdetail} from "../../pages/home-page/post-data";
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
  @Input({required:true}) listPost!: Postdetail[];


  ngOnInit(): void {
    this.listPost=this.listPost;
  }

}
