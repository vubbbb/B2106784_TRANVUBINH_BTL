const config = {
    app: {
        port: process.env.PORT || 3333,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/vubinh-library"
        }
};
module.exports = config