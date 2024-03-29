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


export interface TeamGroupTechniqueProgressDetail { 
    TeamID?: number;
    TeamGroupID?: number;
    TeamMemberID?: number;
    NameFirst?: string | null;
    NameLast?: string | null;
    TechniqueID?: number;
    TechniqueName?: string | null;
    PracticeStarted?: Date;
    PracticeCompleted?: Date;
    SessionCount?: number;
    PracticeMinutes?: number;
    AchievementID?: number;
    AchievementLevel?: string | null;
    AchievementName?: string | null;
    AchievementAbbrev?: string | null;
    AchievementDesc?: string | null;
    CompetenceID?: number;
    CompetenceLevel?: number;
    CompetenceName?: string | null;
    CompetenceAbbrev?: string | null;
    UseForAchievementCriteria?: boolean;
    ForApplicationPhysical?: boolean;
    ForApplicationMental?: boolean;
    ForApplicationStrategic?: boolean;
    ForApplicationTactical?: boolean;
    ForApplicationHabitual?: boolean;
    ForApplicationEmotional?: boolean;
    ForUpdate?: boolean;
}

