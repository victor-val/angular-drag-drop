import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDivDragComponent } from './simple-div-drag.component';

describe('SimpleDivDragComponent', () => {
  let component: SimpleDivDragComponent;
  let fixture: ComponentFixture<SimpleDivDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDivDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDivDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
