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


export interface TeamGroupMemberTreeNode { 
    TeamID?: number;
    TeamGroupID?: number;
    TeamMemberID?: number;
    TeamGroupMemberID?: number;
    RosterOptionDesc?: string | null;
    TeamRolesDisplay?: string | null;
    Level?: number;
    IsParent?: boolean;
    IsActive?: boolean;
    IsExpanded?: boolean;
    Children?: Array<TeamGroupMemberTreeNode> | null;
}

