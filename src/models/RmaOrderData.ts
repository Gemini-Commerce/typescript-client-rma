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
 * @interface RmaOrderData
 */
export interface RmaOrderData {
    /**
     * 
     * @type {Date}
     * @memberof RmaOrderData
     */
    'createdAt'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RmaOrderData
     */
    'updatedAt'?: Date;
    /**
     * 
     * @type {string}
     * @memberof RmaOrderData
     */
    'grn'?: string;
    /**
     * 
     * @type {string}
     * @memberof RmaOrderData
     */
    'number'?: string;
    /**
     * 
     * @type {string}
     * @memberof RmaOrderData
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof RmaOrderData
     */
    'channel'?: string;
    /**
     * 
     * @type {string}
     * @memberof RmaOrderData
     */
    'market'?: string;
    /**
     * 
     * @type {Array<RmaOrderDataItem>}
     * @memberof RmaOrderData
     */
    'items'?: Array<RmaOrderDataItem>;
    /**
     * 
     * @type {RmaCurrency}
     * @memberof RmaOrderData
     */
    'currency'?: RmaCurrency;
    /**
     * 
     * @type {{ [key: string]: OrderDataSubtotal; }}
     * @memberof RmaOrderData
     */
    'subtotals'?: { [key: string]: OrderDataSubtotal; };
    /**
     * 
     * @type {{ [key: string]: OrderDataTotal; }}
     * @memberof RmaOrderData
     */
    'totals'?: { [key: string]: OrderDataTotal; };
}
