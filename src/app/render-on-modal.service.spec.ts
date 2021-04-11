import { TestBed } from '@angular/core/testing';

import { RenderOnModalService } from './render-on-modal.service';

describe('RenderOnModalService', () => {
  let service: RenderOnModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderOnModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
