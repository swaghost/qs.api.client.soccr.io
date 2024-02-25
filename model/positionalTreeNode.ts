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


export interface PositionalTreeNode { 
    DisplayOrder?: number;
    Context?: string | null;
    ContextKey?: number;
    ParentContext?: string | null;
    ParentContextKey?: number;
    ItemName?: string | null;
    ItemDesc?: string | null;
    ItemLevel?: number;
    SortOrderWithinLevel?: number;
    HasChildren?: boolean;
    IsExpanded?: boolean;
    Children?: Array<PositionalTreeNode> | null;
}
