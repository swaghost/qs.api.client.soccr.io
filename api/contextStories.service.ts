/**
 * soccr.io API
 * An ASP.NET Core Web API for managing Soccer items
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CommonResult } from '../model/commonResult';
// @ts-ignore
import { ContextStory } from '../model/contextStory';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    ContextStoriesServiceInterface
} from './contextStories.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class ContextStoriesService implements ContextStoriesServiceInterface {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param Context 
     * @param ContextKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStoryDeleteContextd(Context?: string, ContextKey?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public contextStoryDeleteContextd(Context?: string, ContextKey?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public contextStoryDeleteContextd(Context?: string, ContextKey?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public contextStoryDeleteContextd(Context?: string, ContextKey?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (Context !== undefined && Context !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>Context, 'Context');
        }
        if (ContextKey !== undefined && ContextKey !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContextKey, 'ContextKey');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Delete/Context`;
        return this.httpClient.request<CommonResult>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param ContextStoryID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStoryDeleteItem(ContextStoryID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public contextStoryDeleteItem(ContextStoryID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public contextStoryDeleteItem(ContextStoryID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public contextStoryDeleteItem(ContextStoryID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (ContextStoryID !== undefined && ContextStoryID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContextStoryID, 'ContextStoryID');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Delete/Item`;
        return this.httpClient.request<CommonResult>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param Context 
     * @param ContextKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStoryExists(Context?: string, ContextKey?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<boolean>;
    public contextStoryExists(Context?: string, ContextKey?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<boolean>>;
    public contextStoryExists(Context?: string, ContextKey?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<boolean>>;
    public contextStoryExists(Context?: string, ContextKey?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (Context !== undefined && Context !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>Context, 'Context');
        }
        if (ContextKey !== undefined && ContextKey !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContextKey, 'ContextKey');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Exists`;
        return this.httpClient.request<boolean>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param ContextStory 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStoryInsert(ContextStory?: ContextStory, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public contextStoryInsert(ContextStory?: ContextStory, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public contextStoryInsert(ContextStory?: ContextStory, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public contextStoryInsert(ContextStory?: ContextStory, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Insert`;
        return this.httpClient.request<CommonResult>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: ContextStory,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param SearchText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStorySearch(SearchText?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<ContextStory>>;
    public contextStorySearch(SearchText?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<ContextStory>>>;
    public contextStorySearch(SearchText?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<ContextStory>>>;
    public contextStorySearch(SearchText?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (SearchText !== undefined && SearchText !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>SearchText, 'SearchText');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Search/Text`;
        return this.httpClient.request<Array<ContextStory>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param Context 
     * @param ContextKey 
     * @param SearchText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStorySearchContextWithText(Context?: string, ContextKey?: number, SearchText?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<ContextStory>>;
    public contextStorySearchContextWithText(Context?: string, ContextKey?: number, SearchText?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<ContextStory>>>;
    public contextStorySearchContextWithText(Context?: string, ContextKey?: number, SearchText?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<ContextStory>>>;
    public contextStorySearchContextWithText(Context?: string, ContextKey?: number, SearchText?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (Context !== undefined && Context !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>Context, 'Context');
        }
        if (ContextKey !== undefined && ContextKey !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContextKey, 'ContextKey');
        }
        if (SearchText !== undefined && SearchText !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>SearchText, 'SearchText');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Search/Context`;
        return this.httpClient.request<Array<ContextStory>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param Context 
     * @param ContextKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStorySelectContext(Context?: string, ContextKey?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<ContextStory>>;
    public contextStorySelectContext(Context?: string, ContextKey?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<ContextStory>>>;
    public contextStorySelectContext(Context?: string, ContextKey?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<ContextStory>>>;
    public contextStorySelectContext(Context?: string, ContextKey?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (Context !== undefined && Context !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>Context, 'Context');
        }
        if (ContextKey !== undefined && ContextKey !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContextKey, 'ContextKey');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Select/Context`;
        return this.httpClient.request<Array<ContextStory>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param ContextStoryID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStorySelectItem(ContextStoryID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<ContextStory>;
    public contextStorySelectItem(ContextStoryID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<ContextStory>>;
    public contextStorySelectItem(ContextStoryID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<ContextStory>>;
    public contextStorySelectItem(ContextStoryID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (ContextStoryID !== undefined && ContextStoryID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContextStoryID, 'ContextStoryID');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Select/Item`;
        return this.httpClient.request<ContextStory>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param ContextStory 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contextStoryUpdate(ContextStory?: ContextStory, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public contextStoryUpdate(ContextStory?: ContextStory, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public contextStoryUpdate(ContextStory?: ContextStory, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public contextStoryUpdate(ContextStory?: ContextStory, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/ContextStories/Update`;
        return this.httpClient.request<CommonResult>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: ContextStory,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
