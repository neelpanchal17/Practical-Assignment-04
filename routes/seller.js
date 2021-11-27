const express = require('express');
const sellernanme = require('../arrays/add_seller');
const router = express.Router();
router.use(express.json());
const sellername = require("../arrays/add_seller");
const { route } = require('./company');
router.get("/",(req,res) => res.send("For The Seller"));
router.post("/addseller",(req,res)=>{
    const { sname } = req.body;
    sellername.push(sname);
    res.json({data:"Seller Added"});
});

//Delete Seller
router.delete("/delete_seller/:seller_name",(req,res)=>{
    const deleteseller = req.params.seller_name;
    const abc = sellername.filter((seller)=>(seller.name === deleteseller));
    if(abc.length > 0)
    {
        var del = sellername.indexOf(abc[1]);
        sellername.splice(del,1);
        res.json({data:"Deleted!"})
    }
    else
    {
        res.json({data:"Something Went Wrong!!"});
    }
});

//display seller details based on productname
router.get("/disp_data/:prodname",(req,res)=>{
    const prodname = req.params.prodname;
    const product_data = require("../arrays/add_product");
    var sell=[];
    const prod = product_data.filter((pd)=>(pd.title === prodname));
    if(prod.length>0)
    {
        sell = sellernanme.filter((seller_details)=>(seller_details.sellerid === prod[0].seller_id));
    }
    else
    {
        sell = "No Data Found!";
    }
    res.json({data:sell})
});
module.exports = router

