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

import { CategoryListViewModel } from '../models/category-list-view-model';
import { CategoryViewModel } from '../models/category-view-model';
import { CreateCategoryCommand } from '../models/create-category-command';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation categoryGet
   */
  static readonly CategoryGetPath = '/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGet$Plain$Response(params?: {
    Name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryListViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CategoryGetPath, 'get');
    if (params) {
      rb.query('Name', params.Name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryListViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGet$Plain(params?: {
    Name?: string;
    context?: HttpContext
  }
): Observable<CategoryListViewModel> {

    return this.categoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryListViewModel>) => r.body as CategoryListViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGet$Json$Response(params?: {
    Name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryListViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CategoryGetPath, 'get');
    if (params) {
      rb.query('Name', params.Name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryListViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGet$Json(params?: {
    Name?: string;
    context?: HttpContext
  }
): Observable<CategoryListViewModel> {

    return this.categoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryListViewModel>) => r.body as CategoryListViewModel)
    );
  }

  /**
   * Path part for operation categoryPost
   */
  static readonly CategoryPostPath = '/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoryPost$Response(params?: {
    context?: HttpContext
    body?: CreateCategoryCommand
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `categoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoryPost(params?: {
    context?: HttpContext
    body?: CreateCategoryCommand
  }
): Observable<void> {

    return this.categoryPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation categoryIdGet
   */
  static readonly CategoryIdGetPath = '/Category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CategoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<CategoryViewModel> {

    return this.categoryIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryViewModel>) => r.body as CategoryViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CategoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `categoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<CategoryViewModel> {

    return this.categoryIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryViewModel>) => r.body as CategoryViewModel)
    );
  }

}
