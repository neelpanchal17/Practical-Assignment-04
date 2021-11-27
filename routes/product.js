const express = require('express');
const router = express.Router();
router.use(express.json());

//Insert Product
const prodname = require("../arrays/add_product");
router.get('/',(req,res) => res.send("For The Product"));
router.post("/addproduct",(req,res) =>{
    const { newproduct } = req.body;
    prodname.push(newproduct);
    res.json({data:"Product Added"});
});

//Delete Product
router.delete("/delete_product/:prodtitile",(req,res)=>{
    const prodtitile1 = req.params.prodtitile;
    const abc = prodname.filter((delprod) => (delprod.title === prodtitile1));
    if(abc.length > 0)
    {
        var del = prodname.indexOf(abc[1]);
        prodname.splice(del,1);
        res.json({data:"deleted!"});
    }
    else
    {
        res.json({data:"Something Went Worng!!"});
    }
});

//fetch all the product of company
router.get("/fetch_prod/:cid",(req,res)=>{
    const cname = req.params.cid;
    const product_list = prodname.filter((ab) => (ab.company_id === cname));
    res.json({data:product_list});
});

//fetch all the product of a seller
router.get("/fetch_seller/:sid",(req,res)=>{
    const selld = req.params.sid;
    const seller_list = prodname.filter((ab) => (ab.seller_id === selld));
    res.json({data:seller_list});
});
module.exports = router;