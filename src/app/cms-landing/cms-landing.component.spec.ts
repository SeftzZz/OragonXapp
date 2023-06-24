import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsLandingComponent } from './cms-landing.component';

describe('CmsLandingComponent', () => {
  let component: CmsLandingComponent;
  let fixture: ComponentFixture<CmsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
