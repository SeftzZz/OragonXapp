import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsremoveComponent } from './cartsremove.component';

describe('CartsremoveComponent', () => {
  let component: CartsremoveComponent;
  let fixture: ComponentFixture<CartsremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
