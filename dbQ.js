//const pool = require('./connection')



//geting user by id in search
function makeGetUsers({pool}) {
    return async function getUsers({ id }) {
            try {
                var client =  await pool.connect();
                let result = await client.query(`SELECT * FROM jigar WHERE personid=${id};`)
                return result.rows
            } 
            catch(err){
                console.log("Check Query is incorrect");

            }
            finally {
               client.release()
            }
        
    }

    function temp(){

    }

}
function makeUsers({pool}) {
    return async function postUser({ id, lastname, firstname, address, city }) {
        try {
            var client =  await pool.connect();
            let result = await client.query(`insert into jigar(personid, lastname,firstname,address,city) values 
        (${id},'${lastname}','${firstname}','${address}','${city}');`)

        return result.command
            
        } catch (err) {
            console.log("Check Query is incorrect");
            
        }
        finally {
            client.release()
         }
        
    }
}

function updateUsers({pool}) {
    return async function updateUsers({ id, lastname, firstname, address, city }) {

        try {
            var client =  await pool.connect();
            let result = await client.query(`update jigar set lastname='${lastname}',firstname='${firstname}',address='${address}',city='${city}' where personid=${id};`);
            console.log('Updated Sucessfully');
            return result.command
            
        } catch (err) {
            console.log("Check Query is incorrect");
            
        }
        finally {
            client.release()
         }
    }

}

function deleteUsers({pool}) {
    return async function deleteUsers({ id }) {
        try {
            var client =  await pool.connect();
            let result = await client.query(`DELETE FROM jigar WHERE personid=${id};`);
        console.log('Deleted Sucessfully');

        return result.command
            
        } catch (err) {
            console.log("Check Query is incorrect");
        }
        finally {
            client.release()
         }
        
    }


}

module.exports = { makeGetUsers, makeUsers, updateUsers, deleteUsers }