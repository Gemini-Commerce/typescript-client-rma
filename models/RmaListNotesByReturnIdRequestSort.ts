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

import { RmaListNotesByReturnIdRequestSortSortField } from '../models/RmaListNotesByReturnIdRequestSortSortField';
import { RmaSortOrder } from '../models/RmaSortOrder';
import { HttpFile } from '../http/http';

export class RmaListNotesByReturnIdRequestSort {
    /**
    * evaluation_order is the order in which the sort will be applied. The lower the number, the earlier the sort will be applied.
    */
    'evaluationOrder': number;
    'field': RmaListNotesByReturnIdRequestSortSortField;
    'order'?: RmaSortOrder;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "evaluationOrder",
            "baseName": "evaluationOrder",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "RmaListNotesByReturnIdRequestSortSortField",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "RmaSortOrder",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RmaListNotesByReturnIdRequestSort.attributeTypeMap;
    }

    public constructor() {
    }
}


