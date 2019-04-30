import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeByServiceComponent } from './employe-by-service.component';

describe('EmployeByServiceComponent', () => {
  let component: EmployeByServiceComponent;
  let fixture: ComponentFixture<EmployeByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
