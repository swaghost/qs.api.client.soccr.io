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
import { TechniqueApplicationSeriesForDisplay } from '../model/models';
import { TechniqueApplicationSeriesForTechniqueEditor } from '../model/models';
import { TechniqueApplicationSeriesRootForEdit } from '../model/models';
import { TechniqueApplicationSeriesRootForUpdate } from '../model/models';
import { TechniqueApplicationSeriesStatus } from '../model/models';
import { TechniqueApplicationSeriesUsage } from '../model/models';
import { TechniqueApplicationSeriesUsageDetailsForEdit } from '../model/models';
import { TechniqueApplicationSeriesUsageUpdate } from '../model/models';
import { TechniqueDetailed } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface TechniqueSeriesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Clear a Technique Application Series
     * 
     * @param TSID 
     */
    techniqueApplicationSeriesClearAll(TSID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param TSID 
     * @param TechniqueID 
     */
    techniqueApplicationSeriesClearTechnique(TSID?: number, TechniqueID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Delete a Technique Application Series
     * 
     * @param TechniqueApplicationSeriesUsage 
     */
    techniqueApplicationSeriesDelete(TechniqueApplicationSeriesUsage?: TechniqueApplicationSeriesUsage, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Select a Technique Application Series
     * 
     * @param TSID 
     */
    techniqueApplicationSeriesDetailForDisplay(TSID?: number, extraHttpRequestParams?: any): Observable<TechniqueApplicationSeriesForDisplay>;

    /**
     * Select a Technique Application Series
     * 
     * @param TSID 
     */
    techniqueApplicationSeriesDetailForEdit(TSID?: number, extraHttpRequestParams?: any): Observable<TechniqueApplicationSeriesRootForEdit>;

    /**
     * 
     * 
     * @param TechniqueTypeID 
     * @param TSID 
     * @param MuscleGroupID 
     * @param ExerciseClassID 
     */
    techniqueApplicationSeriesForApplication(TechniqueTypeID?: number, TSID?: number, MuscleGroupID?: number, ExerciseClassID?: number, extraHttpRequestParams?: any): Observable<Array<TechniqueApplicationSeriesForTechniqueEditor>>;

    /**
     * Select list of Technique Application Series for a Sport.
     * 
     * @param SportID 
     */
    techniqueApplicationSeriesForSport(SportID?: number, extraHttpRequestParams?: any): Observable<Array<TechniqueApplicationSeriesForTechniqueEditor>>;

    /**
     * Insert a new Technique Application Series
     * 
     * @param TechniqueApplicationSeriesRootForUpdate 
     */
    techniqueApplicationSeriesRootInsert(TechniqueApplicationSeriesRootForUpdate?: TechniqueApplicationSeriesRootForUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Update Technique Application Series
     * 
     * @param TechniqueApplicationSeriesRootForUpdate 
     */
    techniqueApplicationSeriesRootUpdate(TechniqueApplicationSeriesRootForUpdate?: TechniqueApplicationSeriesRootForUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param TSID 
     */
    techniqueApplicationSeriesSelectAllTechniques(TSID?: number, extraHttpRequestParams?: any): Observable<Array<TechniqueDetailed>>;

    /**
     * Get the list of Technique Application Series status values
     * 
     */
    techniqueApplicationSeriesStatus(extraHttpRequestParams?: any): Observable<Array<TechniqueApplicationSeriesStatus>>;

    /**
     * 
     * 
     * @param TSUsageID 
     * @param UserID 
     */
    techniqueApplicationSeriesUsageDelete(TSUsageID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Insert a usage item.
     * 
     * @param TechniqueApplicationSeriesUsageUpdate 
     */
    techniqueApplicationSeriesUsageInsert(TechniqueApplicationSeriesUsageUpdate?: TechniqueApplicationSeriesUsageUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Updatee usage (Bulk Procedure).
     * 
     * @param TechniqueApplicationSeriesUsageUpdate 
     */
    techniqueApplicationSeriesUsageInsertUpdateBulk(TechniqueApplicationSeriesUsageUpdate?: Array<TechniqueApplicationSeriesUsageUpdate>, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Move the Series up or down,etc.
     * 
     * @param TSUsageID 
     * @param Direction 
     */
    techniqueApplicationSeriesUsageMove(TSUsageID?: number, Direction?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * Select an individual Usage item.
     * 
     * @param TSUsageID 
     */
    techniqueApplicationSeriesUsageSelectItem(TSUsageID?: number, extraHttpRequestParams?: any): Observable<TechniqueApplicationSeriesUsageDetailsForEdit>;

    /**
     * Select all the usage for a Series (for Maintenance purposes)
     * 
     * @param TSID 
     */
    techniqueApplicationSeriesUsageSelectSeries(TSID?: number, extraHttpRequestParams?: any): Observable<Array<TechniqueApplicationSeriesUsageDetailsForEdit>>;

    /**
     * Update usage.
     * 
     * @param TechniqueApplicationSeriesUsageUpdate 
     */
    techniqueApplicationSeriesUsageUpdate(TechniqueApplicationSeriesUsageUpdate?: TechniqueApplicationSeriesUsageUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param TSUsageID 
     * @param OverrideTechniqueSeriesUsagePrefix 
     */
    techniqueApplicationSeriesUsageUpdatePrefix(TSUsageID?: number, OverrideTechniqueSeriesUsagePrefix?: string, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param TSUsageID 
     */
    techniquesForTSUsage(TSUsageID?: number, extraHttpRequestParams?: any): Observable<Array<TechniqueDetailed>>;

}
