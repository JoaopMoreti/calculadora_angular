import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoracomponentComponent } from './calculadoracomponent.component';

describe('CalculadoracomponentComponent', () => {
  let component: CalculadoracomponentComponent;
  let fixture: ComponentFixture<CalculadoracomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoracomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoracomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
