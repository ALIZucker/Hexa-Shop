import { Component } from '@angular/core';
import {BannersComponent} from "../../components/banners/banners.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannersComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
