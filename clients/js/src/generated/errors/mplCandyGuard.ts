/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@lorisleiva/js-core';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** InvalidAccountSize: 'Could not save guard to account' */
export class CgInvalidAccountSizeError extends ProgramError {
  readonly name: string = 'InvalidAccountSize';
  readonly code: number = 0x1770; // 6000
  constructor(program: Program, cause?: Error) {
    super('Could not save guard to account', program, cause);
  }
}
codeToErrorMap.set(0x1770, CgInvalidAccountSizeError);
nameToErrorMap.set('InvalidAccountSize', CgInvalidAccountSizeError);

/** DeserializationError: 'Could not deserialize guard' */
export class CgDeserializationErrorError extends ProgramError {
  readonly name: string = 'DeserializationError';
  readonly code: number = 0x1771; // 6001
  constructor(program: Program, cause?: Error) {
    super('Could not deserialize guard', program, cause);
  }
}
codeToErrorMap.set(0x1771, CgDeserializationErrorError);
nameToErrorMap.set('DeserializationError', CgDeserializationErrorError);

/** PublicKeyMismatch: 'Public key mismatch' */
export class CgPublicKeyMismatchError extends ProgramError {
  readonly name: string = 'PublicKeyMismatch';
  readonly code: number = 0x1772; // 6002
  constructor(program: Program, cause?: Error) {
    super('Public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x1772, CgPublicKeyMismatchError);
nameToErrorMap.set('PublicKeyMismatch', CgPublicKeyMismatchError);

/** DataIncrementLimitExceeded: 'Exceeded account increase limit' */
export class CgDataIncrementLimitExceededError extends ProgramError {
  readonly name: string = 'DataIncrementLimitExceeded';
  readonly code: number = 0x1773; // 6003
  constructor(program: Program, cause?: Error) {
    super('Exceeded account increase limit', program, cause);
  }
}
codeToErrorMap.set(0x1773, CgDataIncrementLimitExceededError);
nameToErrorMap.set(
  'DataIncrementLimitExceeded',
  CgDataIncrementLimitExceededError
);

/** IncorrectOwner: 'Account does not have correct owner' */
export class CgIncorrectOwnerError extends ProgramError {
  readonly name: string = 'IncorrectOwner';
  readonly code: number = 0x1774; // 6004
  constructor(program: Program, cause?: Error) {
    super('Account does not have correct owner', program, cause);
  }
}
codeToErrorMap.set(0x1774, CgIncorrectOwnerError);
nameToErrorMap.set('IncorrectOwner', CgIncorrectOwnerError);

/** Uninitialized: 'Account is not initialized' */
export class CgUninitializedError extends ProgramError {
  readonly name: string = 'Uninitialized';
  readonly code: number = 0x1775; // 6005
  constructor(program: Program, cause?: Error) {
    super('Account is not initialized', program, cause);
  }
}
codeToErrorMap.set(0x1775, CgUninitializedError);
nameToErrorMap.set('Uninitialized', CgUninitializedError);

/** MissingRemainingAccount: 'Missing expected remaining account' */
export class CgMissingRemainingAccountError extends ProgramError {
  readonly name: string = 'MissingRemainingAccount';
  readonly code: number = 0x1776; // 6006
  constructor(program: Program, cause?: Error) {
    super('Missing expected remaining account', program, cause);
  }
}
codeToErrorMap.set(0x1776, CgMissingRemainingAccountError);
nameToErrorMap.set('MissingRemainingAccount', CgMissingRemainingAccountError);

/** NumericalOverflowError: 'Numerical overflow error' */
export class CgNumericalOverflowErrorError extends ProgramError {
  readonly name: string = 'NumericalOverflowError';
  readonly code: number = 0x1777; // 6007
  constructor(program: Program, cause?: Error) {
    super('Numerical overflow error', program, cause);
  }
}
codeToErrorMap.set(0x1777, CgNumericalOverflowErrorError);
nameToErrorMap.set('NumericalOverflowError', CgNumericalOverflowErrorError);

/** RequiredGroupLabelNotFound: 'Missing required group label' */
export class CgRequiredGroupLabelNotFoundError extends ProgramError {
  readonly name: string = 'RequiredGroupLabelNotFound';
  readonly code: number = 0x1778; // 6008
  constructor(program: Program, cause?: Error) {
    super('Missing required group label', program, cause);
  }
}
codeToErrorMap.set(0x1778, CgRequiredGroupLabelNotFoundError);
nameToErrorMap.set(
  'RequiredGroupLabelNotFound',
  CgRequiredGroupLabelNotFoundError
);

/** GroupNotFound: 'Group not found' */
export class CgGroupNotFoundError extends ProgramError {
  readonly name: string = 'GroupNotFound';
  readonly code: number = 0x1779; // 6009
  constructor(program: Program, cause?: Error) {
    super('Group not found', program, cause);
  }
}
codeToErrorMap.set(0x1779, CgGroupNotFoundError);
nameToErrorMap.set('GroupNotFound', CgGroupNotFoundError);

/** ExceededLength: 'Value exceeded maximum length' */
export class CgExceededLengthError extends ProgramError {
  readonly name: string = 'ExceededLength';
  readonly code: number = 0x177a; // 6010
  constructor(program: Program, cause?: Error) {
    super('Value exceeded maximum length', program, cause);
  }
}
codeToErrorMap.set(0x177a, CgExceededLengthError);
nameToErrorMap.set('ExceededLength', CgExceededLengthError);

/** CandyMachineEmpty: 'Candy machine is empty' */
export class CgCandyMachineEmptyError extends ProgramError {
  readonly name: string = 'CandyMachineEmpty';
  readonly code: number = 0x177b; // 6011
  constructor(program: Program, cause?: Error) {
    super('Candy machine is empty', program, cause);
  }
}
codeToErrorMap.set(0x177b, CgCandyMachineEmptyError);
nameToErrorMap.set('CandyMachineEmpty', CgCandyMachineEmptyError);

/** InstructionNotFound: 'No instruction was found' */
export class CgInstructionNotFoundError extends ProgramError {
  readonly name: string = 'InstructionNotFound';
  readonly code: number = 0x177c; // 6012
  constructor(program: Program, cause?: Error) {
    super('No instruction was found', program, cause);
  }
}
codeToErrorMap.set(0x177c, CgInstructionNotFoundError);
nameToErrorMap.set('InstructionNotFound', CgInstructionNotFoundError);

/** CollectionKeyMismatch: 'Collection public key mismatch' */
export class CgCollectionKeyMismatchError extends ProgramError {
  readonly name: string = 'CollectionKeyMismatch';
  readonly code: number = 0x177d; // 6013
  constructor(program: Program, cause?: Error) {
    super('Collection public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x177d, CgCollectionKeyMismatchError);
nameToErrorMap.set('CollectionKeyMismatch', CgCollectionKeyMismatchError);

/** MissingCollectionAccounts: 'Missing collection accounts' */
export class CgMissingCollectionAccountsError extends ProgramError {
  readonly name: string = 'MissingCollectionAccounts';
  readonly code: number = 0x177e; // 6014
  constructor(program: Program, cause?: Error) {
    super('Missing collection accounts', program, cause);
  }
}
codeToErrorMap.set(0x177e, CgMissingCollectionAccountsError);
nameToErrorMap.set(
  'MissingCollectionAccounts',
  CgMissingCollectionAccountsError
);

/** CollectionUpdateAuthorityKeyMismatch: 'Collection update authority public key mismatch' */
export class CgCollectionUpdateAuthorityKeyMismatchError extends ProgramError {
  readonly name: string = 'CollectionUpdateAuthorityKeyMismatch';
  readonly code: number = 0x177f; // 6015
  constructor(program: Program, cause?: Error) {
    super('Collection update authority public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x177f, CgCollectionUpdateAuthorityKeyMismatchError);
nameToErrorMap.set(
  'CollectionUpdateAuthorityKeyMismatch',
  CgCollectionUpdateAuthorityKeyMismatchError
);

/** MintNotLastTransaction: 'Mint must be the last instructions of the transaction' */
export class CgMintNotLastTransactionError extends ProgramError {
  readonly name: string = 'MintNotLastTransaction';
  readonly code: number = 0x1780; // 6016
  constructor(program: Program, cause?: Error) {
    super(
      'Mint must be the last instructions of the transaction',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1780, CgMintNotLastTransactionError);
nameToErrorMap.set('MintNotLastTransaction', CgMintNotLastTransactionError);

/** MintNotLive: 'Mint is not live' */
export class CgMintNotLiveError extends ProgramError {
  readonly name: string = 'MintNotLive';
  readonly code: number = 0x1781; // 6017
  constructor(program: Program, cause?: Error) {
    super('Mint is not live', program, cause);
  }
}
codeToErrorMap.set(0x1781, CgMintNotLiveError);
nameToErrorMap.set('MintNotLive', CgMintNotLiveError);

/** NotEnoughSOL: 'Not enough SOL to pay for the mint' */
export class CgNotEnoughSOLError extends ProgramError {
  readonly name: string = 'NotEnoughSOL';
  readonly code: number = 0x1782; // 6018
  constructor(program: Program, cause?: Error) {
    super('Not enough SOL to pay for the mint', program, cause);
  }
}
codeToErrorMap.set(0x1782, CgNotEnoughSOLError);
nameToErrorMap.set('NotEnoughSOL', CgNotEnoughSOLError);

/** TokenBurnFailed: 'Token burn failed' */
export class CgTokenBurnFailedError extends ProgramError {
  readonly name: string = 'TokenBurnFailed';
  readonly code: number = 0x1783; // 6019
  constructor(program: Program, cause?: Error) {
    super('Token burn failed', program, cause);
  }
}
codeToErrorMap.set(0x1783, CgTokenBurnFailedError);
nameToErrorMap.set('TokenBurnFailed', CgTokenBurnFailedError);

/** NotEnoughTokens: 'Not enough tokens on the account' */
export class CgNotEnoughTokensError extends ProgramError {
  readonly name: string = 'NotEnoughTokens';
  readonly code: number = 0x1784; // 6020
  constructor(program: Program, cause?: Error) {
    super('Not enough tokens on the account', program, cause);
  }
}
codeToErrorMap.set(0x1784, CgNotEnoughTokensError);
nameToErrorMap.set('NotEnoughTokens', CgNotEnoughTokensError);

/** TokenTransferFailed: 'Token transfer failed' */
export class CgTokenTransferFailedError extends ProgramError {
  readonly name: string = 'TokenTransferFailed';
  readonly code: number = 0x1785; // 6021
  constructor(program: Program, cause?: Error) {
    super('Token transfer failed', program, cause);
  }
}
codeToErrorMap.set(0x1785, CgTokenTransferFailedError);
nameToErrorMap.set('TokenTransferFailed', CgTokenTransferFailedError);

/** MissingRequiredSignature: 'A signature was required but not found' */
export class CgMissingRequiredSignatureError extends ProgramError {
  readonly name: string = 'MissingRequiredSignature';
  readonly code: number = 0x1786; // 6022
  constructor(program: Program, cause?: Error) {
    super('A signature was required but not found', program, cause);
  }
}
codeToErrorMap.set(0x1786, CgMissingRequiredSignatureError);
nameToErrorMap.set('MissingRequiredSignature', CgMissingRequiredSignatureError);

/** GatewayTokenInvalid: 'Gateway token is not valid' */
export class CgGatewayTokenInvalidError extends ProgramError {
  readonly name: string = 'GatewayTokenInvalid';
  readonly code: number = 0x1787; // 6023
  constructor(program: Program, cause?: Error) {
    super('Gateway token is not valid', program, cause);
  }
}
codeToErrorMap.set(0x1787, CgGatewayTokenInvalidError);
nameToErrorMap.set('GatewayTokenInvalid', CgGatewayTokenInvalidError);

/** AfterEndDate: 'Current time is after the set end date' */
export class CgAfterEndDateError extends ProgramError {
  readonly name: string = 'AfterEndDate';
  readonly code: number = 0x1788; // 6024
  constructor(program: Program, cause?: Error) {
    super('Current time is after the set end date', program, cause);
  }
}
codeToErrorMap.set(0x1788, CgAfterEndDateError);
nameToErrorMap.set('AfterEndDate', CgAfterEndDateError);

/** InvalidMintTime: 'Current time is not within the allowed mint time' */
export class CgInvalidMintTimeError extends ProgramError {
  readonly name: string = 'InvalidMintTime';
  readonly code: number = 0x1789; // 6025
  constructor(program: Program, cause?: Error) {
    super('Current time is not within the allowed mint time', program, cause);
  }
}
codeToErrorMap.set(0x1789, CgInvalidMintTimeError);
nameToErrorMap.set('InvalidMintTime', CgInvalidMintTimeError);

/** AddressNotFoundInAllowedList: 'Address not found on the allowed list' */
export class CgAddressNotFoundInAllowedListError extends ProgramError {
  readonly name: string = 'AddressNotFoundInAllowedList';
  readonly code: number = 0x178a; // 6026
  constructor(program: Program, cause?: Error) {
    super('Address not found on the allowed list', program, cause);
  }
}
codeToErrorMap.set(0x178a, CgAddressNotFoundInAllowedListError);
nameToErrorMap.set(
  'AddressNotFoundInAllowedList',
  CgAddressNotFoundInAllowedListError
);

/** MissingAllowedListProof: 'Missing allowed list proof' */
export class CgMissingAllowedListProofError extends ProgramError {
  readonly name: string = 'MissingAllowedListProof';
  readonly code: number = 0x178b; // 6027
  constructor(program: Program, cause?: Error) {
    super('Missing allowed list proof', program, cause);
  }
}
codeToErrorMap.set(0x178b, CgMissingAllowedListProofError);
nameToErrorMap.set('MissingAllowedListProof', CgMissingAllowedListProofError);

/** AllowedListNotEnabled: 'Allow list guard is not enabled' */
export class CgAllowedListNotEnabledError extends ProgramError {
  readonly name: string = 'AllowedListNotEnabled';
  readonly code: number = 0x178c; // 6028
  constructor(program: Program, cause?: Error) {
    super('Allow list guard is not enabled', program, cause);
  }
}
codeToErrorMap.set(0x178c, CgAllowedListNotEnabledError);
nameToErrorMap.set('AllowedListNotEnabled', CgAllowedListNotEnabledError);

/** AllowedMintLimitReached: 'The maximum number of allowed mints was reached' */
export class CgAllowedMintLimitReachedError extends ProgramError {
  readonly name: string = 'AllowedMintLimitReached';
  readonly code: number = 0x178d; // 6029
  constructor(program: Program, cause?: Error) {
    super('The maximum number of allowed mints was reached', program, cause);
  }
}
codeToErrorMap.set(0x178d, CgAllowedMintLimitReachedError);
nameToErrorMap.set('AllowedMintLimitReached', CgAllowedMintLimitReachedError);

/** InvalidNftCollection: 'Invalid NFT collection' */
export class CgInvalidNftCollectionError extends ProgramError {
  readonly name: string = 'InvalidNftCollection';
  readonly code: number = 0x178e; // 6030
  constructor(program: Program, cause?: Error) {
    super('Invalid NFT collection', program, cause);
  }
}
codeToErrorMap.set(0x178e, CgInvalidNftCollectionError);
nameToErrorMap.set('InvalidNftCollection', CgInvalidNftCollectionError);

/** MissingNft: 'Missing NFT on the account' */
export class CgMissingNftError extends ProgramError {
  readonly name: string = 'MissingNft';
  readonly code: number = 0x178f; // 6031
  constructor(program: Program, cause?: Error) {
    super('Missing NFT on the account', program, cause);
  }
}
codeToErrorMap.set(0x178f, CgMissingNftError);
nameToErrorMap.set('MissingNft', CgMissingNftError);

/** MaximumRedeemedAmount: 'Current redemeed items is at the set maximum amount' */
export class CgMaximumRedeemedAmountError extends ProgramError {
  readonly name: string = 'MaximumRedeemedAmount';
  readonly code: number = 0x1790; // 6032
  constructor(program: Program, cause?: Error) {
    super(
      'Current redemeed items is at the set maximum amount',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1790, CgMaximumRedeemedAmountError);
nameToErrorMap.set('MaximumRedeemedAmount', CgMaximumRedeemedAmountError);

/** AddressNotAuthorized: 'Address not authorized' */
export class CgAddressNotAuthorizedError extends ProgramError {
  readonly name: string = 'AddressNotAuthorized';
  readonly code: number = 0x1791; // 6033
  constructor(program: Program, cause?: Error) {
    super('Address not authorized', program, cause);
  }
}
codeToErrorMap.set(0x1791, CgAddressNotAuthorizedError);
nameToErrorMap.set('AddressNotAuthorized', CgAddressNotAuthorizedError);

/** MissingFreezeInstruction: 'Missing freeze instruction data' */
export class CgMissingFreezeInstructionError extends ProgramError {
  readonly name: string = 'MissingFreezeInstruction';
  readonly code: number = 0x1792; // 6034
  constructor(program: Program, cause?: Error) {
    super('Missing freeze instruction data', program, cause);
  }
}
codeToErrorMap.set(0x1792, CgMissingFreezeInstructionError);
nameToErrorMap.set('MissingFreezeInstruction', CgMissingFreezeInstructionError);

/** FreezeGuardNotEnabled: 'Freeze guard must be enabled' */
export class CgFreezeGuardNotEnabledError extends ProgramError {
  readonly name: string = 'FreezeGuardNotEnabled';
  readonly code: number = 0x1793; // 6035
  constructor(program: Program, cause?: Error) {
    super('Freeze guard must be enabled', program, cause);
  }
}
codeToErrorMap.set(0x1793, CgFreezeGuardNotEnabledError);
nameToErrorMap.set('FreezeGuardNotEnabled', CgFreezeGuardNotEnabledError);

/** FreezeNotInitialized: 'Freeze must be initialized' */
export class CgFreezeNotInitializedError extends ProgramError {
  readonly name: string = 'FreezeNotInitialized';
  readonly code: number = 0x1794; // 6036
  constructor(program: Program, cause?: Error) {
    super('Freeze must be initialized', program, cause);
  }
}
codeToErrorMap.set(0x1794, CgFreezeNotInitializedError);
nameToErrorMap.set('FreezeNotInitialized', CgFreezeNotInitializedError);

/** MissingFreezePeriod: 'Missing freeze period' */
export class CgMissingFreezePeriodError extends ProgramError {
  readonly name: string = 'MissingFreezePeriod';
  readonly code: number = 0x1795; // 6037
  constructor(program: Program, cause?: Error) {
    super('Missing freeze period', program, cause);
  }
}
codeToErrorMap.set(0x1795, CgMissingFreezePeriodError);
nameToErrorMap.set('MissingFreezePeriod', CgMissingFreezePeriodError);

/** FreezeEscrowAlreadyExists: 'The freeze escrow account already exists' */
export class CgFreezeEscrowAlreadyExistsError extends ProgramError {
  readonly name: string = 'FreezeEscrowAlreadyExists';
  readonly code: number = 0x1796; // 6038
  constructor(program: Program, cause?: Error) {
    super('The freeze escrow account already exists', program, cause);
  }
}
codeToErrorMap.set(0x1796, CgFreezeEscrowAlreadyExistsError);
nameToErrorMap.set(
  'FreezeEscrowAlreadyExists',
  CgFreezeEscrowAlreadyExistsError
);

/** ExceededMaximumFreezePeriod: 'Maximum freeze period exceeded' */
export class CgExceededMaximumFreezePeriodError extends ProgramError {
  readonly name: string = 'ExceededMaximumFreezePeriod';
  readonly code: number = 0x1797; // 6039
  constructor(program: Program, cause?: Error) {
    super('Maximum freeze period exceeded', program, cause);
  }
}
codeToErrorMap.set(0x1797, CgExceededMaximumFreezePeriodError);
nameToErrorMap.set(
  'ExceededMaximumFreezePeriod',
  CgExceededMaximumFreezePeriodError
);

/** ThawNotEnabled: 'Thaw is not enabled' */
export class CgThawNotEnabledError extends ProgramError {
  readonly name: string = 'ThawNotEnabled';
  readonly code: number = 0x1798; // 6040
  constructor(program: Program, cause?: Error) {
    super('Thaw is not enabled', program, cause);
  }
}
codeToErrorMap.set(0x1798, CgThawNotEnabledError);
nameToErrorMap.set('ThawNotEnabled', CgThawNotEnabledError);

/** UnlockNotEnabled: 'Unlock is not enabled (not all NFTs are thawed)' */
export class CgUnlockNotEnabledError extends ProgramError {
  readonly name: string = 'UnlockNotEnabled';
  readonly code: number = 0x1799; // 6041
  constructor(program: Program, cause?: Error) {
    super('Unlock is not enabled (not all NFTs are thawed)', program, cause);
  }
}
codeToErrorMap.set(0x1799, CgUnlockNotEnabledError);
nameToErrorMap.set('UnlockNotEnabled', CgUnlockNotEnabledError);

/** DuplicatedGroupLabel: 'Duplicated group label' */
export class CgDuplicatedGroupLabelError extends ProgramError {
  readonly name: string = 'DuplicatedGroupLabel';
  readonly code: number = 0x179a; // 6042
  constructor(program: Program, cause?: Error) {
    super('Duplicated group label', program, cause);
  }
}
codeToErrorMap.set(0x179a, CgDuplicatedGroupLabelError);
nameToErrorMap.set('DuplicatedGroupLabel', CgDuplicatedGroupLabelError);

/** DuplicatedMintLimitId: 'Duplicated mint limit id' */
export class CgDuplicatedMintLimitIdError extends ProgramError {
  readonly name: string = 'DuplicatedMintLimitId';
  readonly code: number = 0x179b; // 6043
  constructor(program: Program, cause?: Error) {
    super('Duplicated mint limit id', program, cause);
  }
}
codeToErrorMap.set(0x179b, CgDuplicatedMintLimitIdError);
nameToErrorMap.set('DuplicatedMintLimitId', CgDuplicatedMintLimitIdError);

/** UnauthorizedProgramFound: 'An unauthorized program was found in the transaction' */
export class CgUnauthorizedProgramFoundError extends ProgramError {
  readonly name: string = 'UnauthorizedProgramFound';
  readonly code: number = 0x179c; // 6044
  constructor(program: Program, cause?: Error) {
    super(
      'An unauthorized program was found in the transaction',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x179c, CgUnauthorizedProgramFoundError);
nameToErrorMap.set('UnauthorizedProgramFound', CgUnauthorizedProgramFoundError);

/** ExceededProgramListSize: 'Exceeded the maximum number of programs in the additional list' */
export class CgExceededProgramListSizeError extends ProgramError {
  readonly name: string = 'ExceededProgramListSize';
  readonly code: number = 0x179d; // 6045
  constructor(program: Program, cause?: Error) {
    super(
      'Exceeded the maximum number of programs in the additional list',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x179d, CgExceededProgramListSizeError);
nameToErrorMap.set('ExceededProgramListSize', CgExceededProgramListSizeError);

/** AllocationNotInitialized: 'Allocation PDA not initialized' */
export class CgAllocationNotInitializedError extends ProgramError {
  readonly name: string = 'AllocationNotInitialized';
  readonly code: number = 0x179e; // 6046
  constructor(program: Program, cause?: Error) {
    super('Allocation PDA not initialized', program, cause);
  }
}
codeToErrorMap.set(0x179e, CgAllocationNotInitializedError);
nameToErrorMap.set('AllocationNotInitialized', CgAllocationNotInitializedError);

/** AllocationLimitReached: 'Allocation limit was reached' */
export class CgAllocationLimitReachedError extends ProgramError {
  readonly name: string = 'AllocationLimitReached';
  readonly code: number = 0x179f; // 6047
  constructor(program: Program, cause?: Error) {
    super('Allocation limit was reached', program, cause);
  }
}
codeToErrorMap.set(0x179f, CgAllocationLimitReachedError);
nameToErrorMap.set('AllocationLimitReached', CgAllocationLimitReachedError);

/** AllocationGuardNotEnabled: 'Allocation guard must be enabled' */
export class CgAllocationGuardNotEnabledError extends ProgramError {
  readonly name: string = 'AllocationGuardNotEnabled';
  readonly code: number = 0x17a0; // 6048
  constructor(program: Program, cause?: Error) {
    super('Allocation guard must be enabled', program, cause);
  }
}
codeToErrorMap.set(0x17a0, CgAllocationGuardNotEnabledError);
nameToErrorMap.set(
  'AllocationGuardNotEnabled',
  CgAllocationGuardNotEnabledError
);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getMplCandyGuardErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getMplCandyGuardErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
