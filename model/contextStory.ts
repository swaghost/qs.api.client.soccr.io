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


export interface ContextStory { 
    ContextStoryID?: number;
    Context?: string | null;
    ContextKey?: number;
    ContextSortOrder?: number;
    StoryTitle?: string | null;
    StorySubtitle?: string | null;
    StoryContent?: string | null;
    LastUpdatedUTC?: Date;
    LastUpdatedByUserID?: number;
}
