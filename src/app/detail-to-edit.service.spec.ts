import { TestBed, inject } from '@angular/core/testing';

import { DetailToEditService } from './detail-to-edit.service';

describe('DetailToEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailToEditService]
    });
  });

  it('should be created', inject([DetailToEditService], (service: DetailToEditService) => {
    expect(service).toBeTruthy();
  }));
});
