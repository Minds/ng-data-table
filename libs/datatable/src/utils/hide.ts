import {
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';

function isBlank(obj: any): boolean {
  return obj === undefined || obj === null;
}

@Directive({
  selector: '[hide]'
})
export class HideDirective {

  private _prevCondition = false;
  private _displayStyle: string;

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
  }

  @Input()
  set hide(newCondition: boolean) {
    this.initDisplayStyle();

    if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
      this._prevCondition = true;
      this.renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
    } else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
      this._prevCondition = false;
      this.renderer.setStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
    }
  }

  private initDisplayStyle() {
    if (this._displayStyle === undefined) {
      const displayStyle = this._elementRef.nativeElement.style.display;
      if (displayStyle !== 'none') {
        this._displayStyle = displayStyle;
      }
    }
  }
}
