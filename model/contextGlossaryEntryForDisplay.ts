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
import { ContextGlossaryAttachmentDetail } from './contextGlossaryAttachmentDetail';


export interface ContextGlossaryEntryForDisplay { 
    CGID?: number;
    CGAID?: string;
    Context?: string | null;
    ContextKey?: number;
    Term?: string | null;
    Synonyms?: string | null;
    Definition?: string | null;
    AddedUTC?: Date;
    LastUpdatedUTC?: Date;
    AttachmentAddedUTC?: Date;
    AttachmentLastUpdatedUTC?: Date;
    IsNew?: boolean;
    IsUpdated?: boolean;
    AttachmentCount?: number;
    ContextAttachments?: Array<ContextGlossaryAttachmentDetail> | null;
}

