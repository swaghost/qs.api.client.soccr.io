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
import { IdentityError } from './identityError';


export interface IdentityResult { 
    readonly Succeeded?: boolean;
    readonly Errors?: Array<IdentityError> | null;
}
