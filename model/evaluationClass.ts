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
import { EvaluationWorksheetDetail } from './evaluationWorksheetDetail';


export interface EvaluationClass { 
    SportID?: number;
    EvaluationClassID?: number;
    EvaluationClassName?: string | null;
    EvaluationClassDesc?: string | null;
    SortOrder?: number;
    DisplayColumn?: number;
    DisplayRow?: number;
    Detail?: Array<EvaluationWorksheetDetail> | null;
}
