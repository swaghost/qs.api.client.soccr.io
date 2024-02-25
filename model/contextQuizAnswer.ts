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
import { ContextMediaDetail } from './contextMediaDetail';


export interface ContextQuizAnswer { 
    ContextAnswerID?: number;
    ContextQuestionID?: number;
    AnswerText?: string | null;
    AnswerExplanation?: string | null;
    ReferenceContext?: string | null;
    ReferenceContextKey?: number;
    IsCorrectAnswer?: boolean;
    IsBestAnswer?: boolean;
    AddedByUserID?: number;
    AddedUTC?: Date;
    LastUpdatedByUserID?: number;
    LastUpdateUTC?: Date;
    ContextMediaID?: number;
    Media?: ContextMediaDetail;
}

