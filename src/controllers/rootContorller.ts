import { NextFunction, Request, Response } from "express"
import { controller } from "./decoraters/controller"
import { get } from "./decoraters/routes"
import { use } from "./decoraters/Use"



function requireAuth (req: Request , res: Response, next: NextFunction): void { 
  if(req.session && req.session.loggedIn) { 
    return next()
  } 
  res.status(403)
  res.send('not permitted to enter - please login')


 }



@controller('')
class rootController { 
@get('/')
getRoot(req: Request, res: Response)  { 
  if(req.session && req.session.loggedIn) { 
    res.send(`
    <div>
     <div> your are logged in </div>
     <a href='/auth/logout'> LogOut </a>
     </div>
    
    `)
  
  } else { 
    res.send(`
    <div>
     <div> your are NOT logged in </div>
     <a href='/auth/login'> LOGIN </a>
     </div>
    
    `)
  
  }
}
  
@get('/protected')
@use(requireAuth)
getProtected(req: Request , res: Response)  { 
  res.send('welcome to protected area')
  
  
  }

  }

