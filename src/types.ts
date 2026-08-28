/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ScreenState = 'greeting' | 'loading' | 'choose-box' | 'real-gift';

export interface GiftBoxState {
  isOpen: boolean;
  chosenIndex: number | null;
}
