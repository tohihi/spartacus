import { UserAuthenticationTokenService } from './user-authentication/user-authentication-token.service';
import { UserErrorHandlingService } from './user-error/user-error-handling.service';

export const UserAuthServices: any[] = [
  UserAuthenticationTokenService,
  UserErrorHandlingService,
];
