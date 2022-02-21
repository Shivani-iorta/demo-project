'use strict';

const BaseManager = require('./base.manager');
const ValidationError = require('../exception/validation.error');
const NotFound = require('../exception/not-found.error');
const customer_repository = require('../repository/customer.repository.js');



class Customer extends BaseManager {
    constructor(){
        super();
        this.CustomerRepository = new customer_repository();
    }

    async getCustomerList() {
        // return {test: "abcd unique", return_data: customer_repository()};
        
        try {
            const response = await this.CustomerRepository.CustomerList();
            const RespData = {
                status: 200,
                msg: "Success",
                data: response
            }
            return RespData;
        }catch(err) {
            // 
            throw err;
        }
    }

    async addNewCustomer() {
        try {
            const response = await this.CustomerRepository.addCustomer();
            const RespData = {
                status: 200,
                msg: "Success",
                data: response
            }
            return RespData;
        }catch(err) {
            // 
            throw err;
        }
    }
}
module.exports = Customer;