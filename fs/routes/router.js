const express=require('express')
const router=express.Router()
const UserFunctions=require('../controller/index')

let routes=(app)=>
{

    // center details
    router.post('/save',UserFunctions.saveUser) ,
    router.get('/find',UserFunctions.finds)
    

    // course
    router.post('/saves',UserFunctions.saveUsers),
    router.post('/findcourse',UserFunctions.getcourse)

    // fees
    router.post('/sav',UserFunctions.savefees)
    router.post('/findfees',UserFunctions.getfees)

//  enrollment
router.post('/savenroll',UserFunctions.saveenroll)
router.post('/findenroll',UserFunctions.getenroll)

// trainer details
router.post('/savetrainer',UserFunctions.savetrain)
router.post('/findtrainer',UserFunctions.gettrainer)

// assignment details
router.post('/saveassign',UserFunctions.saveassign)
router.post('/findassign',UserFunctions.getassign)

// assignment upload
router.post('/saveupload',UserFunctions.saveupload)
router.post('/findasp',UserFunctions.getasp)

//attendance
router.post('/saveattened',UserFunctions.saveattendance)
router.post('/findattend',UserFunctions.getattend)

// placement details
router.post('/saveplace',UserFunctions.saveplace)
router.post('/findplace',UserFunctions.getplacement)

// admin login
router.post('/saveadmin',UserFunctions.savingadmin)
router.post('/login',UserFunctions.loginuser)
router.post('/findadmin',UserFunctions.getadmin)

//user login
router.post('/saveuser',UserFunctions.savinguser)
router.post('/userlogin',UserFunctions.loginusers)
router.post('/finduser',UserFunctions.getuser)


    app.use('/api',router)

}
module.exports=routes