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


export interface TechniqueNote { 
    TechniqueNoteID?: number;
    TechniqueID?: number;
    TechniqueNoteSubject?: string | null;
    TechniqueNoteMsg?: string | null;
    IsTask?: boolean;
    IsComplete?: boolean;
    AddedUTC?: Date;
    AddedByUserID?: number;
    AddedByUserNameProper?: number;
    LastUpdatedUTC?: Date;
    LastUpdatedByUserID?: number;
    LastUpdatedByUserNameProper?: number;
}

