/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, PublicKey, Serializer } from '@lorisleiva/js-core';

/**
 * Guard that charges another NFT (token) from a specific collection as payment
 * for the mint.
 *
 * List of accounts required:
 *
 * 0. `[writeable]` Token account of the NFT.
 * 1. `[writeable]` Metadata account of the NFT.
 * 2. `[]` Mint account of the NFT.
 * 3. `[]` Account to receive the NFT.
 * 4. `[writeable]` Destination PDA key (seeds [destination pubkey, token program id, nft mint pubkey]).
 * 5. `[]` spl-associate-token program ID.
 */

export type NftPayment = {
  requiredCollection: PublicKey;
  destination: PublicKey;
};

export function getNftPaymentSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<NftPayment> {
  const s = context.serializer;
  return s.struct<NftPayment>(
    [
      ['requiredCollection', s.publicKey],
      ['destination', s.publicKey],
    ],
    'NftPayment'
  );
}
