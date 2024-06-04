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
 * @interface RmaListNotesByReturnIdRequest
 */
export interface RmaListNotesByReturnIdRequest {
    /**
     * 
     * @type {string}
     * @memberof RmaListNotesByReturnIdRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {string}
     * @memberof RmaListNotesByReturnIdRequest
     */
    'returnId': string;
    /**
     * 
     * @type {number}
     * @memberof RmaListNotesByReturnIdRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof RmaListNotesByReturnIdRequest
     */
    'pageToken'?: string;
    /**
     * 
     * @type {Array<RmaListNotesByReturnIdRequestSort>}
     * @memberof RmaListNotesByReturnIdRequest
     */
    'sorts'?: Array<RmaListNotesByReturnIdRequestSort>;
}
