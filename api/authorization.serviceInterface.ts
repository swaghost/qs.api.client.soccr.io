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

import { AuthorizationAsset } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface AuthorizationServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param UserID 
     */
    assetAuthorizationForUser(UserID?: number, extraHttpRequestParams?: any): Observable<Array<AuthorizationAsset>>;

    /**
     * 
     * 
     * @param UserID 
     * @param AssetID 
     */
    assetAuthorizationForUserAsset(UserID?: number, AssetID?: number, extraHttpRequestParams?: any): Observable<Array<AuthorizationAsset>>;

    /**
     * 
     * 
     * @param UserID 
     * @param RouteURL 
     */
    assetAuthorizationForUserRoute(UserID?: number, RouteURL?: string, extraHttpRequestParams?: any): Observable<Array<AuthorizationAsset>>;

}