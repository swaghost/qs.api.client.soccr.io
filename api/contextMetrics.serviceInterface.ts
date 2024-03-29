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

import { ContextMetric } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ContextMetricsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Bottom 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForDateRange(Context?: string, Metric?: string, Bottom?: number, InclusiveRangeStart?: Date, InclusiveRangeEnd?: Date, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Bottom 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForHour(Context?: string, Metric?: string, Bottom?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Bottom 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForMonth(Context?: string, Metric?: string, Bottom?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Bottom 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForWeek(Context?: string, Metric?: string, Bottom?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Bottom 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForWeekDay(Context?: string, Metric?: string, Bottom?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForYear(Context?: string, Metric?: string, top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Bottom 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectBottomForYearMonthDay(Context?: string, Metric?: string, Bottom?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForForDateRange(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: Date, InclusiveRangeEnd?: Date, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForHour(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param LastNDays 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForLastNDays(Context?: string, ContextKey?: number, Metric?: string, LastNDays?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForMonth(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForWeek(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForWeekDay(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForYear(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemForYearMonthDay(Context?: string, ContextKey?: number, Metric?: string, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectItemOverall(Context?: string, ContextKey?: number, Metric?: string, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectLatestOverall(Context?: string, Metric?: string, Top?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForDateRange(Context?: string, Metric?: string, Top?: number, InclusiveRangeStart?: Date, InclusiveRangeEnd?: Date, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForHour(Context?: string, Metric?: string, Top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForMonth(Context?: string, Metric?: string, Top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForWeek(Context?: string, Metric?: string, Top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForWeekDay(Context?: string, Metric?: string, Top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForYear(Context?: string, Metric?: string, top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param Metric 
     * @param Top 
     * @param InclusiveRangeStart 
     * @param InclusiveRangeEnd 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsSelectTopForYearMonthDay(Context?: string, Metric?: string, Top?: number, InclusiveRangeStart?: number, InclusiveRangeEnd?: number, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<Array<ContextMetric>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     */
    contextMetricsUpdate(Context?: string, ContextKey?: number, Metric?: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsUpdateForTenantUser(Context?: string, ContextKey?: number, Metric?: string, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param Metric 
     * @param TenantID 
     * @param UserID 
     */
    contextMetricsUpdateSimple(Context?: string, ContextKey?: number, Metric?: string, TenantID?: number, UserID?: number, extraHttpRequestParams?: any): Observable<{}>;

}
