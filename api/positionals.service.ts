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
import { PositionalTreeNode } from '../model/positionalTreeNode';
// @ts-ignore
import { SportPositionDetail } from '../model/sportPositionDetail';
// @ts-ignore
import { SportPositionSpiderChartEvaluationClass } from '../model/sportPositionSpiderChartEvaluationClass';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    PositionalsServiceInterface
} from './positionals.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class PositionalsService implements PositionalsServiceInterface {

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
     * @param PositionID 
     * @param DisplayModeID 
     * @param InclusionModeID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public positionalItemFlat(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<PositionalTreeNode>>;
    public positionalItemFlat(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<PositionalTreeNode>>>;
    public positionalItemFlat(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<PositionalTreeNode>>>;
    public positionalItemFlat(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (PositionID !== undefined && PositionID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>PositionID, 'PositionID');
        }
        if (DisplayModeID !== undefined && DisplayModeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>DisplayModeID, 'DisplayModeID');
        }
        if (InclusionModeID !== undefined && InclusionModeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>InclusionModeID, 'InclusionModeID');
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

        let localVarPath = `/api/v1/Positionals/Positional/Item/Flat`;
        return this.httpClient.request<Array<PositionalTreeNode>>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * @param PositionID 
     * @param DisplayModeID 
     * @param InclusionModeID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public positionalItemTree(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<PositionalTreeNode>>;
    public positionalItemTree(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<PositionalTreeNode>>>;
    public positionalItemTree(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<PositionalTreeNode>>>;
    public positionalItemTree(PositionID?: number, DisplayModeID?: number, InclusionModeID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (PositionID !== undefined && PositionID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>PositionID, 'PositionID');
        }
        if (DisplayModeID !== undefined && DisplayModeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>DisplayModeID, 'DisplayModeID');
        }
        if (InclusionModeID !== undefined && InclusionModeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>InclusionModeID, 'InclusionModeID');
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

        let localVarPath = `/api/v1/Positionals/Positional/Item/Tree`;
        return this.httpClient.request<Array<PositionalTreeNode>>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * @param SportID 
     * @param IncludeReady 
     * @param IncludeNotReady 
     * @param IncludeGeneral 
     * @param IncludeOrientationSpecific 
     * @param IncludeOrientationNonSpecific 
     * @param IncludeOrientationGeneralized 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public positionsSelectAll(SportID?: number, IncludeReady?: boolean, IncludeNotReady?: boolean, IncludeGeneral?: number, IncludeOrientationSpecific?: number, IncludeOrientationNonSpecific?: number, IncludeOrientationGeneralized?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<SportPositionDetail>>;
    public positionsSelectAll(SportID?: number, IncludeReady?: boolean, IncludeNotReady?: boolean, IncludeGeneral?: number, IncludeOrientationSpecific?: number, IncludeOrientationNonSpecific?: number, IncludeOrientationGeneralized?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<SportPositionDetail>>>;
    public positionsSelectAll(SportID?: number, IncludeReady?: boolean, IncludeNotReady?: boolean, IncludeGeneral?: number, IncludeOrientationSpecific?: number, IncludeOrientationNonSpecific?: number, IncludeOrientationGeneralized?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<SportPositionDetail>>>;
    public positionsSelectAll(SportID?: number, IncludeReady?: boolean, IncludeNotReady?: boolean, IncludeGeneral?: number, IncludeOrientationSpecific?: number, IncludeOrientationNonSpecific?: number, IncludeOrientationGeneralized?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (SportID !== undefined && SportID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>SportID, 'SportID');
        }
        if (IncludeReady !== undefined && IncludeReady !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>IncludeReady, 'IncludeReady');
        }
        if (IncludeNotReady !== undefined && IncludeNotReady !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>IncludeNotReady, 'IncludeNotReady');
        }
        if (IncludeGeneral !== undefined && IncludeGeneral !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>IncludeGeneral, 'IncludeGeneral');
        }
        if (IncludeOrientationSpecific !== undefined && IncludeOrientationSpecific !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>IncludeOrientationSpecific, 'IncludeOrientationSpecific');
        }
        if (IncludeOrientationNonSpecific !== undefined && IncludeOrientationNonSpecific !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>IncludeOrientationNonSpecific, 'IncludeOrientationNonSpecific');
        }
        if (IncludeOrientationGeneralized !== undefined && IncludeOrientationGeneralized !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>IncludeOrientationGeneralized, 'IncludeOrientationGeneralized');
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

        let localVarPath = `/api/v1/Positionals/Positions/Select/All`;
        return this.httpClient.request<Array<SportPositionDetail>>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * @param PositionID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public positionsSelectItem(PositionID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<SportPositionDetail>;
    public positionsSelectItem(PositionID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<SportPositionDetail>>;
    public positionsSelectItem(PositionID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<SportPositionDetail>>;
    public positionsSelectItem(PositionID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (PositionID !== undefined && PositionID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>PositionID, 'PositionID');
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

        let localVarPath = `/api/v1/Positionals/Positions/Select/Item`;
        return this.httpClient.request<SportPositionDetail>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * @param PositionID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public positionsSelectRadar(PositionID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<SportPositionSpiderChartEvaluationClass>>;
    public positionsSelectRadar(PositionID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<SportPositionSpiderChartEvaluationClass>>>;
    public positionsSelectRadar(PositionID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<SportPositionSpiderChartEvaluationClass>>>;
    public positionsSelectRadar(PositionID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (PositionID !== undefined && PositionID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>PositionID, 'PositionID');
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

        let localVarPath = `/api/v1/Positionals/Positions/Select/Radar`;
        return this.httpClient.request<Array<SportPositionSpiderChartEvaluationClass>>('get', `${this.configuration.basePath}${localVarPath}`,
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

}
