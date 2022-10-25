import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateallComponent } from './calculateall.component';

describe('CalculateallComponent', () => {
  let component: CalculateallComponent;
  let fixture: ComponentFixture<CalculateallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
