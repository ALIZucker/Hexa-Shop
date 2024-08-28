import { Component ,Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BotenComponent} from "../boten/boten.component";

@Component({
  selector: 'app-explor-product',
  standalone: true,
  imports: [
    CommonModule,
    BotenComponent
  ],
  templateUrl: './explor-product.component.html',
  styleUrl: './explor-product.component.css'
})
export class ExplorProductComponent {


  protected readonly alert = alert;
  @Input({required:true}) Title!:string;
  @Input({required:true}) imageadd1!:string;
  @Input({required:true}) imageadd2!:string;


}
