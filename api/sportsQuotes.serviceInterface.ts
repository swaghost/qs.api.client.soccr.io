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
import { ContextEntry } from '../model/models';
import { ContextRequest } from '../model/models';
import { SportsQuote } from '../model/models';
import { SportsQuoteApplication } from '../model/models';
import { SportsQuoteAutoComplete } from '../model/models';
import { SportsQuoteUpdate } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface SportsQuotesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param QuoteID 
     * @param Context 
     * @param ContextKey 
     */
    quoteApplicationDelete(QuoteID?: number, Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param body 
     */
    quoteApplicationDeleteByKey(body?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param SportsQuoteApplication 
     */
    quoteApplicationInsertUpdate(SportsQuoteApplication?: SportsQuoteApplication, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param QuoteID 
     */
    quoteApplicationSelectAll(QuoteID?: number, extraHttpRequestParams?: any): Observable<Array<ContextEntry>>;

    /**
     * 
     * 
     * @param QuoteID 
     */
    quoteDelete(QuoteID?: number, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param SportsQuoteUpdate 
     */
    quoteInsert(SportsQuoteUpdate?: SportsQuoteUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param SearchText 
     */
    quoteSearch(SearchText?: string, extraHttpRequestParams?: any): Observable<Array<SportsQuote>>;

    /**
     * 
     * 
     * @param SportsQuoteUpdate 
     */
    quoteUpdate(SportsQuoteUpdate?: SportsQuoteUpdate, extraHttpRequestParams?: any): Observable<CommonResult>;

    /**
     * 
     * 
     * @param Context 
     */
    selectContextQuoteEntriesForContext(Context?: string, extraHttpRequestParams?: any): Observable<Array<ContextEntry>>;

    /**
     * 
     * 
     */
    selectQuoteContextTypes(extraHttpRequestParams?: any): Observable<Array<string>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     * @param SearchTerm 
     */
    sportQuoteSearchAllNotInContext(Context?: string, ContextKey?: number, SearchTerm?: string, extraHttpRequestParams?: any): Observable<Array<SportsQuoteAutoComplete>>;

    /**
     * 
     * 
     */
    sportQuoteSelectAll(extraHttpRequestParams?: any): Observable<Array<SportsQuote>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    sportQuoteSelectAllForContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<SportsQuote>>;

    /**
     * 
     * 
     * @param QuoteID 
     */
    sportQuoteSelectItemForDisplay(QuoteID?: number, extraHttpRequestParams?: any): Observable<SportsQuote>;

    /**
     * 
     * 
     * @param QuoteID 
     */
    sportQuoteSelectItemForEdit(QuoteID?: number, extraHttpRequestParams?: any): Observable<SportsQuote>;

    /**
     * 
     * 
     */
    sportQuoteSelectRandom(extraHttpRequestParams?: any): Observable<SportsQuote>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    sportQuoteSelectRandomForContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<SportsQuote>;

    /**
     * 
     * 
     * @param ContextRequest 
     */
    sportQuoteSelectRandomForContextList(ContextRequest?: Array<ContextRequest>, extraHttpRequestParams?: any): Observable<SportsQuote>;

}
