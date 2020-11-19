import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyClinicianComponent } from './modify-clinician.component';

describe('ModifyClinicianComponent', () => {
  let component: ModifyClinicianComponent;
  let fixture: ComponentFixture<ModifyClinicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyClinicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyClinicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
