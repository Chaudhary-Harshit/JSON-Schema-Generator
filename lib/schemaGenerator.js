const lodash= require("lodash")

function getType(data) {
    if (lodash.isArray(data)) return 'array';
    if (lodash.isObject(data)) return 'object';
    if (lodash.isString(data)) return 'string';
    if (lodash.isNumber(data)) return 'number';
    if (lodash.isBoolean(data)) return 'boolean';
    if (lodash.isNull(data)) return 'null';
    return 'unknown';
}
function generateSchema(data){
    if(lodash.isArray(data)){


        return {
            type: "array",
            items: generateSchema(data[0])

        };
    }

    else if(lodash.isObject(data)){
        const properties= {}

        for(key in data){
            properties[key]= generateSchema(data[key]);
        }

        return {
            type: "object",
            properties,
            required: Object.keys(properties)


        }
    }

    else if (lodash.isString(data)) {
        return { type: 'string' };
    } else if (lodash.isNumber(data)) {
        return { type: 'number' };
    } else if (lodash.isBoolean(data)) {
        return { type: 'boolean' };
    } else if (lodash.isNull(data)) {
        return { type: 'null' };
    } else {
        throw new Error('Unsupported data type');
    }
}





//test

const test= generateSchema([1,"applw"]);

console.log(test);