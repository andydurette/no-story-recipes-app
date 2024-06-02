import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import EncryptedStorage from 'react-native-encrypted-storage';
import { Recipe } from '../types';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const storage: any = createJSONStorage(() => EncryptedStorage);

const atomWithSuspense = <T>(key: string, defaultValue: T) =>
	atomWithStorage<T>(
		key,
		storage
			.getItem(key, defaultValue)
			.then((v) => (typeof v === 'symbol' ? defaultValue : v))
			.catch(() => defaultValue) as any,
		storage as any
	);

const selectedLatestRecipeAtom = atomWithSuspense<Recipe | undefined>('selectedLatestRecipe', undefined);

export {
	selectedLatestRecipeAtom
}
