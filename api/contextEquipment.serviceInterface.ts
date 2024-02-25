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
import { ContextEquipmentAttachmentDetail } from '../model/models';
import { ContextEquipmentAttachmentEntry } from '../model/models';
import { ContextEquipmentAutoComplete } from '../model/models';
import { ContextEquipmentEntry } from '../model/models';
import { ContextEquipmentEntryForDisplay } from '../model/models';
import { PriceRatingEntry } from '../model/models';
import { ValueRatingEntry } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ContextEquipmentServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param CEID 
     */
    deleteContextEquipment(CEID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    equipmentAttachmentDeleteContextAll(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CGID 
     * @param Context 
     * @param ContextKey 
     */
    equipmentAttachmentDeleteContextItem(CGID?: number, Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CEAID 
     */
    equipmentAttachmentDeleteItem(CEAID?: string, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    equipmentAttachmentGetValueRatingsHierarchy(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ValueRatingEntry>>;

    /**
     * 
     * 
     * @param ContextEquipmentAttachmentEntry 
     */
    equipmentAttachmentInsert(ContextEquipmentAttachmentEntry?: ContextEquipmentAttachmentEntry, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    equipmentAttachmentSelectContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentAttachmentDetail>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    equipmentAttachmentSelectContextForDisplay(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentEntryForDisplay>>;

    /**
     * 
     * 
     * @param CEAID 
     */
    equipmentAttachmentSelectItem(CEAID?: string, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentAttachmentDetail>>;

    /**
     * 
     * 
     * @param CEID 
     * @param Context 
     * @param ContextKey 
     */
    equipmentAttachmentSelectItemContext(CEID?: number, Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentAttachmentDetail>>;

    /**
     * 
     * 
     * @param CEID 
     */
    equipmentAttachmentSelectLink(CEID?: number, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentAttachmentDetail>>;

    /**
     * 
     * 
     * @param ContextEquipmentAttachmentEntry 
     */
    equipmentAttachmentUpdate(ContextEquipmentAttachmentEntry?: ContextEquipmentAttachmentEntry, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextEquipmentAttachmentEntry 
     */
    equipmentAttachmentUpdateBulk(ContextEquipmentAttachmentEntry?: Array<ContextEquipmentAttachmentEntry>, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param SearchTerm 
     */
    equipmentContains(Context?: string, ContextKey?: number, SearchTerm?: string, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentEntry>>;

    /**
     * 
     * 
     */
    equipmentSelectAll(extraHttpRequestParams?: any): Observable<Array<ContextEquipmentEntry>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param SearchTerm 
     */
    equipmentStartsWith(Context?: string, ContextKey?: number, SearchTerm?: string, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentEntry>>;

    /**
     * 
     * 
     * @param NotInContext 
     * @param NotInContextKey 
     * @param SearchText 
     */
    equipmentTermSearchAnyContextNotInContextAutoComplete(NotInContext?: string, NotInContextKey?: number, SearchText?: string, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentAutoComplete>>;

    /**
     * 
     * 
     * @param SearchContext 
     * @param SearchContextKey 
     * @param NotInContext 
     * @param NotInContextKey 
     * @param SearchText 
     */
    equipmentTermSearchContextNotInContextAutoComplete(SearchContext?: string, SearchContextKey?: number, NotInContext?: string, NotInContextKey?: number, SearchText?: string, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentAutoComplete>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    equipmentTermSearchSuggestions(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentEntry>>;

    /**
     * 
     * 
     */
    getValueRatingsList(extraHttpRequestParams?: any): Observable<Array<ValueRatingEntry>>;

    /**
     * 
     * 
     * @param ContextEquipmentEntry 
     */
    insertEquipmentEntry(ContextEquipmentEntry?: ContextEquipmentEntry, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     */
    priceRatingsList(extraHttpRequestParams?: any): Observable<Array<PriceRatingEntry>>;

    /**
     * 
     * 
     * @param CEID 
     */
    selectContextEquipmentItem(CEID?: number, extraHttpRequestParams?: any): Observable<ContextEquipmentEntry>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    selectEquipmentForContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextEquipmentEntry>>;

    /**
     * 
     * 
     * @param ContextEquipmentEntry 
     */
    updateEquipmentEntry(ContextEquipmentEntry?: ContextEquipmentEntry, extraHttpRequestParams?: any): Observable<CommonResult>;

}