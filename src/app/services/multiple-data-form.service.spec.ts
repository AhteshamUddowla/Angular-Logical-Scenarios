import { TestBed } from '@angular/core/testing';

import { MultipleDataFormService } from './multiple-data-form.service';

describe('MultipleDataFormService', () => {
  let service: MultipleDataFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleDataFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
