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
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type SetCollectionInstructionAccounts = {
  candyMachine: PublicKey;
  authority: Signer;
  authorityPda: PublicKey;
  payer: Signer;
  collectionMint: PublicKey;
  collectionMetadata: PublicKey;
  collectionAuthorityRecord: PublicKey;
  newCollectionUpdateAuthority: Signer;
  newCollectionMetadata: PublicKey;
  newCollectionMint: PublicKey;
  newCollectionMasterEdition: PublicKey;
  newCollectionAuthorityRecord: PublicKey;
  tokenMetadataProgram: PublicKey;
  systemProgram?: PublicKey;
};

// Arguments.
export type SetCollectionInstructionData = { discriminator: Array<number> };

export type SetCollectionInstructionArgs = {};

export function getSetCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SetCollectionInstructionArgs, SetCollectionInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    SetCollectionInstructionArgs,
    SetCollectionInstructionData,
    SetCollectionInstructionData
  >(
    s.struct<SetCollectionInstructionData>(
      [['discriminator', s.array(s.u8, 8)]],
      'setCollectionInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: [192, 254, 206, 76, 168, 182, 59, 223],
        ...value,
      } as SetCollectionInstructionData)
  ) as Serializer<SetCollectionInstructionArgs, SetCollectionInstructionData>;
}

// Instruction.
export function setCollection(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: SetCollectionInstructionAccounts & SetCollectionInstructionArgs
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

  // Authority Pda.
  keys.push({ pubkey: input.authorityPda, isSigner: false, isWritable: false });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Collection Mint.
  keys.push({
    pubkey: input.collectionMint,
    isSigner: false,
    isWritable: false,
  });

  // Collection Metadata.
  keys.push({
    pubkey: input.collectionMetadata,
    isSigner: false,
    isWritable: false,
  });

  // Collection Authority Record.
  keys.push({
    pubkey: input.collectionAuthorityRecord,
    isSigner: false,
    isWritable: false,
  });

  // New Collection Update Authority.
  signers.push(input.newCollectionUpdateAuthority);
  keys.push({
    pubkey: input.newCollectionUpdateAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // New Collection Metadata.
  keys.push({
    pubkey: input.newCollectionMetadata,
    isSigner: false,
    isWritable: false,
  });

  // New Collection Mint.
  keys.push({
    pubkey: input.newCollectionMint,
    isSigner: false,
    isWritable: false,
  });

  // New Collection Master Edition.
  keys.push({
    pubkey: input.newCollectionMasterEdition,
    isSigner: false,
    isWritable: false,
  });

  // New Collection Authority Record.
  keys.push({
    pubkey: input.newCollectionAuthorityRecord,
    isSigner: false,
    isWritable: false,
  });

  // Token Metadata Program.
  keys.push({
    pubkey: input.tokenMetadataProgram,
    isSigner: false,
    isWritable: false,
  });

  // System Program.
  keys.push({
    pubkey:
      input.systemProgram ??
      getProgramAddressWithFallback(
        context,
        'splSystem',
        '11111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Data.
  const data =
    getSetCollectionInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
