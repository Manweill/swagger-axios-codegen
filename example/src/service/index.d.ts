export interface IRequestOptions {
    headers?: any;
}
export declare class ProductsService {
    /**
     * Product Types
     */
    static products(params: IProductsParams, options?: IRequestOptions): Promise<any>;
}
export declare class EstimatesService {
    /**
     * Price Estimates
     */
    static price(params: IPriceParams, options?: IRequestOptions): Promise<any>;
    /**
     * Time Estimates
     */
    static time(params: ITimeParams, options?: IRequestOptions): Promise<any>;
}
export declare class UserService {
    /**
     * User Profile
     */
    static me(params: IMeParams, options?: IRequestOptions): Promise<Profile>;
    /**
     * User Activity
     */
    static history(params: IHistoryParams, options?: IRequestOptions): Promise<Activities>;
}
export interface IProductsParams {
    /** Latitude component of location. */
    latitude: number;
    /** Longitude component of location. */
    longitude: number;
}
export interface IPriceParams {
    /** Latitude component of start location. */
    startLatitude: number;
    /** Longitude component of start location. */
    startLongitude: number;
    /** Latitude component of end location. */
    endLatitude: number;
    /** Longitude component of end location. */
    endLongitude: number;
}
export interface ITimeParams {
    /** Latitude component of start location. */
    startLatitude: number;
    /** Longitude component of start location. */
    startLongitude: number;
    /** Unique customer identifier to be used for experience customization. */
    customerUuid?: string;
    /** Unique identifier representing a specific product for a given latitude & longitude. */
    productId?: string;
}
export interface IMeParams {
}
export interface IHistoryParams {
    /** Offset the list of returned results by this amount. Default is zero. */
    offset?: number;
    /** Number of items to retrieve. Default is 5, maximum is 100. */
    limit?: number;
}
export declare class Product {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id: string;
    /** Description of product. */
    description: string;
    /** Display name of product. */
    display_name: string;
    /** Capacity of product. For example, 4 people. */
    capacity: string;
    /** Image URL representing the product. */
    image: string;
    constructor(data?: any);
}
export declare class PriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id: string;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code: string;
    /** Display name of product. */
    display_name: string;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate: string;
    /** Lower bound of the estimated price. */
    low_estimate: number;
    /** Upper bound of the estimated price. */
    high_estimate: number;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier: number;
    constructor(data?: any);
}
export declare class Profile {
    /** First name of the Uber user. */
    first_name: string;
    /** Last name of the Uber user. */
    last_name: string;
    /** Email address of the Uber user */
    email: string;
    /** Image URL of the Uber user. */
    picture: string;
    /** Promo code of the Uber user. */
    promo_code: string;
    constructor(data?: any);
}
export declare class Activity {
    /** Unique identifier for the activity */
    uuid: string;
    constructor(data?: any);
}
export declare class Activities {
    /** Position in pagination. */
    offset: number;
    /** Number of items to retrieve (100 max). */
    limit: number;
    /** Total number of items available. */
    count: number;
    /**  */
    history: Activity[];
    constructor(data?: any);
}
export declare class Error {
    /**  */
    code: number;
    /**  */
    message: string;
    /**  */
    fields: string;
    constructor(data?: any);
}
