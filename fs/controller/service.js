const mongoose=require('mongoose')



//  center details
const CenterSchema=new mongoose.Schema({
    CenterID:{
        type:String
    },
    CenterName:{
        type:String
    },
    CenterAddress:[{
       No:String,
       Street:String,
       Address:String,
       Pincode:String
    }],
    phone :{
        type:String
    },
    email:{
        type:String
    } ,
    website:{
        type:String
    }
    

})
const centerModel=mongoose.model("diff",CenterSchema)

const saveDetails=async(data)=>
{
    const match=await centerModel.aggregate([{$match:{email:data.email}}])
    if(match.length==0)
   {
    const savedata=new centerModel(data)
    const save=await savedata.save()
    return save
}
}

const finddata=async()=>
{
   const find=await centerModel.find()
   return find
}

//course details
const CousreSchema=new mongoose.Schema({
    "CouseID":"String",
    "CourseName":"String",
    "BatchID":"String",
    "Course_fees":"String"
})
 const CourseModel=mongoose.model("course",CousreSchema)
 
 const saveDetail=async(data)=>
 {
     const match=await CourseModel.aggregate([{$match:{CouseID:data.CouseID}}])
     if(match.length==0)
     {
      // Generate BatchID automatically if not provided
      if (!data.BatchID) {
        data.BatchID = generateBatchID();
      }

     const savedata=new CourseModel(data)
     const save=await savedata.save()
     return save
 }
 }
 function generateBatchID() {
    // Logic to generate a unique batch ID, for example, using timestamp
    return 'BATCH_' + Date.now();
}


 const findcourse=async()=>
{
   const find=await CourseModel.find()
   return find
}



//fees
const FeesSchema=new mongoose.Schema({
"FeesID":"String",
"CourseID":"String",
"StudentID":[{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'enrolment'}],
"Totalfeesamount":"String",
"Paidamount":"String",
"Pendingamount":"String",
})
const FeesModel = new mongoose.model("fees",FeesSchema)

const saveData=async(data)=>
{
 
    const savedata=new FeesModel(data)
    const save=await savedata.save()
    return save
}

const findfees=async()=>
{
   const find=await FeesModel.find()
   return find
}


// Enrolment
const EnrolmentSchema=new mongoose.Schema({
    "EnrolmentID":"String",
    "StudentID":"String",
    "TraineeName":"String",
    "Mobile":"String",
    "emailid":"String",
    "Address":"String",
    "Qualification":"String",
    "PreviousExperience":"String",
    "Course":"String",
    "Referedby":"String",
    "EnrolledDate":"String",
    "Password":"String"
})
const EnrolmentModel=mongoose.model("enrolment",EnrolmentSchema)

const saveDatas=async(data)=>
{
    const match=await EnrolmentModel.aggregate([{$match:{EnrolmentID:data.EnrolmentID}}])
    if(match.length==0)
   {
    const savedata=new EnrolmentModel(data)
    const save=await savedata.save()
    return save
}
}

const findenroll=async()=>
{
   const find=await EnrolmentModel.find()
   return find
}

//trainer
const TrainerSchema=new mongoose.Schema({
    "TraineerID": {
        type: String,
        unique: true
    },
    "Name": String,
    "Mobile": String,
    "email": String,
    "Address": String,
    "Password": String,
    "CourseName": String
});

TrainerSchema.pre('save', async function (next) {
    if (!this.TraineerID) {
        this.TraineerID = generateTraineerID();
    }
    next();
});

function generateTraineerID() {
    return 'TRAINER_' + Date.now();
}

const TrainerModel = mongoose.model("trainer", TrainerSchema);

const savingtrainer = async (data) => {
    const match = await TrainerModel.findOne({ TraineerID: data.TraineerID });
    if (!match) {
        const trainer = new TrainerModel(data);
        const savedTrainer = await trainer.save();
        return savedTrainer;
    } else {
        throw new Error("Trainer with this ID already exists!");
    }
};


const findtrainer=async()=>
{
   const find=await TrainerModel.find()
   return find
}


//assignment details
const AssignmentSchema=new mongoose.Schema({
    "AssigmentID":"String",
    "CourseID":[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'enrolment'}],
    "TaskName":"String",
    "BatchId":"String",
    "StartDate":"String",
    "EndDate":"String",
    "TaskID":"String"
})
const AssignmentModel=mongoose.model("assignment",AssignmentSchema)

const savingaasign=async(data)=>
{
    const savedata=new AssignmentModel(data)
    const save=await savedata.save()
    return save
}


const findassign=async()=>
{
   const find=await AssignmentModel.find()
   return find
}

//assignment upload
const AspSchema=new mongoose.Schema({
    "StudentID":"String",
    "TaskID":"String",
    "CourseID":[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }],
    "BatchID":[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }],
    "AssignmentID":[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assignment'
    }],
    "Taskname":"String",
    "Uploadtask":"String",
    "CompletedDate":"String",
})
const AspModel=mongoose.model("asp",AspSchema)
const savingupload=async(data)=>
{
   
    const savedata=new AspModel(data)
    const save=await savedata.save()
    return save
}


const findAsp=async()=>
{
   const find=await AspModel.find()
   return find
}

//Attendance
const AttendanceSchema=new mongoose.Schema({
    "StudentID":"String",
    "Name":"String",
    "Course":"String",
    "BatchId":"String",
    "StartDate":"String",
    "EndDate":"String",
    "isPresent":"String"
   
})
const AttendanceModel=mongoose.model("attendance",AttendanceSchema)
const saveattened=async(data)=>
{
    const match=await AttendanceModel.aggregate([{$match:{StudentID:data.StudentID}}])
    if(match.length==0)
   {
    const savedata=new AttendanceModel(data)
    const save=await savedata.save()
    return save
}
}

const findattend=async()=>
{
   const find=await AttendanceModel.find()
   return find
}



//placementdetails
const placementSchema = new mongoose.Schema({
    "Pid": {
        type: String,
        unique: true
    },
    "CompanyName": String,
    "JoinDate": String,
    "Designation": String,
    "Package": String,
    "CourseEndDate": String
});

placementSchema.pre('save', async function (next) {
    if (!this.Pid) {
        this.Pid = generatePid();
    }
    next();
});

function generatePid() {
    return 'Pid_' + Date.now();
}

const PlacementModel = mongoose.model("placement", placementSchema);

const savingplace = async (data) => {
    try {
        if (!data.Pid) {
            data.Pid = generatePid();
        }
        const match = await PlacementModel.findOne({ Pid: data.Pid });
        if (!match) {
            const placement = new PlacementModel(data);
            const savedPlacement = await placement.save();
            return savedPlacement;
        }
    } catch (error) {
        console.error("Error saving placement:", error);
        throw error;
    }
};



const findplacement=async()=>
{
   const find=await PlacementModel.find()
   return find
}


//admin login
const AdminSchema=new mongoose.Schema({
    "UserName":"String",
    "Password":"String"
 })
const AdminModel=mongoose.model("admin",AdminSchema)

const saveadmin=async(data)=>
{
    const match=await AdminModel.aggregate([{$match:{UserName:data.UserName}}])
    if(match.length==0)
   {
    const savedata=new AdminModel(data)
    const save=await savedata.save()
    return save
}
}

const login=async(data)=>
{
    const match=await AdminModel.aggregate([{$match:{UserName:data.UserName}}])
    return match
}


const findadmin=async()=>
{
   const find=await AdminModel.find()
   return find
}

//user login
const UserSchema=new mongoose.Schema({
    "UserName":"String",
    "Password":"String"
 })
const UserModel=mongoose.model("user",UserSchema)
const saveUser=async(data)=>
{
    const match=await UserModel.aggregate([{$match:{UserName:data.UserName}}])
    if(match.length==0)
   {
    const savedata=new UserModel(data)
    const save=await savedata.save()
    return save
}
}

const userlogin=async(data)=>
{
    const match=await UserModel.aggregate([{$match:{UserName:data.UserName}}])
    return match
}

const finduser=async()=>
{
   const find=await UserModel.find()
   return find
}

module.exports={
    saveDetails,
    finddata,
    saveDetail,
    findcourse,
    saveData,
    findfees,
    saveDatas,
    findenroll,
    savingtrainer,
    findtrainer,
    savingaasign,
    findassign,
    savingupload,
    findAsp,
    saveattened,
    findattend,
    savingplace,
    findplacement,
    saveadmin,
    login,
    findadmin,
    saveUser,
    userlogin,
    finduser
}