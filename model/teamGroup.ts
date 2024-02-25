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
import { TeamGroupMember } from './teamGroupMember';


export interface TeamGroup { 
    TeamGroupID?: number;
    TeamID?: number;
    TeamGroupName?: string | null;
    TeamGroupDesc?: string | null;
    TeamGroupStatusID?: number;
    TeamGroupStatusName?: string | null;
    IsStatic?: boolean;
    Members?: Array<TeamGroupMember> | null;
}
