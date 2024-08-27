import { Component } from '@angular/core';
import {BannersComponent} from "../../components/banners/banners.component";
import {ShowPostComponent} from "../../components/show-post/show-post.component";

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
export class HomePageComponent {

}
