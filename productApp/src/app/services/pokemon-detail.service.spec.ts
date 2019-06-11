import { TestBed } from '@angular/core/testing';

import { PokemonDetailService } from './pokemon-detail.service';

describe('PokemonDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDetailService = TestBed.get(PokemonDetailService);
    expect(service).toBeTruthy();
  });
});
