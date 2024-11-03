import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComercialComponent } from './crear-comercial.component';

describe('CrearComercialComponent', () => {
  let component: CrearComercialComponent;
  let fixture: ComponentFixture<CrearComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearComercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
