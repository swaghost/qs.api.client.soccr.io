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


export interface ContextMediaUpdateRequest { 
    ContextMediaID?: number;
    Context?: string | null;
    ContextKey?: number;
    MediaTypeID?: number;
    MediaStatusID?: number;
    MediaLocationID?: number;
    Resolution?: string | null;
    TacticalUsage?: string | null;
    MediaUsageTypeID?: number;
    Title?: string | null;
    Caption?: string | null;
    Attribution?: string | null;
    AttributionURL?: string | null;
    FileNameOriginal?: string | null;
    AllowAudio?: boolean;
    AutoPlay?: boolean;
    AllowFullscreenExpansion?: boolean;
    FileName?: string | null;
    FileSizeKB?: number;
    IsDefault?: boolean;
    OptimizationRequired?: boolean;
    SortOrder?: number;
    RemotelyHosted?: boolean;
    RemotelyURL?: string | null;
}
