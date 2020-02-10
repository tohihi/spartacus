import { OccUserIdEffect } from '../../occ-user-id/store/effects/occ-user-id.effect';
import { UserTokenEffects } from './user-token.effect';

export const effects: any[] = [UserTokenEffects, OccUserIdEffect];

export * from '../../occ-user-id/store/effects/occ-user-id.effect';
export * from './user-token.effect';
