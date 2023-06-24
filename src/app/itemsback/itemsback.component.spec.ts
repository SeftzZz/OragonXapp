import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsbackComponent } from './itemsback.component';

describe('ItemsbackComponent', () => {
  let component: ItemsbackComponent;
  let fixture: ComponentFixture<ItemsbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
