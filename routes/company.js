const express = require('express');
const router = express.Router();
router.use(express.json());
const cname = require("../arrays/add_company");
router.get('/',(req,res) => res.send("For The Company!"));

//Insert Company
router.post("/addcompany",(req,res) => {
    const { newcompany } = req.body;
    cname.push(newcompany);
    res.json({data:"Company Added"});    
});

//company details based on product name
router.get("/:prodname",(req,res)=>{
  const prodname = req.params.prodname;
  const prod = require("../arrays/add_product");
  var com =[];
  const prod1 = prod.filter((a)=>(a.title === prodname));
  if(prod1.length >=0)
  {
    com = prod.filter((b)=>(b.company_id === prod1[0].company_id));
  }
  else
  { 
    com ="No Data Found!!";  
  }
  res.json({data:com});
});

//delete Company
router.delete("/delete_name/:cname1",(req,res)=>{
    const companyname1 = req.params.cname1;
    const abc = cname.filter((delcom) => (delcom.name === companyname1));
    if(abc.length > 0)
    {
        var del = cname.indexOf(abc[1]);
        cname.splice(del,1);
        res.json({data:"Deleted!!"})
    }
    else
    {
        res.json({data:"Something Went Wrong!!"});
    }
});
module.exports = router;

