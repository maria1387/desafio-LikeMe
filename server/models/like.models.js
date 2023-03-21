const pool = require('../database/db')
const addLike = async (id) => {
  const queryText = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
  const values = [id];
  await query(queryText, values);
};

module.exports = { addLike };
