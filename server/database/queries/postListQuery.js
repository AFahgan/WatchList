const connection = require('../config/connection');

const PostListQuery = (name,episodes,type,user_id)=>{
    const sql ={
    text: 'INSERT INTO list(name,episodes,type,user_id) VALUES ($1, $2, $3,$4) returning *;' ,
    values:[name,episodes,type,user_id]
}
return connection.query(sql)
}

module.exports=PostListQuery;
