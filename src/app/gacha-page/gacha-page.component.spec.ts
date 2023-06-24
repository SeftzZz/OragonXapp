import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaPageComponent } from './gacha-page.component';

describe('GachaPageComponent', () => {
  let component: GachaPageComponent;
  let fixture: ComponentFixture<GachaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GachaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
