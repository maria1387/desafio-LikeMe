const pool = require('../database/db')
const {  addLike, } = require("../controllers/post")
// leer toda las tareas
const getAllLikeme = async(req, res, next)=>{
   try{
	   const allLikeme = await pool.query('SELECT * FROM posts')
  
   res.json(allLikeme.rows)
   }catch (error){
	   next(error)
   }
}
//leer una tarea especifica
const getLikeme = async (req, res, next)=>{
   try{
	   const {id} = req.params;
	   const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id])
	   if (result.rows.length === 0) return res.status(404).json({
		   message:'Task not found'
	   })
	res.json(result.rows[0])
   }catch (error){
	   next(error)
   }
}
//crear o agregar tarea 
const createLikeme = async  (req, res, next)=>{
	   const {titulo, url, descripcion} = req.body

try {
	const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
	const values = [titulo, url, descripcion];
	const result = await pool.query(query, values);
	console.log("¡Post agregado!");
	res.send("¡Post agregado con éxito!");
} catch(error){
// // console.log(error.message);
// res.json({error: error.message});
next(error)
}

};

//eliminar tarea 
const deleteLikeme = async  (req, res, next)=>{

	try{
		const {id} = req.params;
		const result = await pool.query('DELETE  FROM posts WHERE id = $1', [id])
		if (result.rowCount === 0) return res.status(404).json({
			message:'Task not found'
		})
	 return res.sendStatus(204);
	}catch (error){
		next(error)
	}

	
}


const updateLikeme = async (req, res, next) => {
		const { id } = req.params;
		try {
		  await addLike(id);
		  res.send("¡Like agregado con éxito!");
		} catch (error){
			next(error)
		}
	  }
  



module.exports = {
   getAllLikeme,
   getLikeme,
   createLikeme,
   deleteLikeme,
   updateLikeme
  

}