/* tslint:disable */
/* eslint-disable */
/**
 * RMA Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const RmaListReturnsRequestSortSortField = {
    Unknown: 'UNKNOWN',
    Date: 'DATE'
} as const;
export type RmaListReturnsRequestSortSortField = typeof RmaListReturnsRequestSortSortField[keyof typeof RmaListReturnsRequestSortSortField];


export function RmaListReturnsRequestSortSortFieldFromJSON(json: any): RmaListReturnsRequestSortSortField {
    return RmaListReturnsRequestSortSortFieldFromJSONTyped(json, false);
}

export function RmaListReturnsRequestSortSortFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): RmaListReturnsRequestSortSortField {
    return json as RmaListReturnsRequestSortSortField;
}

export function RmaListReturnsRequestSortSortFieldToJSON(value?: RmaListReturnsRequestSortSortField | null): any {
    return value as any;
}

