A cart api service.

## Tech Stack
* Node
* JSON Schema Faker
* Firebase functions
* Firebase hosting

## Deployed API service

* Uncached Service - [Cart API](https://cartservice-40668.firebaseapp.com/cart)
* Cached Service - [Cart API](https://cartservice-40668.firebaseapp.com/cart-cached)

## How its working
Before deployment in firebase, the pre-deploy hook runs the `generateData` to create `functions/database/db.json` and sends that back as the reponse for the cart API.