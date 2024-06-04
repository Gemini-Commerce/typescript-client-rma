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
 * @interface ListReturnsRequestFilter
 */
export interface ListReturnsRequestFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'searchTerms'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'returnIds'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'returnStatus'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'orderGrns'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'orderNumbers'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'orderItemGrns'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'orderItemSkus'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'customerGrns'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListReturnsRequestFilter
     */
    'customerEmails'?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof ListReturnsRequestFilter
     */
    'createdAtStart'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ListReturnsRequestFilter
     */
    'createdAtEnd'?: Date;
}