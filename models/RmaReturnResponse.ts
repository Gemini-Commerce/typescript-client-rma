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

import { RmaCustomerInfo } from '../models/RmaCustomerInfo';
import { RmaOrderData } from '../models/RmaOrderData';
import { RmaPostalAddress } from '../models/RmaPostalAddress';
import { RmaRefundMethod } from '../models/RmaRefundMethod';
import { RmaReturnHistory } from '../models/RmaReturnHistory';
import { RmaReturnProduct } from '../models/RmaReturnProduct';
import { HttpFile } from '../http/http';

export class RmaReturnResponse {
    'id'?: string;
    'grn'?: string;
    'orderGrn'?: string;
    'status'?: string;
    'products'?: Array<RmaReturnProduct>;
    'preferredRefundMethod'?: RmaRefundMethod;
    'refundShippingCost'?: boolean;
    'refundPaymentCost'?: boolean;
    'customerInfo'?: RmaCustomerInfo;
    'returnAddress'?: RmaPostalAddress;
    'note'?: string;
    'history'?: Array<RmaReturnHistory>;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'orderData'?: RmaOrderData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderGrn",
            "baseName": "orderGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<RmaReturnProduct>",
            "format": ""
        },
        {
            "name": "preferredRefundMethod",
            "baseName": "preferredRefundMethod",
            "type": "RmaRefundMethod",
            "format": ""
        },
        {
            "name": "refundShippingCost",
            "baseName": "refundShippingCost",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "refundPaymentCost",
            "baseName": "refundPaymentCost",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customerInfo",
            "baseName": "customerInfo",
            "type": "RmaCustomerInfo",
            "format": ""
        },
        {
            "name": "returnAddress",
            "baseName": "returnAddress",
            "type": "RmaPostalAddress",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "history",
            "baseName": "history",
            "type": "Array<RmaReturnHistory>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "orderData",
            "baseName": "orderData",
            "type": "RmaOrderData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RmaReturnResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


