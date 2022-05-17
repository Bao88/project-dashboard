
// getting-started.js
const mongoose = require('mongoose');

class Setup {
    database = process.env.MONGO_INITDB_DATABASE

    /**
     * Initiate database
     */
    async initiate() {
        try {
            const databaseURL = this.getDatabaseURL()
            const connect = await mongoose.connect(databaseURL);
            console.log(`Connected to `)
        } catch (error) {
            console.log(error)
        }

    }

    /**
     * getDatabaseURL
     * @returns string - URL to connect to MongoDB database
     */
    private getDatabaseURL(){
        if(process.env.NODE_ENV === 'localhost') {
            const prefix = 'mongodb://'
            const authentication = `${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}`
            const internalName = `@${process.env.MONGO_INITDB_INTERNAL_NAME}:${process.env.MONGO_INITDB_PORT}/`
            const database = process.env.MONGO_INITDB_DATABASE
            return `${prefix}${authentication}${internalName}${database}`
        } else return process.env.MONGO_URL
       
    }
}
const setup = new Setup()
export default setup