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
import { ClientClaim } from './clientClaim';


export interface AppIdentityAccessToken { 
    TokenValue?: string | null;
    TokenType?: string | null;
    ExpirationSeconds?: number;
    ExpirationDate?: Date;
    UserClaims?: Array<ClientClaim> | null;
}

