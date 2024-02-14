const express = require('express');
const router = express.Router();

router.use(logger)

// routers
router.get("/", (req, res) => {
    console.log(req.query.name)
    // get
    res.send("User List")
})

// form and parsing json
router.get("/new", (req, res) => {
    res.render("users/new")
})

router.post("/", (req, res) => {
    const isValid = false
    if(isValid){
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName : req.body.firstName})
    }
    // console.log(req.body.firstName)
    // res.send("Hi")
})

router.post("/", (req, res) => {
    // post
    res.send("Create User")
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        // call id
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{ name : "Dave" }, { name : "Sally" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(id)
    next()
})

// same as the above in less code
// router.get("/:id", (req, res) => {
//     // get
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     // put
//     res.send("User New Form")
// })

// router.delete("/:id", (req, res) => {
//     // delete
//     res.send("User New Form")
// })

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router;

// get / points to the home page and then there is a method to be able to fetch the data from the url and displays it for the Frank Sinatra