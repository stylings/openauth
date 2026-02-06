/**
 * Use this provider to authenticate with Mastodon.
 *
 * ```ts {5-8}
 * import { MastodonProvider } from "@openauthjs/openauth/provider/mastodon"
 *
 * export default issuer({
 *   providers: {
 *     mastodon: MastodonProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321"
 *     })
 *   }
 * })
 * ```
 *
 * You can also connect to a specific Mastodon instance by specifying the `instance` option:
 *
 * ```ts {7}
 * import { MastodonProvider } from "@openauthjs/openauth/provider/mastodon"
 *
 * export default issuer({
 *   providers: {
 *     mastodon: MastodonProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321",
 *       instance: "hachyderm.io"
 *     })
 *   }
 * })
 * ```
 *
 * @packageDocumentation
 */

import { Oauth2Provider, Oauth2WrappedConfig } from "./oauth2.js"

export interface MastodonConfig extends Oauth2WrappedConfig {
  /**
   * The hostname of the Mastodon instance.
   *
   * By default, this is set to `mastodon.social`.
   *
   * @example
   * ```ts
   * {
   *   instance: "hachyderm.io"
   * }
   * ```
   */
  instance?: string
}

/**
 * Create a Mastodon OAuth2 provider.
 *
 * @param config - The config for the provider.
 * @example
 * ```ts
 * MastodonProvider({
 *   clientID: "1234567890",
 *   clientSecret: "0987654321"
 * })
 * ```
 */
export function MastodonProvider(config: MastodonConfig) {
  const instance = config.instance || "mastodon.social"
  return Oauth2Provider({
    ...config,
    type: "mastodon",
    endpoint: {
      authorization: `https://${instance}/oauth/authorize`,
      token: `https://${instance}/oauth/token`,
    },
  })
}
