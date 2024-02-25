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


export interface PracticePlanApplication { 
    PPTID?: number;
    PracticePlanID?: number;
    TechniqueTypeID?: number;
    PositionID?: number;
    TechniqueID?: number;
    SortOrder?: number;
    DurationValue?: number;
    DurationUOM?: string | null;
    RepetitionValue?: number;
    RepetitionUOM?: string | null;
    FrequencyValue?: number;
    FrequencyUOM?: string | null;
    SectionID?: number;
    SectionName?: string | null;
    SectionDesc?: string | null;
    SharingContextTypeID?: number;
    SharingContextTypeName?: string | null;
    SharingContextKey?: number;
    IsPublic?: boolean;
    IsPrivateForTeam?: boolean;
    IsPrivateForTeamGroup?: boolean;
    IsPrivateForTeamMember?: boolean;
    IsPrivateForUser?: boolean;
    IsPrivateForPracticePlan?: boolean;
}
