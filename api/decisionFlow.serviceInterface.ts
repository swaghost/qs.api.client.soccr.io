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

import { DecisionCluster } from '../model/models';
import { DecisionFlow } from '../model/models';
import { DecisionFlowStatus } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface DecisionFlowServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Provides a Decision Flow with all the node data. A simple select of the data. No post-select processing.
     * 
     * @param FlowID 
     * @param AutoGenerateClusters 
     * @param debug 
     */
    getDecisionFlow(FlowID?: number, AutoGenerateClusters?: boolean, debug?: boolean, extraHttpRequestParams?: any): Observable<DecisionFlow>;

    /**
     * Provides a Decision Flow with all the nodes starting at the supplied node Id on down. A simple select of the data. No post-select processing.
     * 
     * @param FlowID 
     * @param NodeID 
     * @param AutoGenerateClusters 
     * @param debug 
     */
    getDecisionFlowAtNode(FlowID?: number, NodeID?: number, AutoGenerateClusters?: boolean, debug?: boolean, extraHttpRequestParams?: any): Observable<DecisionFlow>;

    /**
     * Provides a Decision Flow with all the nodes starting at the supplied node Id on down, with the DOT Graph.
     * 
     * @param FlowID 
     * @param NodeID 
     * @param Debug 
     */
    getDecisionFlowAtNodeWithDotGraph(FlowID?: number, NodeID?: number, Debug?: boolean, extraHttpRequestParams?: any): Observable<DecisionFlow>;

    /**
     * Gets all the pretermined clusters for a flow.
     * 
     * @param FlowID 
     */
    getDecisionFlowClusters(FlowID?: number, extraHttpRequestParams?: any): Observable<Array<DecisionCluster>>;

    /**
     * Gets all the clusters for a flow. Can auto-generate clusters if necessary.
     * 
     * @param FlowID 
     * @param AutoGenerate 
     */
    getDecisionFlowClustersAutoGenerate(FlowID?: number, AutoGenerate?: boolean, extraHttpRequestParams?: any): Observable<Array<DecisionCluster>>;

    /**
     * 
     * 
     * @param Context 
     * @param ContextKey 
     */
    getDecisionFlowContextClusters(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<DecisionCluster>>;

    /**
     * Gets a list of decision nodes which can be applied to the context.
     * 
     * @param Context 
     * @param ContextKey 
     */
    getDecisionFlowForContext(Context?: string, ContextKey?: number, extraHttpRequestParams?: any): Observable<Array<DecisionFlow>>;

    /**
     * Returs a list of all possible Decision Flow status values.
     * 
     */
    getDecisionFlowStatusList(extraHttpRequestParams?: any): Observable<Array<DecisionFlowStatus>>;

    /**
     * Provides a Decision Flow with all the nodes and with the DOT Graph.
     * 
     * @param FlowID 
     * @param AutoGenerateClusters 
     * @param Debug 
     */
    getDecisionFlowWithDotGraph(FlowID?: number, AutoGenerateClusters?: boolean, Debug?: boolean, extraHttpRequestParams?: any): Observable<DecisionFlow>;

    /**
     * Gets all the decision flows available.
     * 
     */
    getDecisionFlows(extraHttpRequestParams?: any): Observable<Array<DecisionFlow>>;

}