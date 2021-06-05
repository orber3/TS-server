import {Router,Request,Response, NextFunction} from 'express'

const router = Router()

interface requestWithBody extends Request { 

  body: { [key: string]: string | undefined}

}
 
 function requireAuth (req: Request , res: Response, next: NextFunction): void { 
  if(req.session && req.session.loggedIn) { 
    return next()
  } 
  res.status(403)
  res.send('not permitted to enter - please login')


 }


router.get('/login', (req: Request,res: Response) => { 

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
})



router.post('/login' , (req: requestWithBody , res: Response) => { 
  const {email , password } = req.body

  if(email && password && email==='hi@gmail.com' && password==='1234') { 
req.session = {loggedIn: true}
res.redirect('/')
  }
  else { 
    res.send('invalid email\password')
  }

})

router.get('/' , (req: Request, res: Response) => { 
if(req.session && req.session.loggedIn) { 
  res.send(`
  <div>
   <div> your are logged in </div>
   <a href='/logout'> LogOut </a>
   </div>
  
  `)

} else { 
  res.send(`
  <div>
   <div> your are NOT logged in </div>
   <a href='/login'> LOGIN </a>
   </div>
  
  `)

}


})

router.get('/logout', (req: Request , res: Response ) => { 

  req.session = undefined
  res.redirect('/')

})

router.get('/protected' , requireAuth , (req: Request , res: Response) => { 
res.send('welcome to protected area')



})

export {router}