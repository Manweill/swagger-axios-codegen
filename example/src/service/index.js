import axios from 'axios';
export class ProductsService {
  /**
   * Product Types
   */
  static products(params, options = {}) {
    return new Promise((resolve, reject) => {
      params = params || {};
      const configs = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/products';
      configs.url = url;
      configs.params = { latitude: params['latitude'], longitude: params['longitude'] };
      let data = null;
      configs.data = data;
      axios(configs).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
export class EstimatesService {
  /**
   * Price Estimates
   */
  static price(params, options = {}) {
    return new Promise((resolve, reject) => {
      params = params || {};
      const configs = { ...options, method: 'get' };
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
  static time(params, options = {}) {
    return new Promise((resolve, reject) => {
      params = params || {};
      const configs = { ...options, method: 'get' };
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
  static me(params, options = {}) {
    return new Promise((resolve, reject) => {
      params = params || {};
      const configs = { ...options, method: 'get' };
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
  static history(params, options = {}) {
    return new Promise((resolve, reject) => {
      params = params || {};
      const configs = { ...options, method: 'get' };
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
export class Product {
  constructor(data) {
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
  constructor(data) {
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
  constructor(data) {
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
  constructor(data) {
    if (data) {
      this['uuid'] = data['uuid'];
    }
  }
}
export class Activities {
  constructor(data) {
    if (data) {
      this['offset'] = data['offset'];
      this['limit'] = data['limit'];
      this['count'] = data['count'];
      this['history'] = data['history'];
    }
  }
}
export class Error {
  constructor(data) {
    if (data) {
      this['code'] = data['code'];
      this['message'] = data['message'];
      this['fields'] = data['fields'];
    }
  }
}
//# sourceMappingURL=index.js.map