import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';



@Directive({
  selector: '[appBannerDirective]',
  standalone: true
})
export class BannerDirectiveDirective implements OnInit{
  elementRef!: any;
  constructor(private el: ElementRef) {

  }
  elemHeight!:string;

  ngOnInit(): void {
    if(this.el.nativeElement.children.length==4){
      this.elementRef =this.el.nativeElement.children[3];
    }else {
      this.elementRef =this.el.nativeElement.children[1];
    }

    if(this.elementRef.style.height=='563px'){
      this.elemHeight='59.07vh'
    }else {
      this.elemHeight='272px'
    }
    this.elementRef.style.height='0'
    this.elementRef.style.opacity='0'

    }


  @HostListener('mouseover')MouseMove (e: MouseEvent) {
    this.elementRef.style.height=this.elemHeight
    this.elementRef.style.transition = "all 1s "
     this.elementRef.style.opacity='50%'

  }
  @HostListener('mouseleave')MouseLeave (e: MouseEvent) {
    this.elementRef.style.height='0'
    this.elementRef.style.opacity='0'
  }
}
