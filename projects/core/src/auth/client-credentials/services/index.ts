import { ClientAuthenticationTokenService } from './client-authentication/client-authentication-token.service';
import { ClientErrorHandlingService } from './client-error/client-error-handling.service';

export const ClientCredentialsServices = [
  ClientAuthenticationTokenService,
  ClientErrorHandlingService,
];
