import { Expect, Equal } from 'type-testing'

// Solution
type Presents = ['🛹', '🚲', '🛴', '🏄']

type NextPresent<TItem extends Presents[number]> = TItem extends Presents[0]
  ? Presents[1]
  : TItem extends Presents[1]
    ? Presents[2]
    : TItem extends Presents[2]
      ? Presents[3]
      : TItem extends Presents[3]
        ? Presents[0]
        : never

type UpTo<
  TItem,
  ULength extends number,
  Store extends TItem[] = [],
> = Store['length'] extends ULength
  ? Store
  : UpTo<TItem, ULength, [...Store, TItem]>

type Rebuild<
  TArray extends number[],
  Item extends Presents[number] = '🛹',
  Store extends unknown[] = [],
> = TArray extends [infer Curr, ...infer Rest]
  ? Rest extends number[]
    ? Curr extends number
      ? Rebuild<Rest, NextPresent<Item>, [...Store, ...UpTo<Item, Curr>]>
      : Store
    : Store
  : Store

// Tests
type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>
//   ^?
type test_0_expected = [
  '🛹',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
  '🛴',
  '🏄',
  '🏄',
  '🏄',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
]
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>

type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>
//   ^?
type test_1_expected = [
  '🛹',
  '🛹',
  '🛹',
  '🚲',
  '🚲',
  '🚲',
  '🛴',
  '🛴',
  '🏄',
  '🛹',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
]
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>

type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>
//   ^?
type test_2_expected = [
  '🛹',
  '🛹',
  '🚲',
  '🚲',
  '🚲',
  '🛴',
  '🛴',
  '🛴',
  '🏄',
  '🏄',
  '🏄',
  '🏄',
  '🏄',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
]
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>
