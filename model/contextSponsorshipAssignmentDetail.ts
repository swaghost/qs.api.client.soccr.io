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


export interface ContextSponsorshipAssignmentDetail { 
    PartnerID?: number;
    PartnerCandidateStatusActionUTC?: Date;
    PartnerCandidateStatusActionReviewNotes?: string | null;
    PartnerCandidateStatusActionResponseText?: string | null;
    OrganizationName?: string | null;
    Address1?: string | null;
    Address2?: string | null;
    City?: string | null;
    State?: string | null;
    ZipCode?: string | null;
    EmailAddress?: string | null;
    PhoneNumber?: string | null;
    WebSite1Name?: string | null;
    WebSite1URL?: string | null;
    WebSite2Name?: string | null;
    WebSite2URL?: string | null;
    WebSite3Name?: string | null;
    WebSite3URL?: string | null;
    WebSite4Name?: string | null;
    WebSite4URL?: string | null;
    Specialty?: string | null;
    SortOrder?: number;
    PartnerPrivacyEnabled?: boolean;
    PartnerCandidateStatusID?: number;
    PartnerCandidateStatusName?: string | null;
    ReviewInProcess?: boolean;
    ReviewedComplete?: boolean;
    PartnerApproved?: boolean;
    PartnerDenied?: boolean;
    PartnerActive?: boolean;
    PartnerLevelID?: number;
    PartnerLevelName?: string | null;
    PartnerTierID?: number;
    PartnerTierName?: string | null;
    SubscriptionID?: number;
    AgreementDate?: Date;
    AgreementSigner?: string | null;
    SubscriptionTerms?: string | null;
    SubscriptionValue?: number;
    EffectiveDate?: Date;
    ExpirationDate?: Date;
    AddedOnUTC?: Date;
    AddedByUserID?: number;
    LastUpdatedByUserID?: number;
    LastUpdatedUTC?: Date;
    ExpirationNotes?: string | null;
    EffectiveStatusID?: number;
    SubscriptionStatusName?: string | null;
    Signed?: boolean;
    Active?: boolean;
    Hold?: boolean;
    Expired?: boolean;
    IsDateSensitive?: boolean;
    ContextSponsorshipID?: number;
    Context?: string | null;
    ContextKey?: number;
    ContextMediaID?: number;
    LinkTargetIndex?: number;
    SubscriptionPointValue?: number;
}

