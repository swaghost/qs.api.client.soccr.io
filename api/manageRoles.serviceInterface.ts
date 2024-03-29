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

import { AppIdentityRole } from '../model/models';
import { IdentityResult } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ManageRolesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param RoleName 
     * @param RoleDesc 
     * @param AllowsRequest 
     * @param RequiresApproval 
     */
    addRole(RoleName?: string, RoleDesc?: string, AllowsRequest?: boolean, RequiresApproval?: boolean, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param UserName 
     * @param RoleName 
     */
    addRoleToUser(UserName?: string, RoleName?: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param RoleName 
     */
    clearRole(RoleName?: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param RoleName 
     */
    getRole(RoleName?: string, extraHttpRequestParams?: any): Observable<AppIdentityRole>;

    /**
     * 
     * 
     */
    getRoles(extraHttpRequestParams?: any): Observable<Array<AppIdentityRole>>;

    /**
     * 
     * 
     * @param RoleName 
     */
    removeRole(RoleName?: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param UserName 
     * @param RoleName 
     */
    removeRoleFromUser(UserName?: string, RoleName?: string, extraHttpRequestParams?: any): Observable<IdentityResult>;

    /**
     * 
     * 
     * @param sRoleName 
     */
    searchForRolesContaining(sRoleName?: string, extraHttpRequestParams?: any): Observable<Array<AppIdentityRole>>;

    /**
     * 
     * 
     * @param filter 
     */
    searchForRolesStartingWith(filter?: string, extraHttpRequestParams?: any): Observable<Array<AppIdentityRole>>;

}
