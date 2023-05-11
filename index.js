const express = require('express');
const app = express();
const db =require("./config/config.js");
const Products = require('./models/products.js');
global.dbConnection = db.GetDatabaseConnection;
app.use(express.json())
app.post('/products', (req, res, next) => {
  const productId=req.body.productId
  const prodName = req.body.prodName
  const company = req.body.company
  const price= req.body.price
  const type = req.body.type
  const offer=req.body.offer
  const newProducts = new Products({
    productId: productId,
    prodName:prodName,
    company:company,
    price:price,
    type:type,
    offer:offer
  })
  newProducts.save()
  .then(() => {
    res.status(201).json({ message: 'Product created successfully' });
  })
      .catch((err) => {
        console.log(err);
      });
});
app.get('/search/:key', async (req,res,next)=>{
  let data = await Products.find(
    {
      "$or":[
        {prodName:{$regex:req.params.key}},
        {company:{$regex:req.params.key}},
        {type:{$regex:req.params.key}}
      ]
    }
  )
  res.send(data);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
