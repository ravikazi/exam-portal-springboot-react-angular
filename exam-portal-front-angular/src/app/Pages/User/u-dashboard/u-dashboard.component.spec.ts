import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDashboardComponent } from './u-dashboard.component';

describe('UDashboardComponent', () => {
  let component: UDashboardComponent;
  let fixture: ComponentFixture<UDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
