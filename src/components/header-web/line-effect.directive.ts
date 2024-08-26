import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appLineEffect]',
  standalone: true
})
export class LineEffectDirective {

  constructor() { }
  @HostBinding('style.width.px') width !:number;
  @HostBinding('style.color')color!:string
  spanelem=document.querySelector('.underlineHover');
  @HostListener('mousemove')MouseMove (e: MouseEvent) {

    this.color='#454545'
  }
}
