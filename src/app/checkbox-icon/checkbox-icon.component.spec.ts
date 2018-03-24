import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIconComponent } from './checkbox-icon.component';

describe('CheckboxIconComponent', () => {
  let component: CheckboxIconComponent;
  let fixture: ComponentFixture<CheckboxIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
