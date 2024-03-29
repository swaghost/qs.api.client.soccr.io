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
import { RoutingDetail } from './routingDetail';


export interface RoutingMenuSection { 
    RoutingModuleMenuSectionID?: number;
    RoutingModuleMenuID?: number;
    RoutingModuleMenuName?: string | null;
    RoutingModuleID?: number;
    RoutingModuleName?: string | null;
    RoutingModuleMenuSectionName?: string | null;
    RoutingModuleMenuSectionTitle?: string | null;
    RoutingModuleMenuSectionDesc?: string | null;
    ModuleIsActive?: boolean;
    MenuIsActive?: boolean;
    SectionIsActive?: boolean;
    SectionRoutes?: Array<RoutingDetail> | null;
}

