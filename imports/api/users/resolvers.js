export default {
    Query: {
        user(obj, args, { user }) {
            console.log('11111');
            console.log(user);
            return user || {};
        }
    },
    User: {
        email: (user) => {
            console.log('-------------------');
            console.log(user);
            return user.emails[0].address;
        }
    }
};