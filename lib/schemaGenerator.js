const lodash = require("lodash");

function generateSchema(data) {
  if (lodash.isArray(data)) {
    const items = [];

    data.forEach((item) => {
      items.push(generateSchema(item));
    });

    return {
      type: "array",
      items,
    };
  } else if (lodash.isObject(data)) {
    const properties = {};

    for (key in data) {
      properties[key] = generateSchema(data[key]);
    }

    return {
      type: "object",
      properties,
      required: Object.keys(properties),
    };
  } else if (lodash.isString(data)) {
    return { type: "string" };
  } else if (lodash.isNumber(data)) {
    return { type: "number" };
  } else if (lodash.isBoolean(data)) {
    return { type: "boolean" };
  } else if (lodash.isNull(data)) {
    return { type: "null" };
  } else {
    throw new Error("Unsupported data type");
  }
}


console.log(generateSchema([1,23,3]))
module.exports= generateSchema;



