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


export interface ReleaseNote { 
    ReleaseNoteID?: number;
    AddedUTC?: Date;
    AddedByUserID?: number;
    ReleaseNotePublic?: string | null;
    ReleaseNotePrivate?: string | null;
    Context?: string | null;
    ContextKey?: number;
    RevisionID?: number;
}

