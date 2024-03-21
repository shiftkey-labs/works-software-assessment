/**
 * ResponseModel abstraction to uniform response
 */
export class ResponseModel<T> {

    /**
     * Operation status
     */
    isSuccess: boolean=false;

    /**
     * Supporting message
     */
    message: string;

    /**
     * Data of interest
     */
    responseData: T;

    /**
     * EMpty constructor
     */
    constructor(){}
}
