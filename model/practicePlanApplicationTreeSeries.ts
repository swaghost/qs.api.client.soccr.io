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
import { PracticePlanApplicationTreeTechnique } from './practicePlanApplicationTreeTechnique';


export interface PracticePlanApplicationTreeSeries { 
    PracticePlanID?: number;
    TSID?: number;
    TechniqueSeriesName?: string | null;
    TechniqueSeriesSubtitle?: string | null;
    TechniqueSeriesAbbrev?: string | null;
    TechniqueSeriesDesc?: string | null;
    TechniqueSeriesIndex?: number;
    SportID?: number;
    SportName?: string | null;
    TechniqueClassID?: number;
    TechniqueClassName?: string | null;
    TechniqueTypeID?: number;
    TechniqueTypeName?: string | null;
    PositionID?: number;
    PositionName?: string | null;
    TechniqueApplicationSeriesStatusID?: number;
    TechniqueApplicationSeriesStatusName?: string | null;
    IsPublicReady?: boolean;
    IsPublic?: boolean;
    IsTechniqueApplicationSeriesActiveDevelopmentWIP?: boolean;
    UsageCount?: number;
    HasQuiz?: boolean;
    TSVLID?: number;
    IsVirtualLink?: boolean;
    MuscleGroupID?: number;
    MuscleGroupName?: string | null;
    ExerciseClassID?: number;
    ExerciseClassName?: string | null;
    IsBodyDevelopment?: boolean;
    IsMindDevelopment?: boolean;
    IsPositionBased?: boolean;
    OrientationPlayerDevelopment?: boolean;
    OrientationNonPlayerDevelopment?: boolean;
    Techniques?: Array<PracticePlanApplicationTreeTechnique> | null;
}
