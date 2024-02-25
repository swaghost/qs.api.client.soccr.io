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



export interface FeaturesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param FeatureKeyString 
     */
    getFeatureByString(FeatureKeyString: string, extraHttpRequestParams?: any): Observable<boolean>;

    /**
     * 
     * 
     */
    isEnabledIndependenceDayUS(extraHttpRequestParams?: any): Observable<boolean>;

    /**
     * 
     * 
     */
    showSomething(extraHttpRequestParams?: any): Observable<boolean>;

    /**
     * 
     * 
     */
    testGet(extraHttpRequestParams?: any): Observable<boolean>;

}
