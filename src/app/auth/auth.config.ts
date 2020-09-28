import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  //NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'suzyxNi2B5qB4k7mUMFSn6B1e2Z6hT7W',
  CLIENT_DOMAIN: 'dev-37ogfblt.eu.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile email',
};
