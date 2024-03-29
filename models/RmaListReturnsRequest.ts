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

import { ListReturnsRequestFilter } from '../models/ListReturnsRequestFilter';
import { RmaListReturnsRequestSort } from '../models/RmaListReturnsRequestSort';
import { HttpFile } from '../http/http';

export class RmaListReturnsRequest {
    'tenantId': string;
    'pageSize'?: number;
    'pageToken'?: string;
    'sorts'?: Array<RmaListReturnsRequestSort>;
    'filterMask'?: string;
    'filter'?: ListReturnsRequestFilter;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
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
            "type": "Array<RmaListReturnsRequestSort>",
            "format": ""
        },
        {
            "name": "filterMask",
            "baseName": "filterMask",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ListReturnsRequestFilter",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RmaListReturnsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

