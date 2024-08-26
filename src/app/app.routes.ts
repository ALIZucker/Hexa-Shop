import { Routes } from '@angular/router';
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {ManPageComponent} from "../pages/man-page/man-page.component";

export const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'man',component:ManPageComponent},
];
