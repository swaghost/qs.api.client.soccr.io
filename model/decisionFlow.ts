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
import { DecisionCluster } from './decisionCluster';
import { DecisionFlowTransfer } from './decisionFlowTransfer';
import { DecisionEdge } from './decisionEdge';
import { DecisionNode } from './decisionNode';


export interface DecisionFlow { 
    FlowID?: number;
    FlowName?: string | null;
    FlowDesc?: string | null;
    FlowDirection?: string | null;
    FlowStatusID?: number;
    NodeHeightDefault?: string | null;
    NodeWidthDefault?: string | null;
    AddedUTC?: Date;
    AddedByUserID?: number;
    LastUpdatedUTC?: Date;
    LastUpdatedByUserID?: number;
    LayoutEngineID?: number;
    LayoutEngineName?: string | null;
    CssClass?: string | null;
    GraphEngineName?: string | null;
    GraphAttributes?: string | null;
    SharedNodeAttributes?: string | null;
    SharedEdgeAttributes?: string | null;
    SharedClusterAttributes?: string | null;
    SplineStyleID?: number;
    SplineStyleName?: string | null;
    Concentrate?: boolean;
    ColorScheme?: string | null;
    RenderingEngineID?: number;
    RenderingEngineName?: string | null;
    ExportFileNameTemplate?: string | null;
    GraphLanguageArray?: Array<string> | null;
    GraphLanguageString?: string | null;
    Nodes?: Array<DecisionNode> | null;
    Edges?: Array<DecisionEdge> | null;
    Clusters?: Array<DecisionCluster> | null;
    Transfer?: Array<DecisionFlowTransfer> | null;
}

