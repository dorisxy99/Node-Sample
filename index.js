const express = require('express');
const router = express.Router();

const app = express();

app.use(express.json({extended: false}));

const port = 5000;


router.get("/",(request,response) => {
        response.send("hello world");
});

router.get("/hi",(request,response) => {
    response.send("bye");
});
    
// add router in the Express app.
app.use("/", router);





app.listen(port, () => console.log('server running'));