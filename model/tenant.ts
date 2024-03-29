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
import { EffectiveTenantIPConfig } from './effectiveTenantIPConfig';
import { EffectiveTenantRole } from './effectiveTenantRole';
import { EffectiveTenantKey } from './effectiveTenantKey';
import { EffectiveTenantDomain } from './effectiveTenantDomain';
import { EffectiveTenantHostname } from './effectiveTenantHostname';
import { EffectiveTenantQueryString } from './effectiveTenantQueryString';
import { EffectiveTenantUser } from './effectiveTenantUser';


export interface Tenant { 
    TenantID?: number;
    TenantName?: string | null;
    TenantDisplayName?: string | null;
    SortOrder?: number;
    AddedUTC?: Date;
    AddedByUserID?: number;
    Users?: Array<EffectiveTenantUser> | null;
    Domains?: Array<EffectiveTenantDomain> | null;
    IPConfig?: Array<EffectiveTenantIPConfig> | null;
    Hostnames?: Array<EffectiveTenantHostname> | null;
    QueryStrings?: Array<EffectiveTenantQueryString> | null;
    Keys?: Array<EffectiveTenantKey> | null;
    Roles?: Array<EffectiveTenantRole> | null;
}

