import {Request,Response} from 'express'
import {get, controller} from './decoraters'



@controller('/auth')
class LoginController { 
  @get('/login')
  getlogin (req: Request,res: Response): void { 

    res.send(`

      <form method = "POST" > 
        <div>
        <label> email </label>
        <input name ="email" />
        </div>
        <div>
        <label> password </label>
        <input name="password" type = "password" /> 
      </div>
      <button> submit </button> 
      </form>
    `)
}}



