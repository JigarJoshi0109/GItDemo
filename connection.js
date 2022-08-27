const {Pool} = require("pg")
const table = process.argv[2];
const pool = new Pool({
    user: "jigar",
    host: "localhost",
    database: "jigar",
    password:'Jigar2001',
    max: 1, // set pool max size to 20
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    maxUses: 7500,
 
})

module.exports=pool;
