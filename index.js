let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());
app.use(express.json());

app.get("/ping" , (req, res)=>
{
    res.send("Mai zinda hu")
});
app.get("/fact" , (req, res)=>
{
    let temp = req.query.number;
    let ans = 1;
    for(let i=1;i<=temp;i++)
    {
        ans = ans * i;
    }
    res.send(ans)
});

app.listen(3000, ()=>{console.log("Anirudh is alive")});