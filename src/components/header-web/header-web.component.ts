import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LineEffectDirective} from "./line-effect.directive";
import {CommonModule} from "@angular/common";
interface itemsMenu{
  label: string;
  url: string;
}
@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [
    RouterLink,
    LineEffectDirective,CommonModule
  ],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.css'
})
export class HeaderWebComponent implements OnInit{
  menuItems!: itemsMenu[] ;
    ngOnInit(): void {
        this.menuItems =[
          {label:'Home',
          url:'/'},{label:'men',url:'/men'},{label:'woman',url:'/women'},{label:'kid',url:'/kid'}
          ,{label:'About',url:'/about'},{label:'Contact',url:'/contact'}
        ]
    }



}

