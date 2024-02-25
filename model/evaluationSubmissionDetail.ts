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


export interface EvaluationSubmissionDetail { 
    EvaluationSubmissionID?: number;
    EvaluationDetailID?: number;
    EvaluationTypeID?: number;
    PlayerRating?: number;
    PlayerComments?: string | null;
    CoachRating?: number;
    CoachComments?: string | null;
    MentorRating?: number;
    MentorComments?: string | null;
    AvgRating?: number;
    ImprovementPlan?: string | null;
}
