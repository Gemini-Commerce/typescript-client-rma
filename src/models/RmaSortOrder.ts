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
export const RmaSortOrder = {
    Desc: 'DESC',
    Asc: 'ASC'
} as const;
export type RmaSortOrder = typeof RmaSortOrder[keyof typeof RmaSortOrder];


export function RmaSortOrderFromJSON(json: any): RmaSortOrder {
    return RmaSortOrderFromJSONTyped(json, false);
}

export function RmaSortOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): RmaSortOrder {
    return json as RmaSortOrder;
}

export function RmaSortOrderToJSON(value?: RmaSortOrder | null): any {
    return value as any;
}

