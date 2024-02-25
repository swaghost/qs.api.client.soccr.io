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


export interface ContributionUpdate { 
    ContributorContext?: string | null;
    ContributorContextKey?: number;
    UserID?: number;
    ContributorContentID?: number;
    ContributorID?: number;
    ContributionTypeID?: number;
    ContributorTypeID?: number;
    ContributorName?: string | null;
    ContributorRole?: string | null;
    ContributorNote?: string | null;
    ContributorQuote?: string | null;
    SortOrderWithinKey?: number;
    PrimaryContributor?: boolean;
}
