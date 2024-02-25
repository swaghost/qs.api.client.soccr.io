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
import { PracticePlanTechniqueDetail } from './practicePlanTechniqueDetail';
import { PracticePlanSection } from './practicePlanSection';


export interface PracticePlanDetail { 
    PracticePlanID?: number;
    SportID?: number;
    SportName?: string | null;
    RoleValue?: string | null;
    OneTimeKey?: string | null;
    PracticePlanStatusID?: number;
    PracticePlanStatusName?: string | null;
    AuthorName?: string | null;
    EmailAddress?: string | null;
    SessionName?: string | null;
    SessionNumber?: number;
    SessionGoal?: string | null;
    SessionDueDate?: Date;
    AddedByUserID?: number;
    AddedUTC?: Date;
    EffectiveUTC?: Date;
    CompletedUTC?: Date;
    ScheduledForReleaseUTC?: Date;
    ReleasedUTC?: Date;
    SentUTC?: Date;
    ExpiresUTC?: Date;
    UnderConstruction?: boolean;
    UnderReview?: boolean;
    Released?: boolean;
    Sent?: boolean;
    PracticePlanTypeID?: number;
    PracticePlanTypeName?: string | null;
    PublicPlan?: boolean;
    PrivatePlan?: boolean;
    SitePlan?: boolean;
    CourseWare?: boolean;
    TemplateID?: number;
    TemplateName?: string | null;
    TemplateDesc?: string | null;
    Techniques?: Array<PracticePlanTechniqueDetail> | null;
    Sections?: Array<PracticePlanSection> | null;
}

