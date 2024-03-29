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
import { Resource } from './resource';
import { Tag } from './tag';


export interface TaskHierarchy { 
    TaskContext?: string | null;
    TaskID?: number;
    RevisionYear?: number;
    RevisionNumber?: number;
    UserID?: number;
    AddedUTC?: Date;
    UpdatedUTC?: Date;
    TaskName?: string | null;
    TaskIssue?: string | null;
    TaskDesc?: string | null;
    TaskCompletionCriteria?: string | null;
    StatusID?: number;
    StatusName?: string | null;
    DecisionTypeID?: number;
    DecisionTypeName?: string | null;
    ExtraCareRequired?: boolean;
    StageID?: number;
    StageName?: string | null;
    ScopeID?: number;
    ScopeName?: string | null;
    DepthID?: number;
    DepthName?: string | null;
    FocusLevelID?: number;
    FocusLevelName?: string | null;
    ImpactID?: number;
    ImpactName?: string | null;
    ImprovementID?: number;
    ImprovementName?: string | null;
    PriorityID?: number;
    PriorityName?: string | null;
    InvestmentID?: number;
    InvestmentName?: string | null;
    DifficultyID?: number;
    DifficultyName?: string | null;
    UnknownsComponentID?: number;
    UnknownsComponentName?: string | null;
    IntegrationRequirementID?: number;
    IntegrationRequirementName?: string | null;
    HierarchyLevel?: number;
    HierarchyPosition?: string | null;
    HierarchyString?: string | null;
    ParentTaskContext?: string | null;
    ParentTaskID?: number;
    EffectiveUTC?: Date;
    ExpirationUTC?: Date;
    Children?: Array<TaskHierarchy> | null;
    Tags?: Array<Tag> | null;
    Resources?: Array<Resource> | null;
}

