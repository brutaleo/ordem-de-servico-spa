import { TestBed } from '@angular/core/testing';

import { PostoColetaService } from './posto-coleta.service';

describe('PostoColetaService', () => {
  let service: PostoColetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostoColetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
