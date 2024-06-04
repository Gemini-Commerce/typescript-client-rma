import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateReturnRequestProduct } from '../models/CreateReturnRequestProduct';
import { EditNoteRequestPayload } from '../models/EditNoteRequestPayload';
import { ListReturnsRequestFilter } from '../models/ListReturnsRequestFilter';
import { OrderDataSubtotal } from '../models/OrderDataSubtotal';
import { OrderDataSubtotalCode } from '../models/OrderDataSubtotalCode';
import { OrderDataTotal } from '../models/OrderDataTotal';
import { OrderDataTotalCode } from '../models/OrderDataTotalCode';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RmaAddNoteRequest } from '../models/RmaAddNoteRequest';
import { RmaApproveReturnRequest } from '../models/RmaApproveReturnRequest';
import { RmaApproveReturnRequestItem } from '../models/RmaApproveReturnRequestItem';
import { RmaCancelReturnRequest } from '../models/RmaCancelReturnRequest';
import { RmaConfirmReturnApproveItemsRequest } from '../models/RmaConfirmReturnApproveItemsRequest';
import { RmaConfirmReturnApproveItemsRequestItem } from '../models/RmaConfirmReturnApproveItemsRequestItem';
import { RmaCreateReturnRequest } from '../models/RmaCreateReturnRequest';
import { RmaCurrency } from '../models/RmaCurrency';
import { RmaCustomerInfo } from '../models/RmaCustomerInfo';
import { RmaDeleteNoteRequest } from '../models/RmaDeleteNoteRequest';
import { RmaEditNoteRequest } from '../models/RmaEditNoteRequest';
import { RmaGetReturnRequest } from '../models/RmaGetReturnRequest';
import { RmaListNotesByReturnIdRequest } from '../models/RmaListNotesByReturnIdRequest';
import { RmaListNotesByReturnIdRequestSort } from '../models/RmaListNotesByReturnIdRequestSort';
import { RmaListNotesByReturnIdRequestSortSortField } from '../models/RmaListNotesByReturnIdRequestSortSortField';
import { RmaListNotesByReturnIdResponse } from '../models/RmaListNotesByReturnIdResponse';
import { RmaListReturnsRequest } from '../models/RmaListReturnsRequest';
import { RmaListReturnsRequestSort } from '../models/RmaListReturnsRequestSort';
import { RmaListReturnsRequestSortSortField } from '../models/RmaListReturnsRequestSortSortField';
import { RmaListReturnsResponse } from '../models/RmaListReturnsResponse';
import { RmaMoney } from '../models/RmaMoney';
import { RmaNoteResponse } from '../models/RmaNoteResponse';
import { RmaOrderData } from '../models/RmaOrderData';
import { RmaOrderDataItem } from '../models/RmaOrderDataItem';
import { RmaPostalAddress } from '../models/RmaPostalAddress';
import { RmaRefundMethod } from '../models/RmaRefundMethod';
import { RmaRefundReturnRequest } from '../models/RmaRefundReturnRequest';
import { RmaRejectReturnRequest } from '../models/RmaRejectReturnRequest';
import { RmaReturnHistory } from '../models/RmaReturnHistory';
import { RmaReturnProduct } from '../models/RmaReturnProduct';
import { RmaReturnProductProperty } from '../models/RmaReturnProductProperty';
import { RmaReturnResponse } from '../models/RmaReturnResponse';
import { RmaSetReceivedItemsRequest } from '../models/RmaSetReceivedItemsRequest';
import { RmaSetReceivedItemsRequestItem } from '../models/RmaSetReceivedItemsRequestItem';
import { RmaSkipReturnStatusRequest } from '../models/RmaSkipReturnStatusRequest';
import { RmaSortOrder } from '../models/RmaSortOrder';
import { RpcStatus } from '../models/RpcStatus';

import { ObservableRmaApi } from "./ObservableAPI";
import { RmaApiRequestFactory, RmaApiResponseProcessor} from "../apis/RmaApi";

export interface RmaApiAddNoteRequest {
    /**
     * 
     * @type RmaAddNoteRequest
     * @memberof RmaApiaddNote
     */
    body: RmaAddNoteRequest
}

export interface RmaApiApproveReturnRequest {
    /**
     * 
     * @type RmaApproveReturnRequest
     * @memberof RmaApiapproveReturn
     */
    body: RmaApproveReturnRequest
}

export interface RmaApiCancelReturnRequest {
    /**
     * 
     * @type RmaCancelReturnRequest
     * @memberof RmaApicancelReturn
     */
    body: RmaCancelReturnRequest
}

export interface RmaApiConfirmReturnApproveItemsRequest {
    /**
     * 
     * @type RmaConfirmReturnApproveItemsRequest
     * @memberof RmaApiconfirmReturnApproveItems
     */
    body: RmaConfirmReturnApproveItemsRequest
}

export interface RmaApiCreateReturnRequest {
    /**
     * 
     * @type RmaCreateReturnRequest
     * @memberof RmaApicreateReturn
     */
    body: RmaCreateReturnRequest
}

export interface RmaApiDeleteNoteRequest {
    /**
     * 
     * @type RmaDeleteNoteRequest
     * @memberof RmaApideleteNote
     */
    body: RmaDeleteNoteRequest
}

export interface RmaApiEditNoteRequest {
    /**
     * 
     * @type RmaEditNoteRequest
     * @memberof RmaApieditNote
     */
    body: RmaEditNoteRequest
}

export interface RmaApiGetReturnRequest {
    /**
     * 
     * @type RmaGetReturnRequest
     * @memberof RmaApigetReturn
     */
    body: RmaGetReturnRequest
}

export interface RmaApiListNotesByReturnIdRequest {
    /**
     * 
     * @type RmaListNotesByReturnIdRequest
     * @memberof RmaApilistNotesByReturnId
     */
    body: RmaListNotesByReturnIdRequest
}

export interface RmaApiListReturnsRequest {
    /**
     * 
     * @type RmaListReturnsRequest
     * @memberof RmaApilistReturns
     */
    body: RmaListReturnsRequest
}

export interface RmaApiRefundReturnRequest {
    /**
     * 
     * @type RmaRefundReturnRequest
     * @memberof RmaApirefundReturn
     */
    body: RmaRefundReturnRequest
}

export interface RmaApiRejectReturnRequest {
    /**
     * 
     * @type RmaRejectReturnRequest
     * @memberof RmaApirejectReturn
     */
    body: RmaRejectReturnRequest
}

export interface RmaApiSetReceivedItemsRequest {
    /**
     * 
     * @type RmaSetReceivedItemsRequest
     * @memberof RmaApisetReceivedItems
     */
    body: RmaSetReceivedItemsRequest
}

export interface RmaApiSkipReturnStatusRequest {
    /**
     * 
     * @type RmaSkipReturnStatusRequest
     * @memberof RmaApiskipReturnStatus
     */
    body: RmaSkipReturnStatusRequest
}

export class ObjectRmaApi {
    private api: ObservableRmaApi

    public constructor(configuration: Configuration, requestFactory?: RmaApiRequestFactory, responseProcessor?: RmaApiResponseProcessor) {
        this.api = new ObservableRmaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a note to an RMA
     * @param param the request object
     */
    public addNoteWithHttpInfo(param: RmaApiAddNoteRequest, options?: Configuration): Promise<HttpInfo<RmaNoteResponse>> {
        return this.api.addNoteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Add a note to an RMA
     * @param param the request object
     */
    public addNote(param: RmaApiAddNoteRequest, options?: Configuration): Promise<RmaNoteResponse> {
        return this.api.addNote(param.body,  options).toPromise();
    }

    /**
     * Approve a return
     * @param param the request object
     */
    public approveReturnWithHttpInfo(param: RmaApiApproveReturnRequest, options?: Configuration): Promise<HttpInfo<RpcStatus>> {
        return this.api.approveReturnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Approve a return
     * @param param the request object
     */
    public approveReturn(param: RmaApiApproveReturnRequest, options?: Configuration): Promise<RpcStatus> {
        return this.api.approveReturn(param.body,  options).toPromise();
    }

    /**
     * Cancel a return
     * @param param the request object
     */
    public cancelReturnWithHttpInfo(param: RmaApiCancelReturnRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cancelReturnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Cancel a return
     * @param param the request object
     */
    public cancelReturn(param: RmaApiCancelReturnRequest, options?: Configuration): Promise<any> {
        return this.api.cancelReturn(param.body,  options).toPromise();
    }

    /**
     * Confirm return approve items
     * @param param the request object
     */
    public confirmReturnApproveItemsWithHttpInfo(param: RmaApiConfirmReturnApproveItemsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.confirmReturnApproveItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Confirm return approve items
     * @param param the request object
     */
    public confirmReturnApproveItems(param: RmaApiConfirmReturnApproveItemsRequest, options?: Configuration): Promise<any> {
        return this.api.confirmReturnApproveItems(param.body,  options).toPromise();
    }

    /**
     * Create a return
     * @param param the request object
     */
    public createReturnWithHttpInfo(param: RmaApiCreateReturnRequest, options?: Configuration): Promise<HttpInfo<RmaReturnResponse>> {
        return this.api.createReturnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a return
     * @param param the request object
     */
    public createReturn(param: RmaApiCreateReturnRequest, options?: Configuration): Promise<RmaReturnResponse> {
        return this.api.createReturn(param.body,  options).toPromise();
    }

    /**
     * Delete a note from an RMA
     * @param param the request object
     */
    public deleteNoteWithHttpInfo(param: RmaApiDeleteNoteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteNoteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Delete a note from an RMA
     * @param param the request object
     */
    public deleteNote(param: RmaApiDeleteNoteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteNote(param.body,  options).toPromise();
    }

    /**
     * Edit a note on an RMA
     * @param param the request object
     */
    public editNoteWithHttpInfo(param: RmaApiEditNoteRequest, options?: Configuration): Promise<HttpInfo<RmaNoteResponse>> {
        return this.api.editNoteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Edit a note on an RMA
     * @param param the request object
     */
    public editNote(param: RmaApiEditNoteRequest, options?: Configuration): Promise<RmaNoteResponse> {
        return this.api.editNote(param.body,  options).toPromise();
    }

    /**
     * Get a return
     * @param param the request object
     */
    public getReturnWithHttpInfo(param: RmaApiGetReturnRequest, options?: Configuration): Promise<HttpInfo<RmaReturnResponse>> {
        return this.api.getReturnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get a return
     * @param param the request object
     */
    public getReturn(param: RmaApiGetReturnRequest, options?: Configuration): Promise<RmaReturnResponse> {
        return this.api.getReturn(param.body,  options).toPromise();
    }

    /**
     * List notes by return id
     * @param param the request object
     */
    public listNotesByReturnIdWithHttpInfo(param: RmaApiListNotesByReturnIdRequest, options?: Configuration): Promise<HttpInfo<RmaListNotesByReturnIdResponse>> {
        return this.api.listNotesByReturnIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List notes by return id
     * @param param the request object
     */
    public listNotesByReturnId(param: RmaApiListNotesByReturnIdRequest, options?: Configuration): Promise<RmaListNotesByReturnIdResponse> {
        return this.api.listNotesByReturnId(param.body,  options).toPromise();
    }

    /**
     * List returns
     * @param param the request object
     */
    public listReturnsWithHttpInfo(param: RmaApiListReturnsRequest, options?: Configuration): Promise<HttpInfo<RmaListReturnsResponse>> {
        return this.api.listReturnsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List returns
     * @param param the request object
     */
    public listReturns(param: RmaApiListReturnsRequest, options?: Configuration): Promise<RmaListReturnsResponse> {
        return this.api.listReturns(param.body,  options).toPromise();
    }

    /**
     * Refund a return
     * @param param the request object
     */
    public refundReturnWithHttpInfo(param: RmaApiRefundReturnRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.refundReturnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Refund a return
     * @param param the request object
     */
    public refundReturn(param: RmaApiRefundReturnRequest, options?: Configuration): Promise<any> {
        return this.api.refundReturn(param.body,  options).toPromise();
    }

    /**
     * Reject a return
     * @param param the request object
     */
    public rejectReturnWithHttpInfo(param: RmaApiRejectReturnRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.rejectReturnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Reject a return
     * @param param the request object
     */
    public rejectReturn(param: RmaApiRejectReturnRequest, options?: Configuration): Promise<any> {
        return this.api.rejectReturn(param.body,  options).toPromise();
    }

    /**
     * Set received items
     * @param param the request object
     */
    public setReceivedItemsWithHttpInfo(param: RmaApiSetReceivedItemsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.setReceivedItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set received items
     * @param param the request object
     */
    public setReceivedItems(param: RmaApiSetReceivedItemsRequest, options?: Configuration): Promise<any> {
        return this.api.setReceivedItems(param.body,  options).toPromise();
    }

    /**
     * Skip a return status
     * @param param the request object
     */
    public skipReturnStatusWithHttpInfo(param: RmaApiSkipReturnStatusRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.skipReturnStatusWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Skip a return status
     * @param param the request object
     */
    public skipReturnStatus(param: RmaApiSkipReturnStatusRequest, options?: Configuration): Promise<any> {
        return this.api.skipReturnStatus(param.body,  options).toPromise();
    }

}
