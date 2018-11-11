const productsSchema = {
    type: 'object',
    properties: {
      products: {
        type: 'array',
        minItems: 6,
        maxItems: 10,
        uniqueItems: true,
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              faker: 'random.uuid'
            },
            brandName: {
              type: 'string',
              faker: 'commerce.productName'
            },
            productName: {
              type: 'string',
              faker: 'commerce.department'
            },
            packaging: {
              type: 'string',
              faker: 'commerce.productMaterial'
            },
            price: {
              type: 'number',
              faker: 'commerce.price'
            },
            image: {
              type: 'image',
              faker: 'custom.securedImgProtocol'
            }
          },
          required: ['id', 'brandName', 'productName', 'packaging', 'price', 'image']
        }
      }
    },
    required: ['products']
  };
  
module.exports = productsSchema;