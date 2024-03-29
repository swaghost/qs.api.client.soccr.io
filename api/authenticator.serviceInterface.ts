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

import { AuthenticationResult } from '../model/models';
import { ChangeAddressRequest } from '../model/models';
import { ChangeEmailAddressRequest } from '../model/models';
import { ChangeEmailAddressTokenRequest } from '../model/models';
import { ChangeEmailAddressTokenResponse } from '../model/models';
import { ChangePasswordRequest } from '../model/models';
import { ChangeUsernameRequest } from '../model/models';
import { ChangeUsernameResponse } from '../model/models';
import { ConfirmEmailResponse } from '../model/models';
import { EmailPayload } from '../model/models';
import { ForgotPasswordRequest } from '../model/models';
import { LoginRequest } from '../model/models';
import { LoginResponse } from '../model/models';
import { LoginWith2FactorFactorAuthenticationViewModel } from '../model/models';
import { LoginWithRecoveryCodeViewModel } from '../model/models';
import { LogoutViaRefreshTokenRequest } from '../model/models';
import { RefreshAccessTokenRequest } from '../model/models';
import { RefreshAccessTokenResponse } from '../model/models';
import { RegisterAccountRequest } from '../model/models';
import { ResetPasswordRequest } from '../model/models';
import { SimpleAuthLoginModel } from '../model/models';
import { UserStateResponse } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface AuthenticatorServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param ChangeEmailAddressRequest 
     */
    changeEmailAddress(ChangeEmailAddressRequest?: ChangeEmailAddressRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param ChangePasswordRequest 
     */
    changePasswordRequest(ChangePasswordRequest?: ChangePasswordRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * User requests a username change to a new one from previous one. User must be logged in.
     * 
     * @param ChangeUsernameRequest 
     */
    changeUsername(ChangeUsernameRequest?: ChangeUsernameRequest, extraHttpRequestParams?: any): Observable<ChangeUsernameResponse>;

    /**
     * 
     * 
     * @param userId 
     * @param code 
     */
    confirmEmail(userId?: string, code?: string, extraHttpRequestParams?: any): Observable<ConfirmEmailResponse>;

    /**
     * 
     * 
     * @param ForgotPasswordRequest 
     */
    forgotPassword(ForgotPasswordRequest?: ForgotPasswordRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param Username 
     */
    getUserState(Username?: string, extraHttpRequestParams?: any): Observable<UserStateResponse>;

    /**
     * 
     * 
     */
    logOut(extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param LogoutViaRefreshTokenRequest 
     */
    logOutWithRefreshToken(LogoutViaRefreshTokenRequest?: LogoutViaRefreshTokenRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param LoginRequest 
     */
    login(LoginRequest?: LoginRequest, extraHttpRequestParams?: any): Observable<LoginResponse>;

    /**
     * 
     * 
     * @param username 
     * @param password 
     * @param RememberMe 
     */
    loginSimple(username?: string, password?: string, RememberMe?: boolean, extraHttpRequestParams?: any): Observable<LoginResponse>;

    /**
     * 
     * 
     * @param SimpleAuthLoginModel 
     */
    loginSimpleAuth(SimpleAuthLoginModel?: SimpleAuthLoginModel, extraHttpRequestParams?: any): Observable<LoginResponse>;

    /**
     * 
     * 
     * @param rememberMe 
     * @param returnUrl 
     * @param LoginWith2FactorFactorAuthenticationViewModel 
     */
    loginWith2FactorAuthentication(rememberMe?: boolean, returnUrl?: string, LoginWith2FactorFactorAuthenticationViewModel?: LoginWith2FactorFactorAuthenticationViewModel, extraHttpRequestParams?: any): Observable<LoginResponse>;

    /**
     * 
     * 
     * @param returnUrl 
     * @param LoginWithRecoveryCodeViewModel 
     */
    loginWithRecoveryCode(returnUrl?: string, LoginWithRecoveryCodeViewModel?: LoginWithRecoveryCodeViewModel, extraHttpRequestParams?: any): Observable<LoginResponse>;

    /**
     * 
     * 
     */
    refreshAccessTokenFakery(extraHttpRequestParams?: any): Observable<RefreshAccessTokenResponse>;

    /**
     * 
     * 
     * @param RegisterAccountRequest 
     */
    register(RegisterAccountRequest?: RegisterAccountRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param ChangeEmailAddressTokenRequest 
     */
    requestEmailAddressChangeToken(ChangeEmailAddressTokenRequest?: ChangeEmailAddressTokenRequest, extraHttpRequestParams?: any): Observable<ChangeEmailAddressTokenResponse>;

    /**
     * 
     * 
     * @param ResetPasswordRequest 
     */
    resetPassword(ResetPasswordRequest?: ResetPasswordRequest, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     * @param EmailPayload 
     */
    sendAutheticationEmail(EmailPayload?: EmailPayload, extraHttpRequestParams?: any): Observable<AuthenticationResult>;

    /**
     * 
     * 
     */
    test(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     */
    test2(extraHttpRequestParams?: any): Observable<LoginResponse>;

    /**
     * 
     * 
     */
    testRefreshTokens(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param RefreshAccessTokenRequest 
     */
    updateAccessTokeViaRefreshToken(RefreshAccessTokenRequest?: RefreshAccessTokenRequest, extraHttpRequestParams?: any): Observable<RefreshAccessTokenResponse>;

    /**
     * 
     * 
     */
    updateAccessToken(extraHttpRequestParams?: any): Observable<UserStateResponse>;

    /**
     * 
     * 
     * @param ChangeAddressRequest 
     */
    updateAddress(ChangeAddressRequest?: ChangeAddressRequest, extraHttpRequestParams?: any): Observable<UserStateResponse>;

}
