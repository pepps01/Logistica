const Router = require("express").Router

const router = Router()


router.get('/get-all', (req,res) => {
    res.send("Welcome")
})




module.exports=router