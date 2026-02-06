/**
 * Use this provider to authenticate with LinkedIn.
 *
 * ```ts {5-8}
 * import { LinkedInProvider } from "@openauthjs/openauth/provider/linkedin"
 *
 * export default issuer({
 *   providers: {
 *     linkedin: LinkedInProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321"
 *     })
 *   }
 * })
 * ```
 *
 * @packageDocumentation
 */

import { Oauth2Provider, Oauth2WrappedConfig } from "./oauth2.js"

export interface LinkedInConfig extends Oauth2WrappedConfig {}

/**
 * Create a LinkedIn OAuth2 provider.
 *
 * @param config - The config for the provider.
 * @example
 * ```ts
 * LinkedInProvider({
 *   clientID: "1234567890",
 *   clientSecret: "0987654321"
 * })
 * ```
 */
export function LinkedInProvider(config: LinkedInConfig) {
  return Oauth2Provider({
    ...config,
    type: "linkedin",
    endpoint: {
      authorization: "https://www.linkedin.com/oauth/v2/authorization",
      token: "https://www.linkedin.com/oauth/v2/accessToken",
    },
  })
}
