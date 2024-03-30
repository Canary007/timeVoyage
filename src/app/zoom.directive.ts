import { Directive, ElementRef, HostListener, Input } from '@angular/core';

interface ZoomConfig {
  zoomFactor: number;
  minZoom: number;
  maxZoom: number;
}

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input('appZoom') zoomConfig: ZoomConfig = { zoomFactor: 0.1, minZoom: 0.1, maxZoom: 3 };

  constructor(private el: ElementRef) { }

  @HostListener('mousewheel', ['$event']) onMouseWheel(event: WheelEvent) {
    event.preventDefault();

    const { zoomFactor, minZoom, maxZoom } = this.zoomConfig;
    const currentZoom = parseFloat(this.el.nativeElement.style.zoom || '1');
    const cursorX = event.clientX - this.el.nativeElement.getBoundingClientRect().left;
    const cursorY = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
    const newZoom = event.deltaY > 0 ? Math.max(minZoom, currentZoom - zoomFactor) : Math.min(maxZoom, currentZoom + zoomFactor);
    const scale = newZoom / currentZoom;
    const newScrollLeft = this.el.nativeElement.scrollLeft + (cursorX * (scale - 1));
    const newScrollTop = this.el.nativeElement.scrollTop + (cursorY * (scale - 1));

    this.el.nativeElement.style.zoom = newZoom.toString();
    this.el.nativeElement.scrollLeft = newScrollLeft;
    this.el.nativeElement.scrollTop = newScrollTop;
  }
}
