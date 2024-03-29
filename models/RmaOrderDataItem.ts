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

import { RmaMoney } from '../models/RmaMoney';
import { HttpFile } from '../http/http';

export class RmaOrderDataItem {
    'id'?: string;
    'productGrn'?: string;
    'qtyOrdered'?: number;
    'qtyCommitted'?: number;
    'qtyShipped'?: number;
    'unitSalePrice'?: RmaMoney;
    'unitListPrice'?: RmaMoney;
    'unitVatAmount'?: RmaMoney;
    'rowSalePrice'?: RmaMoney;
    'rowListPrice'?: RmaMoney;
    'rowVatAmount'?: RmaMoney;
    'vatPercentage'?: number;
    'vatInaccurate'?: boolean;
    'vatCalculated'?: boolean;
    'productName'?: string;
    'productCode'?: string;
    'productSku'?: string;
    'productOptions'?: string;
    'productImg'?: string;
    'productData'?: string;
    'shipmentInfoReference'?: string;
    'promotionGrn'?: Array<string>;
    'productIsVirtual'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productGrn",
            "baseName": "productGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "qtyOrdered",
            "baseName": "qtyOrdered",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "qtyCommitted",
            "baseName": "qtyCommitted",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "qtyShipped",
            "baseName": "qtyShipped",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unitSalePrice",
            "baseName": "unitSalePrice",
            "type": "RmaMoney",
            "format": ""
        },
        {
            "name": "unitListPrice",
            "baseName": "unitListPrice",
            "type": "RmaMoney",
            "format": ""
        },
        {
            "name": "unitVatAmount",
            "baseName": "unitVatAmount",
            "type": "RmaMoney",
            "format": ""
        },
        {
            "name": "rowSalePrice",
            "baseName": "rowSalePrice",
            "type": "RmaMoney",
            "format": ""
        },
        {
            "name": "rowListPrice",
            "baseName": "rowListPrice",
            "type": "RmaMoney",
            "format": ""
        },
        {
            "name": "rowVatAmount",
            "baseName": "rowVatAmount",
            "type": "RmaMoney",
            "format": ""
        },
        {
            "name": "vatPercentage",
            "baseName": "vatPercentage",
            "type": "number",
            "format": "float"
        },
        {
            "name": "vatInaccurate",
            "baseName": "vatInaccurate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vatCalculated",
            "baseName": "vatCalculated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCode",
            "baseName": "productCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "productSku",
            "baseName": "productSku",
            "type": "string",
            "format": ""
        },
        {
            "name": "productOptions",
            "baseName": "productOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "productImg",
            "baseName": "productImg",
            "type": "string",
            "format": ""
        },
        {
            "name": "productData",
            "baseName": "productData",
            "type": "string",
            "format": ""
        },
        {
            "name": "shipmentInfoReference",
            "baseName": "shipmentInfoReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "promotionGrn",
            "baseName": "promotionGrn",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "productIsVirtual",
            "baseName": "productIsVirtual",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RmaOrderDataItem.attributeTypeMap;
    }

    public constructor() {
    }
}

