import {Component, Input, OnInit, Output} from '@angular/core';
import {ɵEmptyOutletComponent} from "@angular/router";
import { CarouselModule } from 'primeng/carousel';
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";
import {PostCartComponent} from "../post-cart/post-cart.component";
import {Postdetail} from "../../pages/home-page/post-data";

@Component({
  selector: 'app-show-post',
  standalone: true,
  imports: [
    ɵEmptyOutletComponent,
    CarouselModule,
    TagModule,
    Button,
    PostCartComponent
  ],
  templateUrl: './show-post.component.html',
  styleUrl: './show-post.component.css'
})
export class ShowPostComponent implements OnInit {

  @Input({required:true}) Title!:string;
  @Input({required:true}) descrip!:string;
  @Input({required:true}) Post!:Postdetail[];

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
