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


export interface Achievement { 
    AchievementID?: number;
    AchievementLevel?: number;
    AchievementName?: string | null;
    AchievementAbbrev?: string | null;
    AchievementDesc?: string | null;
    CompetenceID?: number;
    UseForAchievementCriteria?: boolean;
    ForApplicationPhysical?: boolean;
    ForApplicationMental?: boolean;
    ForApplicationStrategic?: boolean;
    ForApplicationTactical?: boolean;
    ForApplicationHabitual?: boolean;
    ForApplicationEmotional?: boolean;
}
