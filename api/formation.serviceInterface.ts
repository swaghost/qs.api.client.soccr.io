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

import { FormationTreeNode } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface FormationServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param FormationID 
     * @param DisplayModeID 
     * @param InclusionModeID 
     */
    formationsItemFlat(FormationID?: number, DisplayModeID?: number, InclusionModeID?: number, extraHttpRequestParams?: any): Observable<Array<FormationTreeNode>>;

    /**
     * 
     * 
     * @param FormationID 
     * @param DisplayModeID 
     * @param InclusionModeID 
     */
    formationsItemTree(FormationID?: number, DisplayModeID?: number, InclusionModeID?: number, extraHttpRequestParams?: any): Observable<Array<FormationTreeNode>>;

}
