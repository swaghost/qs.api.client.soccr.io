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
import { PracticePlanApplicationTreeTechniqueType } from './practicePlanApplicationTreeTechniqueType';


export interface PracticePlanApplicationTreeTechniqueClass { 
    TechniqueClassID?: number;
    TechniqueClassName?: string | null;
    SportID?: number;
    SportName?: string | null;
    TechniqueTypes?: Array<PracticePlanApplicationTreeTechniqueType> | null;
}

