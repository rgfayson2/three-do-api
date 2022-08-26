import functions from ("firebase-functions");
import express from "express"
import cors from "cors"
import { getTasks, createTasks, updateTasks, deleteTasks } from "./src/task.js";


const app = express()
app.use(cors())
app.use(express.json())


app.get('/tasks', getTasks)
app.post('/tasks', createTasks)
app.patch('/tasks/:taskId', updateTasks)
app.delete('/tasks/:taskId', deleteTasks)


export const api = functions.https.onRequest(app);

