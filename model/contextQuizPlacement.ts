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


export interface ContextQuizPlacement { 
    QuizCompletionID?: number;
    QuizCompletionUTC?: Date;
    Context?: string | null;
    ContextKey?: number;
    ContextName?: string | null;
    NameFirst?: string | null;
    NameLast?: string | null;
    City?: string | null;
    State?: string | null;
    EmailAddress?: string | null;
    UserID?: number;
    QuizQuestionPct?: number;
    QuizPointPct?: number;
    QuizResultJSON?: string | null;
    QuizElapsedTimeSeconds?: number;
    QuizQuestionRank?: number;
    QuizPointsRank?: number;
    QuizElapsedTimeSecondsRank?: number;
}

