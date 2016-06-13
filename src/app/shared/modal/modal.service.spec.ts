import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import {ModalService} from './modal.service';

describe('Modal Service', () => {
  beforeEachProviders(() => [ModalService]);

  it('should ...',
     inject([ModalService], (service: ModalService) => { expect(service).toBeTruthy(); }));
});
