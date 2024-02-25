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
import { QuizQuestionState } from './quizQuestionState';
import { ContextQuiz } from './contextQuiz';
import { QuizConstraints } from './quizConstraints';
import { ContextQuizResultGradeDetail } from './contextQuizResultGradeDetail';
import { QuizPointState } from './quizPointState';
import { ContextEntry } from './contextEntry';


export interface ContextQuizSeries { 
    Context?: ContextEntry;
    ContextQuizList?: Array<ContextQuiz> | null;
    CurrentQuizIndex?: number;
    CurrentQuizQuestionIndex?: number;
    Grade?: ContextQuizResultGradeDetail;
    QuestionState?: QuizQuestionState;
    PointState?: QuizPointState;
    Constraints?: QuizConstraints;
    ContextSuccessful?: Array<ContextQuiz> | null;
    ContextUnsuccessful?: Array<ContextQuiz> | null;
}
