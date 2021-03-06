import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianFormComponent } from './clinician-form.component';

describe('ClinicianFormComponent', () => {
  let component: ClinicianFormComponent;
  let fixture: ComponentFixture<ClinicianFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
