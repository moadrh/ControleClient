import { TestBed } from '@angular/core/testing';

import { EmployeByServiceServiceService } from './employe-by-service-service.service';

describe('EmployeByServiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeByServiceServiceService = TestBed.get(EmployeByServiceServiceService);
    expect(service).toBeTruthy();
  });
});
