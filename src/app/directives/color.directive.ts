import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective  implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setRandomBackgroundColor();
  }

  @HostListener('click')
  onClick() {
    this.setRandomBackgroundColor();
  }

  private setRandomBackgroundColor() {
    const randomColor = this.getRandomColor();
    this.renderer.setStyle(this.el.nativeElement, 'background-color', randomColor);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}