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


export interface PracticePlanSection { 
    SectionID?: number;
    SectionName?: string | null;
    SectionDesc?: string | null;
    SportID?: number;
    SharingContextTypeID?: number;
    SharingContextTypeName?: string | null;
    SharingContextKey?: number;
    SharingContextName?: number;
    IsPublic?: boolean;
    IsPrivateForTeam?: boolean;
    IsPrivateForTeamGroup?: boolean;
    IsPrivateForTeamMember?: boolean;
    IsPrivateForUser?: boolean;
    IsPrivateForPracticePlan?: boolean;
}

