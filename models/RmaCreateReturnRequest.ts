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

import { CreateReturnRequestProduct } from '../models/CreateReturnRequestProduct';
import { RmaCustomerInfo } from '../models/RmaCustomerInfo';
import { RmaPostalAddress } from '../models/RmaPostalAddress';
import { RmaRefundMethod } from '../models/RmaRefundMethod';
import { HttpFile } from '../http/http';

export class RmaCreateReturnRequest {
    'tenantId': string;
    'orderGrn': string;
    'products': Array<CreateReturnRequestProduct>;
    'preferredRefundMethod': RmaRefundMethod;
    'refundShippingCost'?: boolean;
    'refundPaymentCost'?: boolean;
    'customerInfo'?: RmaCustomerInfo;
    'returnAddress'?: RmaPostalAddress;
    'note'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
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
            "name": "products",
            "baseName": "products",
            "type": "Array<CreateReturnRequestProduct>",
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
        }    ];

    static getAttributeTypeMap() {
        return RmaCreateReturnRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



