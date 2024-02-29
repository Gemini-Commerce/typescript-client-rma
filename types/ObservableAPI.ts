import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { RmaApiRequestFactory, RmaApiResponseProcessor} from "../apis/RmaApi";
export class ObservableRmaApi {
    private requestFactory: RmaApiRequestFactory;
    private responseProcessor: RmaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RmaApiRequestFactory,
        responseProcessor?: RmaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RmaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RmaApiResponseProcessor();
    }

    /**
     * Add a note to an RMA
     * @param body 
     */
    public addNoteWithHttpInfo(body: RmaAddNoteRequest, _options?: Configuration): Observable<HttpInfo<RmaNoteResponse>> {
        const requestContextPromise = this.requestFactory.addNote(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a note to an RMA
     * @param body 
     */
    public addNote(body: RmaAddNoteRequest, _options?: Configuration): Observable<RmaNoteResponse> {
        return this.addNoteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RmaNoteResponse>) => apiResponse.data));
    }

    /**
     * Approve a return
     * @param body 
     */
    public approveReturnWithHttpInfo(body: RmaApproveReturnRequest, _options?: Configuration): Observable<HttpInfo<RpcStatus>> {
        const requestContextPromise = this.requestFactory.approveReturn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.approveReturnWithHttpInfo(rsp)));
            }));
    }

    /**
     * Approve a return
     * @param body 
     */
    public approveReturn(body: RmaApproveReturnRequest, _options?: Configuration): Observable<RpcStatus> {
        return this.approveReturnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RpcStatus>) => apiResponse.data));
    }

    /**
     * Cancel a return
     * @param body 
     */
    public cancelReturnWithHttpInfo(body: RmaCancelReturnRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cancelReturn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelReturnWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel a return
     * @param body 
     */
    public cancelReturn(body: RmaCancelReturnRequest, _options?: Configuration): Observable<any> {
        return this.cancelReturnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Confirm return approve items
     * @param body 
     */
    public confirmReturnApproveItemsWithHttpInfo(body: RmaConfirmReturnApproveItemsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.confirmReturnApproveItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmReturnApproveItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Confirm return approve items
     * @param body 
     */
    public confirmReturnApproveItems(body: RmaConfirmReturnApproveItemsRequest, _options?: Configuration): Observable<any> {
        return this.confirmReturnApproveItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a return
     * @param body 
     */
    public createReturnWithHttpInfo(body: RmaCreateReturnRequest, _options?: Configuration): Observable<HttpInfo<RmaReturnResponse>> {
        const requestContextPromise = this.requestFactory.createReturn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReturnWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a return
     * @param body 
     */
    public createReturn(body: RmaCreateReturnRequest, _options?: Configuration): Observable<RmaReturnResponse> {
        return this.createReturnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RmaReturnResponse>) => apiResponse.data));
    }

    /**
     * Delete a note from an RMA
     * @param body 
     */
    public deleteNoteWithHttpInfo(body: RmaDeleteNoteRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteNote(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a note from an RMA
     * @param body 
     */
    public deleteNote(body: RmaDeleteNoteRequest, _options?: Configuration): Observable<any> {
        return this.deleteNoteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Edit a note on an RMA
     * @param body 
     */
    public editNoteWithHttpInfo(body: RmaEditNoteRequest, _options?: Configuration): Observable<HttpInfo<RmaNoteResponse>> {
        const requestContextPromise = this.requestFactory.editNote(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Edit a note on an RMA
     * @param body 
     */
    public editNote(body: RmaEditNoteRequest, _options?: Configuration): Observable<RmaNoteResponse> {
        return this.editNoteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RmaNoteResponse>) => apiResponse.data));
    }

    /**
     * Get a return
     * @param body 
     */
    public getReturnWithHttpInfo(body: RmaGetReturnRequest, _options?: Configuration): Observable<HttpInfo<RmaReturnResponse>> {
        const requestContextPromise = this.requestFactory.getReturn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReturnWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a return
     * @param body 
     */
    public getReturn(body: RmaGetReturnRequest, _options?: Configuration): Observable<RmaReturnResponse> {
        return this.getReturnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RmaReturnResponse>) => apiResponse.data));
    }

    /**
     * List notes by return id
     * @param body 
     */
    public listNotesByReturnIdWithHttpInfo(body: RmaListNotesByReturnIdRequest, _options?: Configuration): Observable<HttpInfo<RmaListNotesByReturnIdResponse>> {
        const requestContextPromise = this.requestFactory.listNotesByReturnId(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotesByReturnIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * List notes by return id
     * @param body 
     */
    public listNotesByReturnId(body: RmaListNotesByReturnIdRequest, _options?: Configuration): Observable<RmaListNotesByReturnIdResponse> {
        return this.listNotesByReturnIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RmaListNotesByReturnIdResponse>) => apiResponse.data));
    }

    /**
     * List returns
     * @param body 
     */
    public listReturnsWithHttpInfo(body: RmaListReturnsRequest, _options?: Configuration): Observable<HttpInfo<RmaListReturnsResponse>> {
        const requestContextPromise = this.requestFactory.listReturns(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listReturnsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List returns
     * @param body 
     */
    public listReturns(body: RmaListReturnsRequest, _options?: Configuration): Observable<RmaListReturnsResponse> {
        return this.listReturnsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RmaListReturnsResponse>) => apiResponse.data));
    }

    /**
     * Refund a return
     * @param body 
     */
    public refundReturnWithHttpInfo(body: RmaRefundReturnRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.refundReturn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refundReturnWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refund a return
     * @param body 
     */
    public refundReturn(body: RmaRefundReturnRequest, _options?: Configuration): Observable<any> {
        return this.refundReturnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Reject a return
     * @param body 
     */
    public rejectReturnWithHttpInfo(body: RmaRejectReturnRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.rejectReturn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rejectReturnWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reject a return
     * @param body 
     */
    public rejectReturn(body: RmaRejectReturnRequest, _options?: Configuration): Observable<any> {
        return this.rejectReturnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Set received items
     * @param body 
     */
    public setReceivedItemsWithHttpInfo(body: RmaSetReceivedItemsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.setReceivedItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setReceivedItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set received items
     * @param body 
     */
    public setReceivedItems(body: RmaSetReceivedItemsRequest, _options?: Configuration): Observable<any> {
        return this.setReceivedItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Skip a return status
     * @param body 
     */
    public skipReturnStatusWithHttpInfo(body: RmaSkipReturnStatusRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.skipReturnStatus(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.skipReturnStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Skip a return status
     * @param body 
     */
    public skipReturnStatus(body: RmaSkipReturnStatusRequest, _options?: Configuration): Observable<any> {
        return this.skipReturnStatusWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
