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

import { EngagementMechanism } from '../model/models';
import { ExerciseClass } from '../model/models';
import { MuscleGroup } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface BodyServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     */
    engagementMechanismsSelectAll(extraHttpRequestParams?: any): Observable<Array<EngagementMechanism>>;

    /**
     * 
     * 
     */
    exerciseClassesSelectAll(extraHttpRequestParams?: any): Observable<Array<ExerciseClass>>;

    /**
     * 
     * 
     * @param MuscleGroupID 
     * @param MaxLevelID 
     */
    muscleGroupSelectAllAsTree(MuscleGroupID?: number, MaxLevelID?: number, extraHttpRequestParams?: any): Observable<Array<MuscleGroup>>;

    /**
     * 
     * 
     * @param MuscleGroupID 
     * @param MaxLevelID 
     */
    muscleGroupSelectAllFlat(MuscleGroupID?: number, MaxLevelID?: number, extraHttpRequestParams?: any): Observable<Array<MuscleGroup>>;

}