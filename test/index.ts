import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

export class ProductsService {
  /**
   *
   * @param {IRequestOptions} [options] Override http request option.
   * @throws {RequiredError}
   */
  static products(
    parameters: { latitude: number; longitude: number },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    const configs = <AxiosRequestConfig>{ ...options };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/products';

    configs.url = url;

    configs.params = { latitude: parameters['latitude'], longitude: parameters['longitude'] };

    let data = null;
    configs.data = data;

    return axios(configs);
  }
}
export class EstimatesService {
  /**
   *
   * @param {IRequestOptions} [options] Override http request option.
   * @throws {RequiredError}
   */
  static price(
    parameters: { startLatitude: number; startLongitude: number; endLatitude: number; endLongitude: number },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    const configs = <AxiosRequestConfig>{ ...options };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/estimates/price';

    configs.url = url;

    configs.params = {
      startLatitude: parameters['startLatitude'],
      startLongitude: parameters['startLongitude'],
      endLatitude: parameters['endLatitude'],
      endLongitude: parameters['endLongitude']
    };

    let data = null;
    configs.data = data;

    return axios(configs);
  }

  /**
   *
   * @param {IRequestOptions} [options] Override http request option.
   * @throws {RequiredError}
   */
  static time(
    parameters: { startLatitude: number; startLongitude: number; customerUuid?: string; productId?: string },
    options: IRequestOptions = {}
  ): AxiosPromise<any> {
    const configs = <AxiosRequestConfig>{ ...options };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/estimates/time';

    configs.url = url;

    configs.params = {
      startLatitude: parameters['startLatitude'],
      startLongitude: parameters['startLongitude'],
      customerUuid: parameters['customerUuid'],
      productId: parameters['productId']
    };

    let data = null;
    configs.data = data;

    return axios(configs);
  }
}
export class UserService {
  /**
   *
   * @param {IRequestOptions} [options] Override http request option.
   * @throws {RequiredError}
   */
  static me(parameters: {}, options: IRequestOptions = {}): AxiosPromise<Profile> {
    const configs = <AxiosRequestConfig>{ ...options };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/me';

    configs.url = url;

    let data = null;
    configs.data = data;

    return axios(configs);
  }

  /**
   *
   * @param {IRequestOptions} [options] Override http request option.
   * @throws {RequiredError}
   */
  static history(
    parameters: { offset?: number; limit?: number },
    options: IRequestOptions = {}
  ): AxiosPromise<Activities> {
    const configs = <AxiosRequestConfig>{ ...options };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/history';

    configs.url = url;

    configs.params = { offset: parameters['offset'], limit: parameters['limit'] };

    let data = null;
    configs.data = data;

    return axios(configs);
  }
}
export class Product {
  /**
   *
   * @type {string}
   * @memberof Product
   */
  product_id: string;

  /**
   *
   * @type {string}
   * @memberof Product
   */
  description: string;

  /**
   *
   * @type {string}
   * @memberof Product
   */
  display_name: string;

  /**
   *
   * @type {string}
   * @memberof Product
   */
  capacity: string;

  /**
   *
   * @type {string}
   * @memberof Product
   */
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
  /**
   *
   * @type {string}
   * @memberof PriceEstimate
   */
  product_id: string;

  /**
   *
   * @type {string}
   * @memberof PriceEstimate
   */
  currency_code: string;

  /**
   *
   * @type {string}
   * @memberof PriceEstimate
   */
  display_name: string;

  /**
   *
   * @type {string}
   * @memberof PriceEstimate
   */
  estimate: string;

  /**
   *
   * @type {number}
   * @memberof PriceEstimate
   */
  low_estimate: number;

  /**
   *
   * @type {number}
   * @memberof PriceEstimate
   */
  high_estimate: number;

  /**
   *
   * @type {number}
   * @memberof PriceEstimate
   */
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
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof Profile
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof Profile
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof Profile
   */
  picture: string;

  /**
   *
   * @type {string}
   * @memberof Profile
   */
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
  /**
   *
   * @type {string}
   * @memberof Activity
   */
  uuid: string;

  constructor(data?: any) {
    if (data) {
      this['uuid'] = data['uuid'];
    }
  }
}

export class Activities {
  /**
   *
   * @type {number}
   * @memberof Activities
   */
  offset: number;

  /**
   *
   * @type {number}
   * @memberof Activities
   */
  limit: number;

  /**
   *
   * @type {number}
   * @memberof Activities
   */
  count: number;

  /**
   *
   * @type {Activity[]}
   * @memberof Activities
   */
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
  /**
   *
   * @type {number}
   * @memberof Error
   */
  code: number;

  /**
   *
   * @type {string}
   * @memberof Error
   */
  message: string;

  /**
   *
   * @type {string}
   * @memberof Error
   */
  fields: string;

  constructor(data?: any) {
    if (data) {
      this['code'] = data['code'];
      this['message'] = data['message'];
      this['fields'] = data['fields'];
    }
  }
}
