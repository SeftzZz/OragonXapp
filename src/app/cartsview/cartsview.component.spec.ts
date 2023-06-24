import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsviewComponent } from './cartsview.component';

describe('CartsviewComponent', () => {
  let component: CartsviewComponent;
  let fixture: ComponentFixture<CartsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
