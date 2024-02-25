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


export interface DecisionEdge { 
    EdgeID?: number;
    SrcNodeID?: number;
    TgtNodeID?: number;
    EdgeLabel?: string | null;
    EdgeLabelDesc?: string | null;
    NodeOptionPolarityID?: number;
    LinkTypeID?: number;
    LinkTypeName?: string | null;
    LinkTypeDesc?: string | null;
    LineColorRGB?: string | null;
    LineWidth?: string | null;
    LinePattern?: string | null;
    ForegroundColorRGB?: string | null;
    BackgroundColorRGB?: string | null;
    DrawingColorRGB?: string | null;
    FillStyle?: string | null;
    LineStyleID?: number;
    LineStyleName?: string | null;
    HeadArrowShapeID?: number;
    HeadArrowShapeName?: string | null;
    TailArrowShapeID?: number;
    TailArrowShapeName?: string | null;
    CssClass?: string | null;
    Identifier?: string | null;
    EdgeAttributes?: string | null;
    LHeadElementType?: string | null;
    LHeadElementID?: number;
    LTailElementType?: string | null;
    LTailElementID?: number;
    EdgeDirectionID?: number;
    EdgeDirectionName?: string | null;
    EdgeDecorate?: boolean;
    EdgeConstraint?: boolean;
    EdgeWeight?: number;
    SrcFlowID?: number;
    TgtFlowID?: number;
    CrossFlowError?: boolean;
    NullFlowError?: boolean;
    ColorScheme?: string | null;
    ColorSchemeColor?: string | null;
    CrossoverIndicator?: boolean;
    CrossoverFlowID?: boolean;
}
