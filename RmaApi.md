# .RmaApi

All URIs are relative to *https://rma.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](RmaApi.md#addNote) | **POST** /rma.Rma/AddNote | Add a note to an RMA
[**approveReturn**](RmaApi.md#approveReturn) | **POST** /rma.Rma/ApproveReturn | Approve a return
[**cancelReturn**](RmaApi.md#cancelReturn) | **POST** /rma.Rma/CancelReturn | Cancel a return
[**confirmReturnApproveItems**](RmaApi.md#confirmReturnApproveItems) | **POST** /rma.Rma/ConfirmReturnApproveItems | Confirm return approve items
[**createReturn**](RmaApi.md#createReturn) | **POST** /rma.Rma/CreateReturn | Create a return
[**deleteNote**](RmaApi.md#deleteNote) | **POST** /rma.Rma/DeleteNote | Delete a note from an RMA
[**editNote**](RmaApi.md#editNote) | **POST** /rma.Rma/EditNote | Edit a note on an RMA
[**getReturn**](RmaApi.md#getReturn) | **POST** /rma.Rma/GetReturn | Get a return
[**listNotesByReturnId**](RmaApi.md#listNotesByReturnId) | **POST** /rma.Rma/ListNotesByReturnId | List notes by return id
[**listReturns**](RmaApi.md#listReturns) | **POST** /rma.Rma/ListReturns | List returns
[**refundReturn**](RmaApi.md#refundReturn) | **POST** /rma.Rma/RefundReturn | Refund a return
[**rejectReturn**](RmaApi.md#rejectReturn) | **POST** /rma.Rma/RejectReturn | Reject a return
[**setReceivedItems**](RmaApi.md#setReceivedItems) | **POST** /rma.Rma/SetReceivedItems | Set received items
[**skipReturnStatus**](RmaApi.md#skipReturnStatus) | **POST** /rma.Rma/SkipReturnStatus | Skip a return status


# **addNote**
> RmaNoteResponse addNote(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiAddNoteRequest = {
  // RmaAddNoteRequest
  body: {
    tenantId: "tenantId_example",
    returnId: "returnId_example",
    author: "author_example",
    note: "note_example",
  },
};

apiInstance.addNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaAddNoteRequest**|  |


### Return type

**RmaNoteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **approveReturn**
> RpcStatus approveReturn(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiApproveReturnRequest = {
  // RmaApproveReturnRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    refundShippingCost: true,
    refundPaymentCost: true,
    items: [
      {
        grn: "grn_example",
        quantity: "quantity_example",
      },
    ],
  },
};

apiInstance.approveReturn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaApproveReturnRequest**|  |


### Return type

**RpcStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelReturn**
> any cancelReturn(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiCancelReturnRequest = {
  // RmaCancelReturnRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.cancelReturn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaCancelReturnRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **confirmReturnApproveItems**
> any confirmReturnApproveItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiConfirmReturnApproveItemsRequest = {
  // RmaConfirmReturnApproveItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    items: [
      {
        grn: "grn_example",
        quantity: "quantity_example",
      },
    ],
  },
};

apiInstance.confirmReturnApproveItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaConfirmReturnApproveItemsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createReturn**
> RmaReturnResponse createReturn(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiCreateReturnRequest = {
  // RmaCreateReturnRequest
  body: {
    tenantId: "tenantId_example",
    orderGrn: "orderGrn_example",
    products: [
      {
        grn: "grn_example",
        quantity: "quantity_example",
        reason: "reason_example",
        note: "note_example",
      },
    ],
    preferredRefundMethod: "REFUND_METHOD_UNKNOWN",
    refundShippingCost: true,
    refundPaymentCost: true,
    customerInfo: {
      firstname: "firstname_example",
      lastname: "lastname_example",
      email: "email_example",
      phone: "phone_example",
      grn: "grn_example",
    },
    returnAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    note: "note_example",
  },
};

apiInstance.createReturn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaCreateReturnRequest**|  |


### Return type

**RmaReturnResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNote**
> any deleteNote(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiDeleteNoteRequest = {
  // RmaDeleteNoteRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.deleteNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaDeleteNoteRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editNote**
> RmaNoteResponse editNote(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiEditNoteRequest = {
  // RmaEditNoteRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      author: "author_example",
      note: "note_example",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.editNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaEditNoteRequest**|  |


### Return type

**RmaNoteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReturn**
> RmaReturnResponse getReturn(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiGetReturnRequest = {
  // RmaGetReturnRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getReturn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaGetReturnRequest**|  |


### Return type

**RmaReturnResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNotesByReturnId**
> RmaListNotesByReturnIdResponse listNotesByReturnId(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiListNotesByReturnIdRequest = {
  // RmaListNotesByReturnIdRequest
  body: {
    tenantId: "tenantId_example",
    returnId: "returnId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    sorts: [
      {
        evaluationOrder: 1,
        field: "UNKNOWN",
        order: "DESC",
      },
    ],
  },
};

apiInstance.listNotesByReturnId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaListNotesByReturnIdRequest**|  |


### Return type

**RmaListNotesByReturnIdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listReturns**
> RmaListReturnsResponse listReturns(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiListReturnsRequest = {
  // RmaListReturnsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    sorts: [
      {
        evaluationOrder: 1,
        field: "UNKNOWN",
        order: "DESC",
      },
    ],
    filterMask: "filterMask_example",
    filter: {
      searchTerms: [
        "searchTerms_example",
      ],
      returnIds: [
        "returnIds_example",
      ],
      returnStatus: [
        "returnStatus_example",
      ],
      orderGrns: [
        "orderGrns_example",
      ],
      orderNumbers: [
        "orderNumbers_example",
      ],
      orderItemGrns: [
        "orderItemGrns_example",
      ],
      orderItemSkus: [
        "orderItemSkus_example",
      ],
      customerGrns: [
        "customerGrns_example",
      ],
      customerEmails: [
        "customerEmails_example",
      ],
      createdAtStart: new Date('1970-01-01T00:00:00.00Z'),
      createdAtEnd: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

apiInstance.listReturns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaListReturnsRequest**|  |


### Return type

**RmaListReturnsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refundReturn**
> any refundReturn(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiRefundReturnRequest = {
  // RmaRefundReturnRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.refundReturn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaRefundReturnRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rejectReturn**
> any rejectReturn(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiRejectReturnRequest = {
  // RmaRejectReturnRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.rejectReturn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaRejectReturnRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setReceivedItems**
> any setReceivedItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiSetReceivedItemsRequest = {
  // RmaSetReceivedItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    items: [
      {
        grn: "grn_example",
        quantity: "quantity_example",
      },
    ],
  },
};

apiInstance.setReceivedItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaSetReceivedItemsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **skipReturnStatus**
> any skipReturnStatus(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RmaApi(configuration);

let body:.RmaApiSkipReturnStatusRequest = {
  // RmaSkipReturnStatusRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.skipReturnStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RmaSkipReturnStatusRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


