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
import { ContextSidebar } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ContextSideServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    deleteContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextSidebarID 
     */
    deleteContextSidebarItem(ContextSidebarID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextSidebar 
     */
    insertContextSidebar(ContextSidebar?: ContextSidebar, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextSidebarID 
     */
    selectContextSidebarItem(ContextSidebarID?: number, extraHttpRequestParams?: any): Observable<ContextSidebar>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    selectSidebarForContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextSidebar>>;

    /**
     * 
     * 
     * @param ContextSidebar 
     */
    updateContextSidebar(ContextSidebar?: ContextSidebar, extraHttpRequestParams?: any): Observable<CommonResult>;

}