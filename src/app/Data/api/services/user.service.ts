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

import { AuthorizeUserCommand } from '../models/authorize-user-command';
import { CreateUserCommand } from '../models/create-user-command';
import { UserViewModel } from '../models/user-view-model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userPost
   */
  static readonly UserPostPath = '/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userPost$Response(params?: {
    context?: HttpContext
    body?: CreateUserCommand
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userPost(params?: {
    context?: HttpContext
    body?: CreateUserCommand
  }
): Observable<void> {

    return this.userPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation userIdGet
   */
  static readonly UserIdGetPath = '/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  userIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<UserViewModel> {

    return this.userIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserViewModel>) => r.body as UserViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  userIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<UserViewModel> {

    return this.userIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserViewModel>) => r.body as UserViewModel)
    );
  }

  /**
   * Path part for operation userAuthorizePost
   */
  static readonly UserAuthorizePostPath = '/User/Authorize';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userAuthorizePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userAuthorizePost$Plain$Response(params?: {
    context?: HttpContext
    body?: AuthorizeUserCommand
  }
): Observable<StrictHttpResponse<UserViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserAuthorizePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userAuthorizePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userAuthorizePost$Plain(params?: {
    context?: HttpContext
    body?: AuthorizeUserCommand
  }
): Observable<UserViewModel> {

    return this.userAuthorizePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserViewModel>) => r.body as UserViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userAuthorizePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userAuthorizePost$Json$Response(params?: {
    context?: HttpContext
    body?: AuthorizeUserCommand
  }
): Observable<StrictHttpResponse<UserViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserAuthorizePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userAuthorizePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userAuthorizePost$Json(params?: {
    context?: HttpContext
    body?: AuthorizeUserCommand
  }
): Observable<UserViewModel> {

    return this.userAuthorizePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserViewModel>) => r.body as UserViewModel)
    );
  }

}
