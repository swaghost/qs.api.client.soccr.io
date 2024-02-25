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
import { ContextQuizResult } from './contextQuizResult';


export interface ContextQuizCompletion { 
    QuizCompletionID?: number;
    QuizCompletionUTC?: Date;
    Context?: string | null;
    ContextKey1?: number;
    ContextKey2?: number;
    NameFirst?: string | null;
    NameLast?: string | null;
    City?: string | null;
    State?: string | null;
    EmailAddress?: string | null;
    UserID?: number;
    QuestionCountAvailable?: number;
    QuestionCountAttempted?: number;
    QuestionCountSkipped?: number;
    QuestionCountRemaining?: number;
    QuestionCountCorrect?: number;
    QuestionCountIncorrect?: number;
    QuestionCorrectAnswerAccuracyPct?: number;
    QuestionCorrectAnswerCompletenessPct?: number;
    PointsAvailable?: number;
    PointsAttempted?: number;
    PointsAwarded?: number;
    PointsMissed?: number;
    PointsSkipped?: number;
    PointsUnawarded?: number;
    PointPctAccuracy?: number;
    PointPctCompleteness?: number;
    QuizResultJSON?: string | null;
    ElapsedTimeSeconds?: number;
    SkipsAllowedCeiling?: number;
    SkipsRemaining?: number;
    FailurePctFloor?: number;
    RetakePctFloor?: number;
    QuizResultGradeID?: number;
    QuizResultGradeName?: string | null;
    PctRangeBeg?: number;
    PctRangeEnd?: number;
    Fail?: boolean;
    Pass?: boolean;
    Notify?: boolean;
    Results?: Array<ContextQuizResult> | null;
}

