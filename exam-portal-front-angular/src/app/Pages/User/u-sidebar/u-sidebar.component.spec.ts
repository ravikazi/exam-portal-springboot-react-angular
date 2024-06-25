import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USidebarComponent } from './u-sidebar.component';

describe('USidebarComponent', () => {
  let component: USidebarComponent;
  let fixture: ComponentFixture<USidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
