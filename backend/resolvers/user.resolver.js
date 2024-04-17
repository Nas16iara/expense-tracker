import {users} from '../dummyData/data.js';
const userResolvers = {
    Mutation: {},
    Query: {
        users: (_,_,{ req, res}) => {
            return users;
        },
        user: (_, {userId}, ) => {
            return users.find((user) => user._id === userId);
        },
    },
};

export default userResolvers;