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
import { ApplicationChildForCurriculum } from './applicationChildForCurriculum';


export interface ApplicationParentForCurriculum { 
    TechniqueTypeID?: number;
    TechniqueTypeName?: string | null;
    PositionID?: number;
    PositionName?: string | null;
    TechniqueClassID?: number;
    TechniqueClassName?: string | null;
    SportID?: number;
    SportName?: string | null;
    Children?: Array<ApplicationChildForCurriculum> | null;
}
