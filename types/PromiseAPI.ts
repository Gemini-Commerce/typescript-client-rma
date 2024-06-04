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
import { ObservableRmaApi } from './ObservableAPI';

import { RmaApiRequestFactory, RmaApiResponseProcessor} from "../apis/RmaApi";
export class PromiseRmaApi {
    private api: ObservableRmaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RmaApiRequestFactory,
        responseProcessor?: RmaApiResponseProcessor
    ) {
        this.api = new ObservableRmaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a note to an RMA
     * @param body 
     */
    public addNoteWithHttpInfo(body: RmaAddNoteRequest, _options?: Configuration): Promise<HttpInfo<RmaNoteResponse>> {
        const result = this.api.addNoteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Add a note to an RMA
     * @param body 
     */
    public addNote(body: RmaAddNoteRequest, _options?: Configuration): Promise<RmaNoteResponse> {
        const result = this.api.addNote(body, _options);
        return result.toPromise();
    }

    /**
     * Approve a return
     * @param body 
     */
    public approveReturnWithHttpInfo(body: RmaApproveReturnRequest, _options?: Configuration): Promise<HttpInfo<RpcStatus>> {
        const result = this.api.approveReturnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Approve a return
     * @param body 
     */
    public approveReturn(body: RmaApproveReturnRequest, _options?: Configuration): Promise<RpcStatus> {
        const result = this.api.approveReturn(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel a return
     * @param body 
     */
    public cancelReturnWithHttpInfo(body: RmaCancelReturnRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cancelReturnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel a return
     * @param body 
     */
    public cancelReturn(body: RmaCancelReturnRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cancelReturn(body, _options);
        return result.toPromise();
    }

    /**
     * Confirm return approve items
     * @param body 
     */
    public confirmReturnApproveItemsWithHttpInfo(body: RmaConfirmReturnApproveItemsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.confirmReturnApproveItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Confirm return approve items
     * @param body 
     */
    public confirmReturnApproveItems(body: RmaConfirmReturnApproveItemsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.confirmReturnApproveItems(body, _options);
        return result.toPromise();
    }

    /**
     * Create a return
     * @param body 
     */
    public createReturnWithHttpInfo(body: RmaCreateReturnRequest, _options?: Configuration): Promise<HttpInfo<RmaReturnResponse>> {
        const result = this.api.createReturnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a return
     * @param body 
     */
    public createReturn(body: RmaCreateReturnRequest, _options?: Configuration): Promise<RmaReturnResponse> {
        const result = this.api.createReturn(body, _options);
        return result.toPromise();
    }

    /**
     * Delete a note from an RMA
     * @param body 
     */
    public deleteNoteWithHttpInfo(body: RmaDeleteNoteRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteNoteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Delete a note from an RMA
     * @param body 
     */
    public deleteNote(body: RmaDeleteNoteRequest, _options?: Configuration): Promise<any> {
        const result = this.api.deleteNote(body, _options);
        return result.toPromise();
    }

    /**
     * Edit a note on an RMA
     * @param body 
     */
    public editNoteWithHttpInfo(body: RmaEditNoteRequest, _options?: Configuration): Promise<HttpInfo<RmaNoteResponse>> {
        const result = this.api.editNoteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Edit a note on an RMA
     * @param body 
     */
    public editNote(body: RmaEditNoteRequest, _options?: Configuration): Promise<RmaNoteResponse> {
        const result = this.api.editNote(body, _options);
        return result.toPromise();
    }

    /**
     * Get a return
     * @param body 
     */
    public getReturnWithHttpInfo(body: RmaGetReturnRequest, _options?: Configuration): Promise<HttpInfo<RmaReturnResponse>> {
        const result = this.api.getReturnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get a return
     * @param body 
     */
    public getReturn(body: RmaGetReturnRequest, _options?: Configuration): Promise<RmaReturnResponse> {
        const result = this.api.getReturn(body, _options);
        return result.toPromise();
    }

    /**
     * List notes by return id
     * @param body 
     */
    public listNotesByReturnIdWithHttpInfo(body: RmaListNotesByReturnIdRequest, _options?: Configuration): Promise<HttpInfo<RmaListNotesByReturnIdResponse>> {
        const result = this.api.listNotesByReturnIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List notes by return id
     * @param body 
     */
    public listNotesByReturnId(body: RmaListNotesByReturnIdRequest, _options?: Configuration): Promise<RmaListNotesByReturnIdResponse> {
        const result = this.api.listNotesByReturnId(body, _options);
        return result.toPromise();
    }

    /**
     * List returns
     * @param body 
     */
    public listReturnsWithHttpInfo(body: RmaListReturnsRequest, _options?: Configuration): Promise<HttpInfo<RmaListReturnsResponse>> {
        const result = this.api.listReturnsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List returns
     * @param body 
     */
    public listReturns(body: RmaListReturnsRequest, _options?: Configuration): Promise<RmaListReturnsResponse> {
        const result = this.api.listReturns(body, _options);
        return result.toPromise();
    }

    /**
     * Refund a return
     * @param body 
     */
    public refundReturnWithHttpInfo(body: RmaRefundReturnRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.refundReturnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Refund a return
     * @param body 
     */
    public refundReturn(body: RmaRefundReturnRequest, _options?: Configuration): Promise<any> {
        const result = this.api.refundReturn(body, _options);
        return result.toPromise();
    }

    /**
     * Reject a return
     * @param body 
     */
    public rejectReturnWithHttpInfo(body: RmaRejectReturnRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.rejectReturnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Reject a return
     * @param body 
     */
    public rejectReturn(body: RmaRejectReturnRequest, _options?: Configuration): Promise<any> {
        const result = this.api.rejectReturn(body, _options);
        return result.toPromise();
    }

    /**
     * Set received items
     * @param body 
     */
    public setReceivedItemsWithHttpInfo(body: RmaSetReceivedItemsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.setReceivedItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set received items
     * @param body 
     */
    public setReceivedItems(body: RmaSetReceivedItemsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.setReceivedItems(body, _options);
        return result.toPromise();
    }

    /**
     * Skip a return status
     * @param body 
     */
    public skipReturnStatusWithHttpInfo(body: RmaSkipReturnStatusRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.skipReturnStatusWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Skip a return status
     * @param body 
     */
    public skipReturnStatus(body: RmaSkipReturnStatusRequest, _options?: Configuration): Promise<any> {
        const result = this.api.skipReturnStatus(body, _options);
        return result.toPromise();
    }


}



