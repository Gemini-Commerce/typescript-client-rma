export * from '../models/CreateReturnRequestProduct';
export * from '../models/EditNoteRequestPayload';
export * from '../models/ListReturnsRequestFilter';
export * from '../models/OrderDataSubtotal';
export * from '../models/OrderDataSubtotalCode';
export * from '../models/OrderDataTotal';
export * from '../models/OrderDataTotalCode';
export * from '../models/ProtobufAny';
export * from '../models/ProtobufNullValue';
export * from '../models/RmaAddNoteRequest';
export * from '../models/RmaApproveReturnRequest';
export * from '../models/RmaApproveReturnRequestItem';
export * from '../models/RmaCancelReturnRequest';
export * from '../models/RmaConfirmReturnApproveItemsRequest';
export * from '../models/RmaConfirmReturnApproveItemsRequestItem';
export * from '../models/RmaCreateReturnRequest';
export * from '../models/RmaCurrency';
export * from '../models/RmaCustomerInfo';
export * from '../models/RmaDeleteNoteRequest';
export * from '../models/RmaEditNoteRequest';
export * from '../models/RmaGetReturnRequest';
export * from '../models/RmaListNotesByReturnIdRequest';
export * from '../models/RmaListNotesByReturnIdRequestSort';
export * from '../models/RmaListNotesByReturnIdRequestSortSortField';
export * from '../models/RmaListNotesByReturnIdResponse';
export * from '../models/RmaListReturnsRequest';
export * from '../models/RmaListReturnsRequestSort';
export * from '../models/RmaListReturnsRequestSortSortField';
export * from '../models/RmaListReturnsResponse';
export * from '../models/RmaMoney';
export * from '../models/RmaNoteResponse';
export * from '../models/RmaOrderData';
export * from '../models/RmaOrderDataItem';
export * from '../models/RmaPostalAddress';
export * from '../models/RmaRefundMethod';
export * from '../models/RmaRefundReturnRequest';
export * from '../models/RmaRejectReturnRequest';
export * from '../models/RmaReturnHistory';
export * from '../models/RmaReturnProduct';
export * from '../models/RmaReturnProductProperty';
export * from '../models/RmaReturnResponse';
export * from '../models/RmaSetReceivedItemsRequest';
export * from '../models/RmaSetReceivedItemsRequestItem';
export * from '../models/RmaSkipReturnStatusRequest';
export * from '../models/RmaSortOrder';
export * from '../models/RpcStatus';

import { CreateReturnRequestProduct } from '../models/CreateReturnRequestProduct';
import { EditNoteRequestPayload } from '../models/EditNoteRequestPayload';
import { ListReturnsRequestFilter } from '../models/ListReturnsRequestFilter';
import { OrderDataSubtotal   } from '../models/OrderDataSubtotal';
import { OrderDataSubtotalCode } from '../models/OrderDataSubtotalCode';
import { OrderDataTotal   } from '../models/OrderDataTotal';
import { OrderDataTotalCode } from '../models/OrderDataTotalCode';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RmaAddNoteRequest } from '../models/RmaAddNoteRequest';
import { RmaApproveReturnRequest } from '../models/RmaApproveReturnRequest';
import { RmaApproveReturnRequestItem } from '../models/RmaApproveReturnRequestItem';
import { RmaCancelReturnRequest } from '../models/RmaCancelReturnRequest';
import { RmaConfirmReturnApproveItemsRequest } from '../models/RmaConfirmReturnApproveItemsRequest';
import { RmaConfirmReturnApproveItemsRequestItem } from '../models/RmaConfirmReturnApproveItemsRequestItem';
import { RmaCreateReturnRequest          } from '../models/RmaCreateReturnRequest';
import { RmaCurrency } from '../models/RmaCurrency';
import { RmaCustomerInfo } from '../models/RmaCustomerInfo';
import { RmaDeleteNoteRequest } from '../models/RmaDeleteNoteRequest';
import { RmaEditNoteRequest } from '../models/RmaEditNoteRequest';
import { RmaGetReturnRequest } from '../models/RmaGetReturnRequest';
import { RmaListNotesByReturnIdRequest } from '../models/RmaListNotesByReturnIdRequest';
import { RmaListNotesByReturnIdRequestSort    } from '../models/RmaListNotesByReturnIdRequestSort';
import { RmaListNotesByReturnIdRequestSortSortField } from '../models/RmaListNotesByReturnIdRequestSortSortField';
import { RmaListNotesByReturnIdResponse } from '../models/RmaListNotesByReturnIdResponse';
import { RmaListReturnsRequest } from '../models/RmaListReturnsRequest';
import { RmaListReturnsRequestSort    } from '../models/RmaListReturnsRequestSort';
import { RmaListReturnsRequestSortSortField } from '../models/RmaListReturnsRequestSortSortField';
import { RmaListReturnsResponse } from '../models/RmaListReturnsResponse';
import { RmaMoney } from '../models/RmaMoney';
import { RmaNoteResponse } from '../models/RmaNoteResponse';
import { RmaOrderData            } from '../models/RmaOrderData';
import { RmaOrderDataItem } from '../models/RmaOrderDataItem';
import { RmaPostalAddress } from '../models/RmaPostalAddress';
import { RmaRefundMethod } from '../models/RmaRefundMethod';
import { RmaRefundReturnRequest } from '../models/RmaRefundReturnRequest';
import { RmaRejectReturnRequest } from '../models/RmaRejectReturnRequest';
import { RmaReturnHistory } from '../models/RmaReturnHistory';
import { RmaReturnProduct } from '../models/RmaReturnProduct';
import { RmaReturnProductProperty } from '../models/RmaReturnProductProperty';
import { RmaReturnResponse                } from '../models/RmaReturnResponse';
import { RmaSetReceivedItemsRequest } from '../models/RmaSetReceivedItemsRequest';
import { RmaSetReceivedItemsRequestItem } from '../models/RmaSetReceivedItemsRequestItem';
import { RmaSkipReturnStatusRequest } from '../models/RmaSkipReturnStatusRequest';
import { RmaSortOrder } from '../models/RmaSortOrder';
import { RpcStatus } from '../models/RpcStatus';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "OrderDataSubtotalCode",
    "OrderDataTotalCode",
    "ProtobufNullValue",
    "RmaCurrency",
    "RmaListNotesByReturnIdRequestSortSortField",
    "RmaListReturnsRequestSortSortField",
    "RmaRefundMethod",
    "RmaSortOrder",
]);

let typeMap: {[index: string]: any} = {
    "CreateReturnRequestProduct": CreateReturnRequestProduct,
    "EditNoteRequestPayload": EditNoteRequestPayload,
    "ListReturnsRequestFilter": ListReturnsRequestFilter,
    "OrderDataSubtotal": OrderDataSubtotal,
    "OrderDataTotal": OrderDataTotal,
    "ProtobufAny": ProtobufAny,
    "RmaAddNoteRequest": RmaAddNoteRequest,
    "RmaApproveReturnRequest": RmaApproveReturnRequest,
    "RmaApproveReturnRequestItem": RmaApproveReturnRequestItem,
    "RmaCancelReturnRequest": RmaCancelReturnRequest,
    "RmaConfirmReturnApproveItemsRequest": RmaConfirmReturnApproveItemsRequest,
    "RmaConfirmReturnApproveItemsRequestItem": RmaConfirmReturnApproveItemsRequestItem,
    "RmaCreateReturnRequest": RmaCreateReturnRequest,
    "RmaCustomerInfo": RmaCustomerInfo,
    "RmaDeleteNoteRequest": RmaDeleteNoteRequest,
    "RmaEditNoteRequest": RmaEditNoteRequest,
    "RmaGetReturnRequest": RmaGetReturnRequest,
    "RmaListNotesByReturnIdRequest": RmaListNotesByReturnIdRequest,
    "RmaListNotesByReturnIdRequestSort": RmaListNotesByReturnIdRequestSort,
    "RmaListNotesByReturnIdResponse": RmaListNotesByReturnIdResponse,
    "RmaListReturnsRequest": RmaListReturnsRequest,
    "RmaListReturnsRequestSort": RmaListReturnsRequestSort,
    "RmaListReturnsResponse": RmaListReturnsResponse,
    "RmaMoney": RmaMoney,
    "RmaNoteResponse": RmaNoteResponse,
    "RmaOrderData": RmaOrderData,
    "RmaOrderDataItem": RmaOrderDataItem,
    "RmaPostalAddress": RmaPostalAddress,
    "RmaRefundReturnRequest": RmaRefundReturnRequest,
    "RmaRejectReturnRequest": RmaRejectReturnRequest,
    "RmaReturnHistory": RmaReturnHistory,
    "RmaReturnProduct": RmaReturnProduct,
    "RmaReturnProductProperty": RmaReturnProductProperty,
    "RmaReturnResponse": RmaReturnResponse,
    "RmaSetReceivedItemsRequest": RmaSetReceivedItemsRequest,
    "RmaSetReceivedItemsRequestItem": RmaSetReceivedItemsRequestItem,
    "RmaSkipReturnStatusRequest": RmaSkipReturnStatusRequest,
    "RpcStatus": RpcStatus,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
