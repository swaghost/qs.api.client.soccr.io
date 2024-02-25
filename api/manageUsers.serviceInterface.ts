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

import { AddPhoneNumberViewModel } from '../model/models';
import { AppIdentityUser } from '../model/models';
import { AuthenticationResult } from '../model/models';
import { ChangePasswordRequest } from '../model/models';
import { SetPasswordViewModel } from '../model/models';
import { VerifyPhoneNumberViewModel } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ManageUsersServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param Username 
     * @param ExpiresInHours 
     */
    activateRemoteAccountCredentialReset(Username?: string, ExpiresInHours?: number, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     * @param AddPhoneNumberViewModel 
     */
    addPhoneNumber(UserName?: string, AddPhoneNumberViewModel?: AddPhoneNumberViewModel, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     * @param ChangePasswordRequest 
     */
    changePassword(UserName?: string, ChangePasswordRequest?: ChangePasswordRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param Username 
     */
    deactivateRemoteAccountCredentialReset(Username?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param email 
     */
    deleteUserByEmail(email?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param username 
     */
    deleteUserByUsername(username?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     */
    disableTwoFactorAuthentication(UserName?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     */
    enableTwoFactorAuthentication(UserName?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param sNameLast 
     * @param sNameFirst 
     * @param ContentMatch 
     * @param CaseMatch 
     */
    findUser(sNameLast?: string, sNameFirst?: string, ContentMatch?: boolean, CaseMatch?: boolean, extraHttpRequestParams?: any): Observable<Array<AppIdentityUser>>;

    /**
     * 
     * 
     * @param UserName 
     */
    getUserByUserNameAync(UserName?: string, extraHttpRequestParams?: any): Observable<AppIdentityUser>;

    /**
     * 
     * 
     */
    getUsers(extraHttpRequestParams?: any): Observable<Array<AppIdentityUser>>;

    /**
     * 
     * 
     * @param SearchKey 
     */
    getUsersByEmailAsync(SearchKey?: string, extraHttpRequestParams?: any): Observable<AppIdentityUser>;

    /**
     * 
     * 
     * @param SearchKey 
     */
    getUsersByUserIDAsync(SearchKey?: string, extraHttpRequestParams?: any): Observable<AppIdentityUser>;

    /**
     * 
     * 
     * @param SearchKey 
     */
    getUsersByUserNameAsync(SearchKey?: string, extraHttpRequestParams?: any): Observable<AppIdentityUser>;

    /**
     * 
     * 
     * @param Filter 
     */
    getUsersFiltered(Filter?: string, extraHttpRequestParams?: any): Observable<Array<AppIdentityUser>>;

    /**
     * 
     * 
     * @param PageSize 
     * @param PageIndex 
     */
    getUsersPaged(PageSize?: number, PageIndex?: number, extraHttpRequestParams?: any): Observable<Array<AppIdentityUser>>;

    /**
     * 
     * 
     * @param ItemsPerPage 
     * @param PageIndex 
     * @param Filter 
     */
    getUsersPagedFiltered(ItemsPerPage?: number, PageIndex?: number, Filter?: string, extraHttpRequestParams?: any): Observable<Array<AppIdentityUser>>;

    /**
     * 
     * 
     * @param UserName 
     */
    removePhoneNumber(UserName?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     * @param phoneNumber 
     */
    sendPhoneNumberVerification(UserName?: string, phoneNumber?: string, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     * @param SetPasswordViewModel 
     */
    setPassword(UserName?: string, SetPasswordViewModel?: SetPasswordViewModel, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param AppIdentityUser 
     */
    updateAccount(AppIdentityUser?: AppIdentityUser, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param UserName 
     * @param VerifyPhoneNumberViewModel 
     */
    verifyPhoneNumber(UserName?: string, VerifyPhoneNumberViewModel?: VerifyPhoneNumberViewModel, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

}
