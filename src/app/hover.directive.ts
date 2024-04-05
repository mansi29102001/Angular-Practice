import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'aliceblue';

  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;    
  }

  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'cadetblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
