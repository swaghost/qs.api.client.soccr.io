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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CommonResult } from '../model/models';
import { ContextMediaDetail } from '../model/models';
import { ContextMediaUpdateRequest } from '../model/models';
import { FileUploadFileResult } from '../model/models';
import { FileUploadPayload } from '../model/models';
import { FileUploadResult } from '../model/models';
import { FileUploadVerification } from '../model/models';
import { MediaLocation } from '../model/models';
import { MediaStatus } from '../model/models';
import { MediaType } from '../model/models';
import { MediaUsageType } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ContextMediaServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    contextMediaDeleteContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param MediaID 
     */
    contextMediaDeleteItem(MediaID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param body 
     */
    contextMediaExclude(body?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param body 
     */
    contextMediaInclude(body?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextMediaUpdateRequest 
     */
    contextMediaInsert(ContextMediaUpdateRequest?: ContextMediaUpdateRequest, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param MediaID 
     * @param Direction 
     */
    contextMediaMoveUpDown(MediaID?: number, Direction?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param body 
     */
    contextMediaRemoveFile(body?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextMediaDetail 
     */
    contextMediaReplaceFile(ContextMediaDetail?: ContextMediaDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    contextMediaSelectForDisplay(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextMediaDetail>>;

    /**
     * 
     * 
     * @param MediaID 
     */
    contextMediaSelectItemForEdit(MediaID?: number, extraHttpRequestParams?: any): Observable<ContextMediaDetail>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param MediaIndex 
     */
    contextMediaSelectItemIndex(Context?: string, ContextKey?: number, MediaIndex?: number, extraHttpRequestParams?: any): Observable<Array<ContextMediaDetail>>;

    /**
     * 
     * 
     * @param FileName 
     * @param LegacyFileName 
     * @param LegacyFileID 
     * @param LegacyMediaIndex 
     
     * @deprecated
     */
    contextMediaSelectLegacy(FileName?: string, LegacyFileName?: string, LegacyFileID?: number, LegacyMediaIndex?: number, extraHttpRequestParams?: any): Observable<ContextMediaDetail>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    contextMediaSelectList(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<ContextMediaDetail>>;

    /**
     * 
     * 
     * @param ContextMediaUpdateRequest 
     */
    contextMediaUpdate(ContextMediaUpdateRequest?: ContextMediaUpdateRequest, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextMediaDetail 
     */
    contextMediaUpdateLocation(ContextMediaDetail?: ContextMediaDetail, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param FileUploadPayload 
     */
    contextMediaUpload(FileUploadPayload?: FileUploadPayload, extraHttpRequestParams?: any): Observable<FileUploadResult>;

    /**
     * 
     * 
     */
    createCoverBlurAll(extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextMediaID 
     */
    createCoverBlurItem(ContextMediaID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param ContextMediaID 
     * @param FileName 
     */
    deleteFilePath(Context?: string, ContextKey?: number, ContextMediaID?: number, FileName?: string, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    deleteFilesInContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     */
    mediaLocationsList(extraHttpRequestParams?: any): Observable<Array<MediaLocation>>;

    /**
     * 
     * 
     */
    mediaStatusList(extraHttpRequestParams?: any): Observable<Array<MediaStatus>>;

    /**
     * 
     * 
     */
    mediaTypes(extraHttpRequestParams?: any): Observable<Array<MediaType>>;

    /**
     * 
     * 
     */
    mediaUsageTypes(extraHttpRequestParams?: any): Observable<Array<MediaUsageType>>;

    /**
     * Moves items from JSON to object format.
     * 
     * @param Context 
     * @param ContextKey 
     * @param MediaID 
     * @param FileName 
     
     * @deprecated
     */
    migrate(Context?: string, ContextKey?: number, MediaID?: number, FileName?: string, extraHttpRequestParams?: any): Observable<FileUploadFileResult>;

    /**
     * 
     * 
     * @param Extension 
     */
    replaceExtensionFiles(Extension?: string, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     */
    updateFileDimensionsAll(extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    updateFileDimensionsContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextMediaID 
     */
    updateFileDimensionsItem(ContextMediaID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    updateFileSizesAll(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param ContextMediaID 
     */
    updateFileSizesItem(ContextMediaID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param ContextMediaID 
     * @param FileName 
     */
    verifyFilePath(Context?: string, ContextKey?: number, ContextMediaID?: number, FileName?: string, extraHttpRequestParams?: any): Observable<FileUploadVerification>;

}
