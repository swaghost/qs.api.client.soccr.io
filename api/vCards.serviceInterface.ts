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



import { Configuration }                                     from '../configuration';



export interface VCardsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param ContributorID 
     */
    contributor(ContributorID: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     */
    founder(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param Login 
     */
    siteMember(Login: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param ID 
     */
    siteMemberByID(ID: string, extraHttpRequestParams?: any): Observable<{}>;

}
