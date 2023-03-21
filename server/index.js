const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const likemeRouter = require('./src/routes/likeme.routes')
const app = express();
const pool = require('../server/src/database/db')
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
const fs = require("fs");
app.use(likemeRouter)

app.use((err, req, res, next) => {
	return res.json({
		message:err.message
	})
})


app.listen(3000)
console.log('serve on port 3000')