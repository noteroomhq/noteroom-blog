
import express from "express"
import blogRouter from "./blogRouter.js"
import { join, dirname } from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.set("view engine", "ejs")
app.set("views", join(__dirname, "../views"))

app.use(express.static(join(__dirname, "../public")))
app.use("/blog", blogRouter())

app.get("/", (req, res) => {
    res.render("home")
})
app.get("/about-us", (req, res) => {
    res.render("about-us")
})
app.get("/support", (req, res) => {
    res.render("support")
})


app.listen(3000, () => {
    console.log(`Static server is running on port 3000`)
})
