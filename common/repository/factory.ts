import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack';

export default class HttpFactory {
  private $fetch: typeof $fetch;

  constructor($fetcher: typeof $fetch) {
    this.$fetch = $fetcher;
  }

  protected async call<T>(url: string, options: NitroFetchOptions<NitroFetchRequest>) {
    return this.$fetch<T>(url, options);
  }
}
