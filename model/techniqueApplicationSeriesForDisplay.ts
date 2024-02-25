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


export interface TechniqueApplicationSeriesForDisplay { 
    TSID?: number;
    TechniqueSeriesName?: string | null;
    TechniqueSeriesSubtitle?: string | null;
    TechniqueSeriesAbbrev?: string | null;
    TechniqueSeriesDesc?: string | null;
    TechniqueSeriesIndex?: number;
    TechniqueApplicationSeriesStatusID?: number;
    TechniqueApplicationSeriesStatusName?: string | null;
    IsPublicReady?: boolean;
    IsPublic?: boolean;
    IsTechniqueApplicationSeriesActiveDevelopmentWIP?: boolean;
    UsageCount?: number;
    HasQuiz?: boolean;
    AddedByUserID?: number;
    LastUpdatedByUserID?: number;
    VirtualLinkCount?: number;
    KeySeries?: boolean;
}

