import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsExistingUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.isExistingUser
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectStep = createSelector(
  selectAuthState,
  (state: AuthState) => state.step
);
