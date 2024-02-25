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


export interface GamePlanner { 
    GamePlannerID?: number;
    TeamID?: number;
    GameDate?: Date;
    GameTime?: string | null;
    Versus?: string | null;
    Location?: string | null;
    GameNotes?: string | null;
    SurfaceTypeID?: number;
    SurfaceTypeName?: string | null;
    SortOrder?: number;
    RecommendedFootware?: string | null;
    RecommendedClothing?: string | null;
    FormationID?: number;
    FormationName?: string | null;
    FormationDesc?: string | null;
    FormationClass?: string | null;
    FormationCoreRequirements?: string | null;
    FormationStrengths?: string | null;
    FormationWeakness?: string | null;
    PlayerCountDefenderSweeper?: number;
    PlayerCountDefenderInterior?: number;
    PlayerCountDefenderWing?: number;
    PlayerCountMidfielderInterior?: number;
    PlayerCountMidfielderWing?: number;
    PlayerCountForwardWing?: number;
    PlayerCountForwardInterior?: number;
    PlayerCountForwardStriker?: number;
}

