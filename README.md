# JSON Schema Generator

A simple library to generate JSON Schema from JSON data.

## Installation

```sh
npm install json-schema-generator

# Usage

const { generateSchema } = require('json-schema-generator');

const data = {
    name: 'John Doe',
    age: 30,
    isEmployed: true,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        postalCode: '12345'
    },
    hobbies: ['reading', 'gaming', 'hiking', 42, null]
};

const schema = generateSchema(data);
console.log(JSON.stringify(schema, null, 2));

