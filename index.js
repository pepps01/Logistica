const express = require('express')
const app = express()

require("dotenv").config();
// using express router 
const router = express.Router()
const routes = require('./src/routes') 

const {MongoClient} = require('mongodb');
const port = process.env.PORT|4000
const URL =  process.env.URI


console.log(URL)
app.use("/api/V1", routes)

const main = async()=>{

    const client = new MongoClient(URL);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected successfully to server");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

app.listen(port, () => {
  console.log(`Listening to  ${port}`)
})


// https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
// https://www.section.io/engineering-education/nodejs-environment-variables/#purpose-of-environment-variables