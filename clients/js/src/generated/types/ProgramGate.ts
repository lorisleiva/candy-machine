/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, PublicKey, Serializer } from '@lorisleiva/js-core';

/**
 * Guard that restricts the programs that can be in a mint transaction. The guard allows the
 * necessary programs for the mint and any other program specified in the configuration.
 */

export type ProgramGate = { additional: Array<PublicKey> };

export function getProgramGateSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ProgramGate> {
  const s = context.serializer;
  return s.struct<ProgramGate>(
    [['additional', s.vec(s.publicKey)]],
    'ProgramGate'
  );
}
