const pool = require('../database/db')

const addLike = async (id) => {
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};



module.exports = {  addLike };
