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
import { ContactAddress } from './contactAddress';
import { ContactMethod } from './contactMethod';


export interface Contact { 
    ContactID?: number;
    NamePrefix?: string | null;
    NameFirst?: string | null;
    NameMiddle?: string | null;
    NameLast?: string | null;
    NameSuffix?: string | null;
    AddedByUserID?: number;
    AddedUTC?: Date;
    LastUpdatedByUserID?: number;
    LastUpdateUTC?: Date;
    TenantID?: number;
    Addresses?: Array<ContactAddress> | null;
    ContactMethods?: Array<ContactMethod> | null;
}

