/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { GuardSet, GuardSetArgs, getGuardSetSerializer } from '.';
import { Context, Serializer } from '@lorisleiva/js-core';

/**
 * A group represent a specific set of guards. When groups are used, transactions
 * must specify which group should be used during validation.
 */

export type Group = { label: string; guards: GuardSet };

export type GroupArgs = { label: string; guards: GuardSetArgs };

export function getGroupSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<GroupArgs, Group> {
  const s = context.serializer;
  return s.struct<Group>(
    [
      ['label', s.string],
      ['guards', getGuardSetSerializer(context)],
    ],
    'Group'
  ) as Serializer<GroupArgs, Group>;
}
