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
import { RelatedTechnique } from '../model/relatedTechnique';
// @ts-ignore
import { TechniqueRelationshipType } from '../model/techniqueRelationshipType';
// @ts-ignore
import { TechniqueShort } from '../model/techniqueShort';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    TechniqueRelationshipsServiceInterface
} from './techniqueRelationships.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class TechniqueRelationshipsService implements TechniqueRelationshipsServiceInterface {

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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipTypes(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<TechniqueRelationshipType>>;
    public techniqueRelationshipTypes(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<TechniqueRelationshipType>>>;
    public techniqueRelationshipTypes(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<TechniqueRelationshipType>>>;
    public techniqueRelationshipTypes(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/TechniqueRelationshipTypes`;
        return this.httpClient.request<Array<TechniqueRelationshipType>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param TRID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsDelete(TRID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public techniqueRelationshipsDelete(TRID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public techniqueRelationshipsDelete(TRID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public techniqueRelationshipsDelete(TRID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TRID !== undefined && TRID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TRID, 'TRID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/Delete`;
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
     * @param TechniqueID 
     * @param RelatedTechniqueID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsDeleteByKey(TechniqueID?: number, RelatedTechniqueID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public techniqueRelationshipsDeleteByKey(TechniqueID?: number, RelatedTechniqueID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public techniqueRelationshipsDeleteByKey(TechniqueID?: number, RelatedTechniqueID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public techniqueRelationshipsDeleteByKey(TechniqueID?: number, RelatedTechniqueID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TechniqueID !== undefined && TechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueID, 'TechniqueID');
        }
        if (RelatedTechniqueID !== undefined && RelatedTechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>RelatedTechniqueID, 'RelatedTechniqueID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/Delete/ByKey`;
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
     * @param TechniqueID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsDeleteTechnique(TechniqueID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public techniqueRelationshipsDeleteTechnique(TechniqueID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public techniqueRelationshipsDeleteTechnique(TechniqueID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public techniqueRelationshipsDeleteTechnique(TechniqueID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TechniqueID !== undefined && TechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueID, 'TechniqueID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/Delete/Technique`;
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
     * @param TechniqueID 
     * @param RelatedTechniqueID 
     * @param RelationshipTypeID 
     * @param UserID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsInsert(TechniqueID?: number, RelatedTechniqueID?: number, RelationshipTypeID?: number, UserID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public techniqueRelationshipsInsert(TechniqueID?: number, RelatedTechniqueID?: number, RelationshipTypeID?: number, UserID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public techniqueRelationshipsInsert(TechniqueID?: number, RelatedTechniqueID?: number, RelationshipTypeID?: number, UserID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public techniqueRelationshipsInsert(TechniqueID?: number, RelatedTechniqueID?: number, RelationshipTypeID?: number, UserID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TechniqueID !== undefined && TechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueID, 'TechniqueID');
        }
        if (RelatedTechniqueID !== undefined && RelatedTechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>RelatedTechniqueID, 'RelatedTechniqueID');
        }
        if (RelationshipTypeID !== undefined && RelationshipTypeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>RelationshipTypeID, 'RelationshipTypeID');
        }
        if (UserID !== undefined && UserID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>UserID, 'UserID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/Insert`;
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
     * @param TechniqueID 
     * @param SportID 
     * @param TechniqueClassID 
     * @param TechniqueTypeID 
     * @param TSID 
     * @param TechniqueStatusID 
     * @param PatternTypeID 
     * @param ContentTypeID 
     * @param InstructionMethodID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsSearch(TechniqueID?: number, SportID?: number, TechniqueClassID?: number, TechniqueTypeID?: number, TSID?: number, TechniqueStatusID?: number, PatternTypeID?: number, ContentTypeID?: number, InstructionMethodID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<TechniqueShort>>;
    public techniqueRelationshipsSearch(TechniqueID?: number, SportID?: number, TechniqueClassID?: number, TechniqueTypeID?: number, TSID?: number, TechniqueStatusID?: number, PatternTypeID?: number, ContentTypeID?: number, InstructionMethodID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<TechniqueShort>>>;
    public techniqueRelationshipsSearch(TechniqueID?: number, SportID?: number, TechniqueClassID?: number, TechniqueTypeID?: number, TSID?: number, TechniqueStatusID?: number, PatternTypeID?: number, ContentTypeID?: number, InstructionMethodID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<TechniqueShort>>>;
    public techniqueRelationshipsSearch(TechniqueID?: number, SportID?: number, TechniqueClassID?: number, TechniqueTypeID?: number, TSID?: number, TechniqueStatusID?: number, PatternTypeID?: number, ContentTypeID?: number, InstructionMethodID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TechniqueID !== undefined && TechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueID, 'TechniqueID');
        }
        if (SportID !== undefined && SportID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>SportID, 'SportID');
        }
        if (TechniqueClassID !== undefined && TechniqueClassID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueClassID, 'TechniqueClassID');
        }
        if (TechniqueTypeID !== undefined && TechniqueTypeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueTypeID, 'TechniqueTypeID');
        }
        if (TSID !== undefined && TSID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TSID, 'TSID');
        }
        if (TechniqueStatusID !== undefined && TechniqueStatusID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueStatusID, 'TechniqueStatusID');
        }
        if (PatternTypeID !== undefined && PatternTypeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>PatternTypeID, 'PatternTypeID');
        }
        if (ContentTypeID !== undefined && ContentTypeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ContentTypeID, 'ContentTypeID');
        }
        if (InstructionMethodID !== undefined && InstructionMethodID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>InstructionMethodID, 'InstructionMethodID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/Search`;
        return this.httpClient.request<Array<TechniqueShort>>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * @param TechniqueID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsSelectAll(TechniqueID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<RelatedTechnique>>;
    public techniqueRelationshipsSelectAll(TechniqueID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<RelatedTechnique>>>;
    public techniqueRelationshipsSelectAll(TechniqueID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<RelatedTechnique>>>;
    public techniqueRelationshipsSelectAll(TechniqueID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TechniqueID !== undefined && TechniqueID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TechniqueID, 'TechniqueID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/SelectAll`;
        return this.httpClient.request<Array<RelatedTechnique>>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * @param TRID 
     * @param RelationshipTypeID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public techniqueRelationshipsUpdate(TRID?: number, RelationshipTypeID?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CommonResult>;
    public techniqueRelationshipsUpdate(TRID?: number, RelationshipTypeID?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CommonResult>>;
    public techniqueRelationshipsUpdate(TRID?: number, RelationshipTypeID?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CommonResult>>;
    public techniqueRelationshipsUpdate(TRID?: number, RelationshipTypeID?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (TRID !== undefined && TRID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>TRID, 'TRID');
        }
        if (RelationshipTypeID !== undefined && RelationshipTypeID !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>RelationshipTypeID, 'RelationshipTypeID');
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

        let localVarPath = `/api/v1/TechniqueRelationships/TechniqueRelationships/Update`;
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

}
