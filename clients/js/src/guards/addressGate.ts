import { PublicKey } from '@lorisleiva/js-core';
import { getAddressGateSerializer } from '../generated';
import { CandyGuardManifest } from './core';

/**
 * The addressGate guard restricts the mint to a single
 * address which must match the minting wallet's address.
 *
 * This object defines the settings that should be
 * provided when creating and/or updating a Candy
 * Machine if you wish to enable this guard.
 */
export type AddressGateGuard = {
  /** The only address that is allowed to mint from the Candy Machine. */
  address: PublicKey;
};

/** @internal */
export const addressGateGuardManifest: CandyGuardManifest<AddressGateGuard> = {
  name: 'addressGate',
  settingsBytes: 32,
  settingsSerializer: getAddressGateSerializer,
};
