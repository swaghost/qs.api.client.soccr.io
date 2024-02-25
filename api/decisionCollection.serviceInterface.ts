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

import { Collection } from '../model/models';
import { CollectionIssue } from '../model/models';
import { CollectionMember } from '../model/models';
import { CollectionMemberIssue } from '../model/models';
import { CollectionStatus } from '../model/models';
import { CollectionVisibility } from '../model/models';
import { CommonResult } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface DecisionCollectionServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param Collection 
     */
    collectionInsert(Collection?: Collection, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionMember 
     */
    collectionMemberInsert(CollectionMember?: CollectionMember, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Collection 
     */
    collectionUpdate(Collection?: Collection, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    deleteCollection(CollectionID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionIssueID 
     */
    deleteCollectionIssue(CollectionIssueID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    deleteCollectionIssuesForCollection(CollectionID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionMemberID 
     */
    deleteCollectionMember(CollectionMemberID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionMemberIssueID 
     */
    deleteCollectionMemberIssue(CollectionMemberIssueID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionMember 
     */
    deleteCollectionMemberIssuesForMember(CollectionMember?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    deleteCollectionMembersForCollection(CollectionID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    getCollection(CollectionID?: number, extraHttpRequestParams?: any): Observable<Collection>;

    /**
     * 
     * 
     * @param CollectionIssueID 
     */
    getCollectionIssue(CollectionIssueID?: number, extraHttpRequestParams?: any): Observable<CollectionIssue>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    getCollectionIssues(CollectionID?: number, extraHttpRequestParams?: any): Observable<Array<CollectionIssue>>;

    /**
     * 
     * 
     * @param CollectionMemberID 
     */
    getCollectionMember(CollectionMemberID?: number, extraHttpRequestParams?: any): Observable<CollectionMember>;

    /**
     * 
     * 
     * @param CollectionMemberIssueID 
     */
    getCollectionMemberIssue(CollectionMemberIssueID?: number, extraHttpRequestParams?: any): Observable<CollectionMemberIssue>;

    /**
     * 
     * 
     * @param CollectionMemberID 
     */
    getCollectionMemberIssues(CollectionMemberID?: number, extraHttpRequestParams?: any): Observable<Array<CollectionMemberIssue>>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    getCollectionMembersForCollection(CollectionID?: number, extraHttpRequestParams?: any): Observable<Array<CollectionMember>>;

    /**
     * 
     * 
     */
    getCollectionStatusList(extraHttpRequestParams?: any): Observable<Array<CollectionStatus>>;

    /**
     * 
     * 
     */
    getCollectionVisibilityList(extraHttpRequestParams?: any): Observable<Array<CollectionVisibility>>;

    /**
     * 
     * 
     */
    getCollections(extraHttpRequestParams?: any): Observable<Array<Collection>>;

    /**
     * 
     * 
     * @param CollectionID 
     */
    insertCollectionIssue(CollectionID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionMemberID 
     */
    insertCollectionMemberIssue(CollectionMemberID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param CollectionMember 
     */
    updateCollectionMember(CollectionMember?: CollectionMember, extraHttpRequestParams?: any): Observable<CommonResult>;

}