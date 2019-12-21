require("express-group-routes");

//instan express
const express =require("express");
const cors =require("cors");
const app = express();
const port = process.env.PORT || 5000
// 
app.use(cors());

app.use(express.json());

const AccountController = require("./controllers/account");
const ArticleController = require("./controllers/article");
const AuthController = require("./controllers/auth");
const CategoryController = require("./controllers/category");
const {auth, authorized} = require ("./middleware");


app.get("/",(req, res) =>{
    res.send("<h1>Hello Express</h1>");
});

app.group("/api/v1", router =>{
    // router.get("/accounts", AccountController.index);
    // router.get("/account/:id", AccountController.show);
    // router.post("/account", AccountController.create);
    // router.patch("/account/:id", AccountController.update);
    // router.delete("/account/:id", AccountController.delete);
    // router.get("/article/:account_id",auth,authorized,AccountController.create);
    //number 1
    router.post("/category", CategoryController.create);
    router.get("/categories", CategoryController.index);
    router.get("/popular",ArticleController.ascending);
    router.delete("/category/:id",CategoryController.delete);
    //number 2
    router.get("/articles", ArticleController.index);
    //number 3
    router.get("/category/:category_id/articles",ArticleController.getCat);
    //number 4
    router.put("/article/:id",ArticleController.update);
    router.post("/article", ArticleController.create);
    router.delete("/article/:id",ArticleController.delete);
    //number 5
    router.get("/article/:id", ArticleController.detail);
    //number 9
    router.get("/user/:user_id/articles",ArticleController.getUser);
    //number 10
    // router.post("/login", AuthController.login);
    //number 11
    // router.post("/register", AuthController.register)
});

app.use((err, req, res, next)=>{
    if(err.name==="UnauthorizedError"){
        res.status(401).json({message: "You are not authorized."});    
    }else{
        next(err);
    }
});

app.listen(port, ()=> console.log(`server is listening to port :${port}`));