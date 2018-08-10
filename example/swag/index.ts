import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

export class ProductsService {
  /**
   * Product Types
   */
  static products(params: IProductsParams, options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      params = params || <IProductsParams>{};
      const configs: AxiosRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };

      let url = '/products';

      configs.url = url;

      configs.params = { latitude: params['latitude'], longitude: params['longitude'] };

      let data = null;
      configs.data = data;

      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class EstimatesService {
  /**
   * Price Estimates
   */
  static price(params: IPriceParams, options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      params = params || <IPriceParams>{};
      const configs: AxiosRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };

      let url = '/estimates/price';

      configs.url = url;

      configs.params = {
        startLatitude: params['startLatitude'],
        startLongitude: params['startLongitude'],
        endLatitude: params['endLatitude'],
        endLongitude: params['endLongitude']
      };

      let data = null;
      configs.data = data;

      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * Time Estimates
   */
  static time(params: ITimeParams, options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      params = params || <ITimeParams>{};
      const configs: AxiosRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };

      let url = '/estimates/time';

      configs.url = url;

      configs.params = {
        startLatitude: params['startLatitude'],
        startLongitude: params['startLongitude'],
        customerUuid: params['customerUuid'],
        productId: params['productId']
      };

      let data = null;
      configs.data = data;

      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class UserService {
  /**
   * User Profile
   */
  static me(params: IMeParams, options: IRequestOptions = {}): Promise<Profile> {
    return new Promise((resolve, reject) => {
      params = params || <IMeParams>{};
      const configs: AxiosRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };

      let url = '/me';

      configs.url = url;

      let data = null;
      configs.data = data;

      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * User Activity
   */
  static history(params: IHistoryParams, options: IRequestOptions = {}): Promise<Activities> {
    return new Promise((resolve, reject) => {
      params = params || <IHistoryParams>{};
      const configs: AxiosRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };

      let url = '/history';

      configs.url = url;

      configs.params = { offset: params['offset'], limit: params['limit'] };

      let data = null;
      configs.data = data;

      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
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
export interface IMeParams {}
export interface IHistoryParams {
  /** Offset the list of returned results by this amount. Default is zero. */
  offset?: number;

  /** Number of items to retrieve. Default is 5, maximum is 100. */
  limit?: number;
}
export class Product {
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

  constructor(data?: any) {
    if (data) {
      this['product_id'] = data['product_id'];
      this['description'] = data['description'];
      this['display_name'] = data['display_name'];
      this['capacity'] = data['capacity'];
      this['image'] = data['image'];
    }
  }
}

export class PriceEstimate {
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

  constructor(data?: any) {
    if (data) {
      this['product_id'] = data['product_id'];
      this['currency_code'] = data['currency_code'];
      this['display_name'] = data['display_name'];
      this['estimate'] = data['estimate'];
      this['low_estimate'] = data['low_estimate'];
      this['high_estimate'] = data['high_estimate'];
      this['surge_multiplier'] = data['surge_multiplier'];
    }
  }
}

export class Profile {
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

  constructor(data?: any) {
    if (data) {
      this['first_name'] = data['first_name'];
      this['last_name'] = data['last_name'];
      this['email'] = data['email'];
      this['picture'] = data['picture'];
      this['promo_code'] = data['promo_code'];
    }
  }
}

export class Activity {
  /** Unique identifier for the activity */
  uuid: string;

  constructor(data?: any) {
    if (data) {
      this['uuid'] = data['uuid'];
    }
  }
}

export class Activities {
  /** Position in pagination. */
  offset: number;

  /** Number of items to retrieve (100 max). */
  limit: number;

  /** Total number of items available. */
  count: number;

  /**  */
  history: Activity[];

  constructor(data?: any) {
    if (data) {
      this['offset'] = data['offset'];
      this['limit'] = data['limit'];
      this['count'] = data['count'];
      this['history'] = data['history'];
    }
  }
}

export class Error {
  /**  */
  code: number;

  /**  */
  message: string;

  /**  */
  fields: string;

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code'];
      this['message'] = data['message'];
      this['fields'] = data['fields'];
    }
  }
}
