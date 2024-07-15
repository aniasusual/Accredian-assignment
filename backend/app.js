import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import referralRouter from "./routes/referralRoute.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin: "http://localhost:5173", // Add your frontend URL here
    credentials: true, // Allow cookies to be sent with the request
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
}));

app.use("/api/v1", referralRouter);

export default app;