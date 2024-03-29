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


export interface TechniqueApplicationSeriesUsageUpdate { 
    TSUsageID?: number;
    TSID?: number;
    OverrideTechniqueSeriesName?: string | null;
    OverrideTechniqueSeriesSubtitle?: string | null;
    OverrideTechniqueSeriesUsagePrefix?: string | null;
    OverrideTechniqueSeriesIndex?: number;
    OverrideTechniqueSeriesAbbrev?: string | null;
    OverrideTechniqueApplicationSeriesStatusID?: number;
    OverrideTechniqueSeriesDesc?: string | null;
    TechniqueTypeID?: number;
    PositionID?: number;
    MuscleGroupID?: number;
    ExerciseClassID?: number;
    CPBID?: number;
    AddedUTC?: Date;
    AddedByUserID?: number;
    LastUpdatedUTC?: Date;
    LastUpdatedByUserID?: number;
    OverridePointValue?: number;
    KeySeries?: boolean;
}

