/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
} from '@lorisleiva/js-core';

// Accounts.
export type SetCandyMachineAuthorityInstructionAccounts = {
  candyMachine: PublicKey;
  authority: Signer;
};

// Arguments.
export type SetCandyMachineAuthorityInstructionArgs = {
  newAuthority: PublicKey;
};

// Data.
type SetCandyMachineAuthorityInstructionData =
  SetCandyMachineAuthorityInstructionArgs;
export function getSetCandyMachineAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SetCandyMachineAuthorityInstructionArgs> {
  const s = context.serializer;
  return s.struct<SetCandyMachineAuthorityInstructionData>(
    [['newAuthority', s.publicKey]],
    'SetCandyMachineAuthorityInstructionData'
  );
}

// Instruction.
export function setCandyMachineAuthority(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: SetCandyMachineAuthorityInstructionAccounts &
    SetCandyMachineAuthorityInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Candy Machine.
  keys.push({ pubkey: input.candyMachine, isSigner: false, isWritable: false });

  // Authority.
  signers.push(input.authority);
  keys.push({
    pubkey: input.authority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data =
    getSetCandyMachineAuthorityInstructionDataSerializer(context).serialize(
      input
    );

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
