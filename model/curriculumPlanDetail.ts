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


export interface CurriculumPlanDetail { 
    CurriculumPlanID?: number;
    CurriculumPartID?: number;
    CurriculumID?: number;
    CurriculumPlanName?: string | null;
    CurriculumPlanPurpose?: string | null;
    CurriculumPlanStatusID?: number;
    CurriculumPlanStatusName?: string | null;
    PracticePlanID?: number;
    WeekNumber?: number;
    DayNumber?: number;
    InstanceNumber?: number;
    RepeatNumber?: number;
    OverallInstance?: number;
}

