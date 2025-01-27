/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, PublicKey, Serializer } from '@lorisleiva/js-core';

/**
 * Guard that requires another NFT (token) from a specific collection to be burned.
 *
 * List of accounts required:
 *
 * 0. `[writeable]` Token account of the NFT.
 * 1. `[writeable]` Metadata account of the NFT.
 * 2. `[writeable]` Master Edition account of the NFT.
 * 3. `[writeable]` Mint account of the NFT.
 * 4. `[writeable]` Collection metadata account of the NFT.
 */

export type NftBurn = { requiredCollection: PublicKey };

export function getNftBurnSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<NftBurn> {
  const s = context.serializer;
  return s.struct<NftBurn>([['requiredCollection', s.publicKey]], 'NftBurn');
}
