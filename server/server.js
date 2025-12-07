import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import { inngest, functions } from "./inngest/index.js"
<<<<<<< HEAD
import { serve } from "inngest/express"   
=======
import {serve} from 'inngest/express'
>>>>>>> b1b3d96f1593ac6e9fc74d6606afb1e69cf95eb9

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/',(req,res) => res.send('Server is running'))
app.use("/api/inngest", serve({ client: inngest, functions }));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
