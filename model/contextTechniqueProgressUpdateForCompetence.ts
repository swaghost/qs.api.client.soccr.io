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


export interface ContextTechniqueProgressUpdateForCompetence { 
    ContextTechniqueProgressID?: number;
    Context?: string | null;
    ContextKey?: number;
    TechniqueID?: number;
    PracticeDate?: Date;
    CompetenceID?: number;
    AddedUTC?: Date;
    PracticeMinutes?: number;
    AppendOrOverwrite?: boolean;
}

