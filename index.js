import express from 'express'
const app = express()
import { Client } from "twitter-api-sdk"
import cors from 'cors'
import cron from 'node-cron'



const client = new Client("AAAAAAAAAAAAAAAAAAAAAGAXewEAAAAAHWUwjlE8yksSTdoIryVLZltS6EU%3DhEMWCOwp6Od1vLHNHtJA2QFFNFJMoZSDfkIFDBYLS0sGQ9puD4")

//"1257577057862610951",
//"1125779736872067072"
//"1298730289737293824"


let array = ["1257577057862610951","1125779736872067072","1298730289737293824"]






app.use(cors())


var index = 0

cron.schedule("*/5 * * * * *", async function(){



var obj = (array[index++ % array.length])


const tweet =  await client.tweets.findTweetById(obj, {"expansions": "author_id"})




app.get('/', (req,res) => res.send(tweet))


})





app.listen(4000, () => {


    console.log("server is running")
})




