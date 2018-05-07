import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { HideDirective } from './hide';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p [hide]="true">Should paragraph element be hide</p>
    <p [hide]="false">Should not paragraph element be hide</p>
  `
})
class TestComponent {
}

describe('(datatable): Hide', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElements: DebugElement[];
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HideDirective, TestComponent]
    })
    .createComponent(TestComponent);
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.directive(HideDirective));
  });

  it('should [hide] directive set style display to \'none\' if it was created with true as value', () => {
    expect((debugElements[0].nativeElement as HTMLElement).style.display).toBe('none');
  });
  it('should [hide] directive set style display to \'\' if it was created with false as value', () => {
    expect((debugElements[1].nativeElement as HTMLElement).style.display).toBe('');
  });
});
