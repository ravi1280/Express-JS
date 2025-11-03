const express = require('express');
const router = express.Router();
router.use(logger);

router.get('/',(req,res)=>{
   res.send("Users Page")
});

router.get('/new',(req,res)=>{
//    res.send("New Users Page")
   res.render("users/new",{username:"Test", email:"Test@example.com"});
});

router.post('/create',(req,res)=>{
    console.log(req.body.username);
   res.send("Create User")
});

// http://localhost:3000/users/admin?name=hello
router.get('/admin',(req,res)=>{
    console.log(req.query.name);
   res.send("Admin Users Page "+ req.query.name)
});

router.get('/error',(req,res)=>{
   //  throw new Error("Something exploded");
});

// http://localhost:3000/users/6
// router.get('/:id',(req,res)=>{
//    const userId = req.params.id;
//    res.send(`User Page for User ID: ${userId}`);
// });
// router.put('/:id',(req,res)=>{
//    const userId = req.params.id;
//    res.send(`Update User Page for User ID: ${userId}`);
// });
// router.delete('/:id',(req,res)=>{
//    const userId = req.params.id;
//    res.send(`Delete User Page for User ID: ${userId}`);
// });

router.route('/:id')
   .get((req,res)=>{
      const userId = req.params.id;
      res.send(`User Page for User ID: ${userId}`);
   })
   .put((req,res)=>{
      const userId = req.params.id;
      res.send(`Update User Page for User ID: ${userId}`);
   })
   .delete((req,res)=>{
      const userId = req.params.id;
      res.send(`Delete User Page for User ID: ${userId}`);
   });


   function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
}
module.exports = router;