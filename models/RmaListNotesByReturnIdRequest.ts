/**
 * RMA Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RmaListNotesByReturnIdRequestSort } from '../models/RmaListNotesByReturnIdRequestSort';
import { HttpFile } from '../http/http';

export class RmaListNotesByReturnIdRequest {
    'tenantId': string;
    'returnId': string;
    'pageSize'?: number;
    'pageToken'?: string;
    'sorts'?: Array<RmaListNotesByReturnIdRequestSort>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnId",
            "baseName": "returnId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pageToken",
            "baseName": "pageToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "sorts",
            "baseName": "sorts",
            "type": "Array<RmaListNotesByReturnIdRequestSort>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RmaListNotesByReturnIdRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

