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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CommonResult } from '../model/models';
import { SimpleMessageStoreEntry } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface SimpleMessageServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    clearContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param SimpleMessageID 
     */
    deleteMessageItem(SimpleMessageID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param request_body 
     */
    deleteMessageList(request_body?: Array<number>, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param SimpleMessageStoreEntry 
     */
    insertMessage(SimpleMessageStoreEntry?: SimpleMessageStoreEntry, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     */
    messagesClearAll(extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    selectContextDateRange(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<SimpleMessageStoreEntry>>;

    /**
     * 
     * 
     * @param SimpleMessageID 
     */
    selectMessageItem(SimpleMessageID?: number, extraHttpRequestParams?: any): Observable<SimpleMessageStoreEntry>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    selectMessagesForContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<SimpleMessageStoreEntry>>;

}
