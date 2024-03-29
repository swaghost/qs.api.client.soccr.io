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

import { ApplicationFlatForCurriculum } from '../model/models';
import { ApplicationParentForCurriculum } from '../model/models';
import { CommonResult } from '../model/models';
import { CurriculumApplicationDetail } from '../model/models';
import { CurriculumDetail } from '../model/models';
import { CurriculumPartDetail } from '../model/models';
import { CurriculumPartStatusEntry } from '../model/models';
import { CurriculumPlanDetail } from '../model/models';
import { CurriculumPlanStatusEntry } from '../model/models';
import { CurriculumRequest } from '../model/models';
import { CurriculumStatusEntry } from '../model/models';
import { GenericTreeNode } from '../model/models';
import { GenericTreeNodeFlat } from '../model/models';
import { Sport } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface CurriculumServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    applicationBaseClear(CurriculumID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumApplicationID 
     */
    applicationBaseDelete(CurriculumApplicationID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CABID 
     */
    applicationBaseSelectItem(CABID?: number, extraHttpRequestParams?: any): Observable<CurriculumApplicationDetail>;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    applicationDetails(CurriculumID?: number, extraHttpRequestParams?: any): Observable<Array<ApplicationParentForCurriculum>>;

    /**
     * 
     * 
     * @param CurriculumApplicationDetail 
     */
    applicationInsertUpdate(CurriculumApplicationDetail?: Array<CurriculumApplicationDetail>, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    applicationSelectAll(CurriculumID?: number, extraHttpRequestParams?: any): Observable<Array<CurriculumApplicationDetail>>;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    curriculumApplicationDetailsFlat(CurriculumID?: number, extraHttpRequestParams?: any): Observable<Array<ApplicationFlatForCurriculum>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationItemsTree(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<Sport>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationItemsTreeNodes(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<GenericTreeNode>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationItemsTreeNodesFlat(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<GenericTreeNodeFlat>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationOptions(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<ApplicationParentForCurriculum>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationOptionsFlat(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<ApplicationFlatForCurriculum>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationOptionsTree(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<Sport>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationOptionsTreeNodes(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<GenericTreeNode>>;

    /**
     * 
     * 
     * @param CurriculumRequest 
     */
    curriculumApplicationOptionsTreeNodesFlat(CurriculumRequest?: CurriculumRequest, extraHttpRequestParams?: any): Observable<Array<GenericTreeNodeFlat>>;

    /**
     * 
     * 
     * @param CurriculumID 
     * @param IncludePlans 
     */
    curriculumDelete(CurriculumID?: number, IncludePlans?: boolean, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumID 
     * @param Overwrite 
     */
    curriculumGeneratePlaceholders(CurriculumID?: number, Overwrite?: boolean, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumDetail 
     */
    curriculumInsert(CurriculumDetail?: CurriculumDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumPartID 
     */
    curriculumPartDelete(CurriculumPartID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumPartDetail 
     */
    curriculumPartInsert(CurriculumPartDetail?: CurriculumPartDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    curriculumPartSelectAll(CurriculumID?: number, extraHttpRequestParams?: any): Observable<Array<CurriculumPartDetail>>;

    /**
     * 
     * 
     * @param CurriculumPartID 
     */
    curriculumPartSelectItem(CurriculumPartID?: number, extraHttpRequestParams?: any): Observable<CurriculumPartDetail>;

    /**
     * 
     * 
     */
    curriculumPartStatusList(extraHttpRequestParams?: any): Observable<Array<CurriculumPartStatusEntry>>;

    /**
     * 
     * 
     * @param CurriculumPartDetail 
     */
    curriculumPartUpdate(CurriculumPartDetail?: CurriculumPartDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumPartID 
     * @param Direction 
     */
    curriculumPartsMoveUpDown(CurriculumPartID?: number, Direction?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumPlanID 
     */
    curriculumPlanDelete(CurriculumPlanID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumPlanDetail 
     */
    curriculumPlanInsert(CurriculumPlanDetail?: CurriculumPlanDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    curriculumPlanSelectAll(CurriculumID?: number, extraHttpRequestParams?: any): Observable<Array<CurriculumPlanDetail>>;

    /**
     * 
     * 
     * @param CurriculumPlanID 
     */
    curriculumPlanSelectItem(CurriculumPlanID?: number, extraHttpRequestParams?: any): Observable<CurriculumPlanDetail>;

    /**
     * 
     * 
     */
    curriculumPlanStatusList(extraHttpRequestParams?: any): Observable<Array<CurriculumPlanStatusEntry>>;

    /**
     * 
     * 
     * @param CurriculumPlanDetail 
     */
    curriculumPlanUpdate(CurriculumPlanDetail?: CurriculumPlanDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param SportID 
     * @param IncludeAny 
     */
    curriculumSelectAll(SportID?: number, IncludeAny?: boolean, extraHttpRequestParams?: any): Observable<Array<CurriculumDetail>>;

    /**
     * 
     * 
     * @param CurriculumID 
     */
    curriculumSelectItem(CurriculumID?: number, extraHttpRequestParams?: any): Observable<CurriculumDetail>;

    /**
     * 
     * 
     */
    curriculumStatusList(extraHttpRequestParams?: any): Observable<Array<CurriculumStatusEntry>>;

    /**
     * 
     * 
     * @param CurriculumDetail 
     */
    curriculumUpdate(CurriculumDetail?: CurriculumDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumDetail 
     */
    curriculumUpdateBasics(CurriculumDetail?: CurriculumDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CurriculumDetail 
     */
    curriculumUpdateGeneratorDetails(CurriculumDetail?: CurriculumDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param TargetIndex 
     * @param Subject 
     * @param Body 
     * @param IsHtml 
     */
    sendCurriculumEmailAsync(TargetIndex?: number, Subject?: string, Body?: string, IsHtml?: boolean, extraHttpRequestParams?: any): Observable<{}>;

}
