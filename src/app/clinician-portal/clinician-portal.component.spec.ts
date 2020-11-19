import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianPortalComponent } from './clinician-portal.component';

describe('ClinicianPortalComponent', () => {
  let component: ClinicianPortalComponent;
  let fixture: ComponentFixture<ClinicianPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
