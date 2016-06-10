import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WalletService } from './wallet.service';

describe('Wallet Service', () => {
  beforeEachProviders(() => [WalletService]);

  it('should ...',
      inject([WalletService], (service: WalletService) => {
    expect(service).toBeTruthy();
  }));
});
