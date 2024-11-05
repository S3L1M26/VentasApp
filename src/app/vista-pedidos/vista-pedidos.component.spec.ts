import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPedidosComponent } from './vista-pedidos.component';

describe('VistaPedidosComponent', () => {
  let component: VistaPedidosComponent;
  let fixture: ComponentFixture<VistaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
