/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ProfileListViewModel } from '../models/profile-list-view-model';
import { ProfileViewModel } from '../models/profile-view-model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation profileIdGet
   */
  static readonly ProfileIdGetPath = '/Profile/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileIdGet$Plain$Response(params: {
    id: string;
    authorizedUserId?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProfileViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ProfileIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('authorizedUserId', params.authorizedUserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileIdGet$Plain(params: {
    id: string;
    authorizedUserId?: string;
    context?: HttpContext
  }
): Observable<ProfileViewModel> {

    return this.profileIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProfileViewModel>) => r.body as ProfileViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileIdGet$Json$Response(params: {
    id: string;
    authorizedUserId?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProfileViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ProfileIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('authorizedUserId', params.authorizedUserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileIdGet$Json(params: {
    id: string;
    authorizedUserId?: string;
    context?: HttpContext
  }
): Observable<ProfileViewModel> {

    return this.profileIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProfileViewModel>) => r.body as ProfileViewModel)
    );
  }

  /**
   * Path part for operation profileGet
   */
  static readonly ProfileGetPath = '/Profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileGet$Plain$Response(params?: {
    FirstName?: string;
    DictionaryElementId?: string;
    ExternalValue?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProfileListViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ProfileGetPath, 'get');
    if (params) {
      rb.query('FirstName', params.FirstName, {});
      rb.query('DictionaryElementId', params.DictionaryElementId, {});
      rb.query('ExternalValue', params.ExternalValue, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileListViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileGet$Plain(params?: {
    FirstName?: string;
    DictionaryElementId?: string;
    ExternalValue?: string;
    context?: HttpContext
  }
): Observable<ProfileListViewModel> {

    return this.profileGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProfileListViewModel>) => r.body as ProfileListViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileGet$Json$Response(params?: {
    FirstName?: string;
    DictionaryElementId?: string;
    ExternalValue?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProfileListViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ProfileGetPath, 'get');
    if (params) {
      rb.query('FirstName', params.FirstName, {});
      rb.query('DictionaryElementId', params.DictionaryElementId, {});
      rb.query('ExternalValue', params.ExternalValue, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileListViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileGet$Json(params?: {
    FirstName?: string;
    DictionaryElementId?: string;
    ExternalValue?: string;
    context?: HttpContext
  }
): Observable<ProfileListViewModel> {

    return this.profileGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProfileListViewModel>) => r.body as ProfileListViewModel)
    );
  }

}
