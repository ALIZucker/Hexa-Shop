import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appLineEffect]',
  standalone: true
})
export class LineEffectDirective {

  constructor(private element: ElementRef) { }


  @HostBinding('style.width.px') width !:number;
  @HostBinding('style.color')color!:string

  @HostListener('mousemove')MouseMove (e: MouseEvent) {

    this.element.nativeElement.children[1].style.width='60px'
    this.color='#6a6a6a'
  }
  @HostListener('mouseleave')MouseLeave (e: MouseEvent) {
    this.element.nativeElement.children[1].style.width='0'
    this.color='#000'
  }
}
