
import { connectDB } from "./config/db.js";
import e from "express";
import router from "./router/stud.routes.js";
import dotenv from "dotenv";


dotenv.config();

const app = e();
app.use(e.json());
// app.use(e.bodyParser({ extended: true }));
// app.use(e.urlencoded({ extended: true }));


const PORT = process.env.PORT;

connectDB()

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`server is connected http://localhost: ${PORT}`);
});
