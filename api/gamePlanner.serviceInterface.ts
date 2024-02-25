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
import { GamePlanner } from '../model/models';
import { GamePlannerPositionDetail } from '../model/models';
import { GamePlannerPositionUpdate } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface GamePlannerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param GamePlannerID 
     */
    planerPositionsClear(GamePlannerID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param GamePlannerPositionID 
     */
    planerPositionsDelete(GamePlannerPositionID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param GamePlannerPositionUpdate 
     */
    planerPositionsInsert(GamePlannerPositionUpdate?: GamePlannerPositionUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param GamePlannerPositionUpdate 
     */
    planerPositionsUpdate(GamePlannerPositionUpdate?: GamePlannerPositionUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param GamePlannerID 
     */
    plannerDeleteGame(GamePlannerID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param TeamID 
     */
    plannerDeleteTeam(TeamID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param GamePlanner 
     */
    plannerInsert(GamePlanner?: GamePlanner, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param GamePlannerID 
     */
    plannerPositionsSelectGame(GamePlannerID?: number, extraHttpRequestParams?: any): Observable<Array<GamePlannerPositionDetail>>;

    /**
     * 
     * 
     * @param GamePlannerID 
     */
    plannerSelectItem(GamePlannerID?: number, extraHttpRequestParams?: any): Observable<GamePlanner>;

    /**
     * 
     * 
     * @param TeamID 
     */
    plannerSelectTeam(TeamID?: number, extraHttpRequestParams?: any): Observable<Array<GamePlanner>>;

    /**
     * 
     * 
     * @param UserID 
     */
    plannerSelectUser(UserID?: number, extraHttpRequestParams?: any): Observable<Array<GamePlanner>>;

    /**
     * 
     * 
     * @param GamePlanner 
     */
    plannerUpdate(GamePlanner?: GamePlanner, extraHttpRequestParams?: any): Observable<CommonResult>;

}
