const { AWS, documentClient } = require('../services/aws.service');
const TABLE = require('../constant/table');


class CustomerRepository{
    constructor(){}

    async CustomerList() {
        // this will load all customer data
        const params = {
            TableName: TABLE.TABLE_CUSTOMER,
        };

        let scanResults = [];
        let data, Count = 0;
        do {
            data = await documentClient.scan(params).promise();
            scanResults.push(...data.Items);
            Count += data.Count;
            params.ExclusiveStartKey = data.LastEvaluatedKey;
        } while (data.LastEvaluatedKey);
        
        const Items = scanResults;
        // if (offset && limit) Items = scanResults.slice(offset, limit + offset);
        return { Items, LastEvaluatedKey: data.LastEvaluatedKey, Count };
    }

    async addCustomer() {
        return await {res: "In process"}
    }
}

module.exports = CustomerRepository;