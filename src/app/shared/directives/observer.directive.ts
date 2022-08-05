import {
  Directive,
  EventEmitter,
  ElementRef,
  Input,
  Output,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appObserver]',
})
export class ObserverDirective implements AfterViewInit {
  @Input() intersectionDebounce = 0;
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionRoot?: HTMLElement;
  @Input() intersectionThreshold?: number | number[];

  @Output() visibilityChange: EventEmitter<any> = new EventEmitter();

  private _intersectionObserver!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver((entries) => {
      this._checkForIntersection(entries);
    }, {});
    this._intersectionObserver.observe(<Element>this.element.nativeElement);
  }

  private _checkForIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this._checkIfIntersecting(entry)) {
        this.visibilityChange.emit();

        // Unobserve the element and disconnect the Intersection Observer
        this._intersectionObserver.unobserve(this.element.nativeElement);
        this._intersectionObserver.disconnect();
      }
    });
  }

  private _checkIfIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}
