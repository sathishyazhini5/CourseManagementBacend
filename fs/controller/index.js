const service=require("./service")
const saveUser=async(req,res)=>
{
    const mailcheck= await service.saveDetails(req.body)
    if(mailcheck)
    {
    res.status(200).json("Registered successfully")
}
else 
{
    res.status(400).json("Already exists")
}
}

const finds=async(req,res)=>
{
   const find = await service.finddata()
   if(find)
   {
   res.status(200).json({
    message : 'Retreived successfully',
    data
    : { find}
   })
   }
   else
   {
    res.status(400).json('Error while retreiving details')
   }
}

//course
const saveUsers=async(req,res)=>
{
    const mailcheck= await service.saveDetail(req.body)
    if(mailcheck)
    {
    res.status(200).json("Registered successfully")
}
else 
{
    res.status(400).json("Already exists")
}
}

const getcourse=async(req,res)=>
{
    const finds=await service.findcourse()
    res.send(finds)
}

//fees
const savefees=async(req,res)=>
{
    const save=await service.saveData(req.body)
    res.send(save)
}

const getfees=async(req,res)=>
{
    const finds=await service.findfees()
    res.send(finds)
}

//enrollment
const saveenroll=async(req,res)=>
{
    const save=await service.saveDatas(req.body)
    res.send(save)
}

const getenroll=async(req,res)=>
{
    const finds=await service.findenroll()
    res.send(finds)
}

// trainer details
const savetrain=async(req,res)=>
{
    const save=await service. savingtrainer(req.body)
    res.send(save)
}

const gettrainer=async(req,res)=>
{
    const finds=await service.findtrainer()
    res.send(finds)
}

//assignment details
const saveassign =async(req,res)=>
{
    const save=await service. savingaasign(req.body)
    res.send(save)
}

const getassign=async(req,res)=>
{
    const finds=await service.findassign()
    res.send(finds)
}

//assignment upload
const saveupload =async(req,res)=>
{
    const save=await service. savingupload(req.body)
    res.send(save)
}

const getasp=async(req,res)=>
{
    const finds=await service.findAsp()
    res.send(finds)
}

//attendance
const saveattendance=async(req,res)=>
{
    const save=await service. saveattened(req.body)
    res.send(save)
}

const getattend=async(req,res)=>
{
    const finds=await service.findattend()
    res.send(finds)
}

//placement details
const saveplace=async(req,res)=>
{
    const save=await service. savingplace(req.body)
    res.send(save)
}

const getplacement=async(req,res)=>
{
    const finds=await service.findplacement()
    res.send(finds)
}


// admin login
const savingadmin=async(req,res)=>
{
    const save=await service. saveadmin(req.body)
    res.send(save)
}

const loginuser=async(req,res)=>
{
    const mailcheck=await service.login(req.body)
    if(mailcheck.length==0)
    {
        res.send("Username not found")
    }
    else if(req.body.Password==mailcheck[0].Password)
    {
        res.send("login successful")
    }
    else
    {
      res.send("incorrect password")
    }
}

const getadmin=async(req,res)=>
{
    const finds=await service.findadmin()
    res.send(finds)
}

//user login
const savinguser=async(req,res)=>
{
    const save=await service. saveUser(req.body)
    res.send(save)
}

const loginusers = async (req, res) => {
    const mailcheck = await service.userlogin(req.body);
    if (mailcheck.length === 0) {
      res.status(400).json({ error: "Username not found" });
    } else if (req.body.Password === mailcheck[0].Password) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  };
  

const getuser=async(req,res)=>
{
    const finds=await service.finduser()
    res.send(finds)
}


module.exports=
{
    saveUser,
    finds,
    saveUsers,
    getcourse,
    savefees,
    getfees,
    saveenroll,
    getenroll,
    savetrain,
    gettrainer,
    saveassign,
    getassign,
    saveupload,
    getasp,
    saveattendance,
    getattend,
    saveplace,
    getplacement,
    savingadmin,
    loginuser,
    getadmin,
    savinguser,
    loginusers,
    getuser
}