import { getAllowListSerializer } from '../generated';
import { CandyGuardManifest } from './core';

/**
 * The allowList guard validates the minting wallet against
 * a predefined list of wallets.
 *
 * Instead of passing the entire list of wallets as settings,
 * this guard accepts the Root of a Merkle Tree created from
 * this allow list. The program can then validate that the minting
 * wallet is part of the allow list by requiring a Merkle Proof.
 * Minting will fail if either the minting address is not part of
 * the merkle tree or if no Merkle Proof is specified.
 *
 * You may use the `getMerkleRoot` and `getMerkleProof` helper
 * functions provided by the SDK to help you set up this guard.
 * Here is an example.
 *
 * ```ts
 * import { getMerkleProof, getMerkleRoot } from '@metaplex-foundation/js';
 * const allowList = [
 *   'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',
 *   'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',
 *   'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',
 * ];
 * const merkleRoot = getMerkleRoot(allowList);
 * const validMerkleProof = getMerkleProof(allowList, 'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB');
 * const invalidMerkleProof = getMerkleProof(allowList, 'invalid-address');
 * ```
 *
 * Note that you will need to provide the Merkle Proof for the
 * minting wallet before calling the mint instruction via the
 * special "route" instruction of the guard.
 * See {@link AllowListGuardRouteSettings} for more information.
 *
 * This object defines the settings that should be
 * provided when creating and/or updating a Candy
 * Machine if you wish to enable this guard.
 *
 * @see {@link AllowListGuardRouteSettings} to learn more about
 * the instructions that can be executed against this guard.
 */
export type AllowListGuard = {
  /**
   * The Root of the Merkle Tree representing the allow list.
   * You may use the `getMerkleRoot` helper function to generate this.
   */
  merkleRoot: Uint8Array;
};

/**
 * The settings for the allowList guard that should be provided
 * when accessing the guard's special "route" instruction.
 *
 * ## Proof
 * The `proof` path allows you to provide a Merkle Proof
 * for a specific wallet in order to allow minting for that wallet.
 * This will create a small PDA account on the Program as a proof
 * that the wallet has been allowed to mint.
 *
 * ```ts
 * await metaplex.candyMachines().callGuardRoute({
 *   candyMachine,
 *   guard: 'allowList',
 *   settings: {
 *     path: 'proof',
 *     merkleProof: getMerkleProof(allowedWallets, metaplex.identity().publicKey.toBase58()),
 *   },
 * });
 *
 * // You are now allows to mint with this wallet.
 * ```
 *
 * @see {@link AllowListGuard} for more
 * information on the allowList guard itself.
 */
export type AllowListGuardRouteSettings = {
  /** Selects the path to execute in the route instruction. */
  path: 'proof';

  /**
   * The Proof that the minting wallet is part of the
   * Merkle Tree-based allow list. You may use the
   * `getMerkleProof` helper function to generate this.
   */
  merkleProof: Uint8Array[];
};

/** @internal */
export const allowListGuardManifest: CandyGuardManifest<
  AllowListGuard,
  AllowListGuard,
  {},
  AllowListGuardRouteSettings
> = {
  name: 'allowList',
  settingsBytes: 32,
  settingsSerializer: getAllowListSerializer,
  mintSettingsParser: (
    context,
    { settings, payer, candyMachine, candyGuard }
  ) => ({
    arguments: new Uint8Array(),
    remainingAccounts: [
      {
        isSigner: false,
        isWritable: false,
        // TODO: PDAs.
        address: findMerkleProofPda(context, {
          merkleRoot: settings.merkleRoot,
          user: payer.publicKey,
          candyMachine,
          candyGuard,
        }),
      },
    ],
  }),
  routeSettingsParser: (
    context,
    { settings, routeSettings, candyMachine, candyGuard, payer }
  ) => {
    const s = context.serializer;
    const proof = routeSettings.merkleProof;

    return {
      arguments: s.vec(s.bytes).serialize(proof),
      remainingAccounts: [
        {
          isSigner: false,
          isWritable: true,
          // TODO: PDAs.
          address: findMerkleProofPda(context, {
            merkleRoot: settings.merkleRoot,
            user: payer.publicKey,
            candyMachine,
            candyGuard,
          }),
        },
        {
          isSigner: false,
          isWritable: false,
          address: context.programs.get('splSystem').address,
        },
      ],
    };
  },
};
