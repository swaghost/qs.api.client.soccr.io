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


export interface TechniqueApplicationSeriesRootForUpdate { 
    TSID?: number;
    TechniqueSeriesName?: string | null;
    TechniqueSeriesSubtitle?: string | null;
    TechniqueSeriesUsagePrefix?: string | null;
    TechniqueSeriesIndex?: number;
    TechniqueSeriesAbbrev?: string | null;
    TechniqueApplicationSeriesStatusID?: number;
    TechniqueSeriesDesc?: string | null;
    AddedUTC?: Date;
    AddedByUserID?: number;
    LastUpdatedUTC?: Date;
    LastUpdatedByUserID?: number;
    PointValue?: number;
}
