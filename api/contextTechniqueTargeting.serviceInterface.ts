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

import { ApprovalState } from '../model/models';
import { CommonResult } from '../model/models';
import { ContextTechniqueTarget } from '../model/models';
import { TechniqueDetailed } from '../model/models';
import { TechniqueListCurrentPosition } from '../model/models';
import { TechniqueShort } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ContextTechniqueTargetingServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     */
    approvalStatesSelectAll(extraHttpRequestParams?: any): Observable<Array<ApprovalState>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param TechniqueID 
     * @param MinApprovalLevel 
     */
    targetBrowserSelectFirst(Context?: string, ContextKey?: number, TechniqueID?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<TechniqueDetailed>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param TechniqueID 
     * @param MinApprovalLevel 
     */
    targetBrowserSelectLast(Context?: string, ContextKey?: number, TechniqueID?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<TechniqueDetailed>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param TechniqueID 
     * @param MinApprovalLevel 
     */
    targetBrowserSelectNext(Context?: string, ContextKey?: number, TechniqueID?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<TechniqueDetailed>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param TechniqueID 
     * @param MinApprovalLevel 
     */
    targetBrowserSelectOrderedPosition(Context?: string, ContextKey?: number, TechniqueID?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<TechniqueListCurrentPosition>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param TechniqueID 
     * @param MinApprovalLevel 
     */
    targetBrowserSelectPrev(Context?: string, ContextKey?: number, TechniqueID?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<TechniqueDetailed>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param MinApprovalLevel 
     */
    targetsEditorSelectAny(Context?: string, ContextKey?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<Array<ContextTechniqueTarget>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param MinApprovalLevel 
     */
    targetsSelectApproved(Context?: string, ContextKey?: number, MinApprovalLevel?: number, extraHttpRequestParams?: any): Observable<Array<TechniqueShort>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param TechniqueID 
     */
    targetsSelectTechnique(Context?: string, ContextKey?: number, TechniqueID?: number, extraHttpRequestParams?: any): Observable<ContextTechniqueTarget>;

    /**
     * 
     * 
     * @param ContextTechniqueTarget 
     */
    targetsSet(ContextTechniqueTarget?: ContextTechniqueTarget, extraHttpRequestParams?: any): Observable<CommonResult>;

}
