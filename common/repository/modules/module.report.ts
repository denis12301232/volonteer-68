import type { AsyncDataOptions } from '#app';
import type { IApiError, IReport, Report } from '~/types';
import type { FetchError } from 'ofetch';
import HttpFactory from '../factory';

export default class ReportModule extends HttpFactory {
  private readonly RESOURCE = '/reports';

  index(query: Report.IndexQuery, options?: AsyncDataOptions<Report.IndexResponse>) {
    return useAsyncData<Report.IndexResponse, FetchError<IApiError>>(
      'index-report',
      () => this.call(`${this.RESOURCE}`, { method: 'GET', query }),
      options
    );
  }

  show(params: Report.ShowQuery, options?: AsyncDataOptions<IReport>) {
    return useAsyncData<IReport, FetchError<IApiError>>(
      'show-report',
      () => this.call(`${this.RESOURCE}/${params.id}`, { method: 'GET' }),
      options
    );
  }
}
