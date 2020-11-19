import { createStore, combineReducers } from 'redux';

// https://www.youtube.com/watch?v=3sjMRS1gJys

// Default fee for policy and starting capital.
const fee = 20;
const initial = 1000;

// Action Creators
//

const createPolicy = (name) => {
    return ({
        type: "CREATE_POLICY",
        payload: {
            name: name,
            fee: fee
        }
    });
};

const deletePolicy = (name) => {
    return ({
        type: "DELETE_POLICY",
        payload: {
            name: name
        }
    });
};

const createClaim = (name, amount) => {
    return ({
        type: "CREATE_CLAIM",
        payload: {
            name: name,
            amount: amount
        }
    });
};


// Reducers
//
// * Functions that take the current state and an actions.
// * Do not change existing data. Create a brand new data structure!

const claims = (claims = [], action) => {
    if (action.type === "CREATE_CLAIM") {
        return [...claims, action.payload];
    } else {
        return claims;
    }
};

const accounting = (funds = initial, action) => {
    if (action.type === "CREATE_CLAIM") {
        return funds - action.payload.amount;
    } else if (action.type === "CREATE_POLICY") {
        return funds + action.payload.amount;
    }
    return funds;
};

const policies = (policies = [], action) => {
    if (action.type == "CREATE_POLICY") {
       return [...policies, action.payload.name];
    }
    else if (action.type == "DELETE_POLICY") {
       return policies.filter(policy => policy != action.payload.name);
    }
    return policies;
};

// Create Dispatch Redux.
//
// Wire together the reducers together.
//
const reducers = combineReducers( {
    claims: claims,
    accounting: accounting,
    policies: policies
});

// Create the Redux store.
//
const store = createStore(reducers);