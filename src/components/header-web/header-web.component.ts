import {Component, HostBinding} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LineEffectDirective} from "./line-effect.directive";

@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [
    RouterLink,
    LineEffectDirective
  ],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.css'
})
export class HeaderWebComponent {



}

