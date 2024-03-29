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
import { ContextEquipmentAttachmentDetail } from './contextEquipmentAttachmentDetail';


export interface ContextEquipmentEntryForDisplay { 
    CEID?: number;
    CEAID?: string;
    Context?: string | null;
    ContextKey?: number;
    EquipmentName?: string | null;
    EquipmentDesc?: string | null;
    AddedUTC?: Date;
    LastUpdatedUTC?: Date;
    AttachmentAddedUTC?: Date;
    AttachmentLastUpdatedUTC?: Date;
    IsNew?: boolean;
    IsUpdated?: boolean;
    AttachmentCount?: number;
    RecommendationLevelID?: number;
    RecommendationLevelName?: string | null;
    Recommended?: boolean;
    Required?: boolean;
    ValueRatingID?: number;
    ValueRatingName?: string | null;
    ValueRatingAbbrev?: string | null;
    ValueRatingDesc?: string | null;
    PriceRatingID?: number;
    PriceRatingName?: string | null;
    PriceRatingAbbrev?: string | null;
    PriceRatingDesc?: string | null;
    ContextAttachments?: Array<ContextEquipmentAttachmentDetail> | null;
}

