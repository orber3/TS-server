import {NextFunction, Request,Response} from 'express'
import {get, controller , bodyValidator, post} from './decoraters'


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
        <label> passwor </label>
        <input name="password" type = "password" /> 
      </div>
      <button> submit </button> 
      </form>
    `)
}


      @post('/login')
    @bodyValidator('email' , 'password')  

    postLogin(req: Request  , res: Response)  { 
      const {email , password } = req.body

      if(email && password && email==='hi@gmail.com' && password==='1234') { 
    
    req.session = {loggedIn: true}
    res.redirect('/')
      }

      else { 
        res.send('invalid email\password')
      }

    }

    @get('/logout')
  logOut(req: Request , res: Response )  { 
      req.session = undefined
      res.redirect('/')
    
    }



}