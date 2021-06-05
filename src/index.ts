import bodyParser from 'body-parser';
import express, {Request , Response} from 'express'
import {router} from './routes/loginRoute'
import cookieSession from 'cookie-session';



const app=express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({keys: ['asdasd']}))
app.use(router)



app.get('/', (req: Request, res: Response)  => { 

  res.send(`
    <div>
    <h1> hey </h1>
    </div>

  `)


})

app.listen(3000, () => { 

  console.log('listen on port 3000')
})

