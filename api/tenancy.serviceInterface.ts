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

import { AuthenticationResult } from '../model/models';
import { TenantListResponse } from '../model/models';
import { TenantUserActionRequest } from '../model/models';
import { UserTenantListResponse } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface TenancyServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param TenantUserActionRequest 
     */
    activateTenantForUser(TenantUserActionRequest?: TenantUserActionRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param TenantUserActionRequest 
     */
    deactivateTenantForUser(TenantUserActionRequest?: TenantUserActionRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     */
    getTenantList(extraHttpRequestParams?: any): Observable<TenantListResponse>;

    /**
     * 
     * 
     * @param TenantID 
     */
    getUserTenant(TenantID?: number, extraHttpRequestParams?: any): Observable<UserTenantListResponse>;

    /**
     * 
     * 
     */
    getUserTenantList(extraHttpRequestParams?: any): Observable<UserTenantListResponse>;

    /**
     * 
     * 
     * @param UserID 
     * @param TenantID 
     */
    verifyUserTenant(UserID?: number, TenantID?: number, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

}
