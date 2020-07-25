const { servicesVersion } = require("typescript")

const servicesOptions = {
  client: 'global client'
}

class TestService {
  constructor(client) {
    this._client = client || servicesOptions.client
  }

  get instance() {
    return this._client ? this._client : servicesOptions.client
  }
  aa() {

    console.log(' servicesOptions.client', servicesOptions.client, this.instance)
    console.log(this.instance + ' call method aa')
  }

  bb() {
    console.log(this.instance + ' call method bb')
  }
}

const TestServiceInstance = new TestService()
TestServiceInstance.aa()
console.log('\n\n\n')
const TestServiceInstance2 = new TestService('current client')
TestServiceInstance2.aa()