const transactionTypeDefs = `#graphql

type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String!
    date: String!
}

type Query {
    transactions: [Transaction!]
    transaction(transactionId: ID!): Transaction
}

type Mutation {
    createTransaction(input: createTransaction!): Transaction!
    updateTransaction(input: updateTransaction!): Transaction!
    deleteTransaction(transactionId: ID!): Transaction!
}

input createTransaction {
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
}

input updateTransaction {
    _id: ID!
    description: String
    paymentType: String
    category: String
    amount: Float
    location: String
    date: String
}
`

export default transactionTypeDefs;