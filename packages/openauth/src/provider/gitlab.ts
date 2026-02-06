/**
 * Use this provider to authenticate with GitLab.
 *
 * ```ts {5-8}
 * import { GitlabProvider } from "@openauthjs/openauth/provider/gitlab"
 *
 * export default issuer({
 *   providers: {
 *     gitlab: GitlabProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321"
 *     })
 *   }
 * })
 * ```
 *
 * You can also connect to a self-hosted GitLab instance by specifying the `instance` option:
 *
 * ```ts {7}
 * import { GitlabProvider } from "@openauthjs/openauth/provider/gitlab"
 *
 * export default issuer({
 *   providers: {
 *     gitlab: GitlabProvider({
 *       clientID: "1234567890",
 *       clientSecret: "0987654321",
 *       instance: "gitlab.mycompany.com"
 *     })
 *   }
 * })
 * ```
 *
 * @packageDocumentation
 */

import { Oauth2Provider, Oauth2WrappedConfig } from "./oauth2.js"

export interface GitlabConfig extends Oauth2WrappedConfig {
  /**
   * The hostname of your self-hosted GitLab instance.
   *
   * By default, this is set to `gitlab.com`.
   *
   * @example
   * ```ts
   * {
   *   instance: "gitlab.mycompany.com"
   * }
   * ```
   */
  instance?: string
}

/**
 * Create a GitLab OAuth2 provider.
 *
 * @param config - The config for the provider.
 * @example
 * ```ts
 * GitlabProvider({
 *   clientID: "1234567890",
 *   clientSecret: "0987654321"
 * })
 * ```
 */
export function GitlabProvider(config: GitlabConfig) {
  const instance = config.instance || "gitlab.com"
  return Oauth2Provider({
    ...config,
    type: "gitlab",
    endpoint: {
      authorization: `https://${instance}/oauth/authorize`,
      token: `https://${instance}/oauth/token`,
    },
  })
}
