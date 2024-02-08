// express
const express = require("express");
const app = express();
// 
app.use(logger);

// public
app.use(express.static("public"))

// forms
app.use(express.urlencoded( { extended: true } ))

// parse json
app.use(express.json())

// ejs
app.set("view engine", "ejs")


// route
app.get('/', logger, logger, logger, (req, res) => {
    // console.log("Here")
    // status code
    // res.sendStatus(400)
    // json code
    // res.json({ message : "Error" });
    // send data 
    // res.download("server.js")
    // view html
    res.render("index", { text : "World" })
})

// router
const userRouter = require("./routes/users")
// const postRouter = require("./routes/posts")

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

// use router
app.use('/users', userRouter)
// app.use('/posts', postRouter)

app.listen(3001)