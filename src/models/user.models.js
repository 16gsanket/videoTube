import mongoose , {Schema} from "mongoose";

const userSchema = new Schema(
    {

        username:{
            type:String,
            required:true,
            unique : true,
            lowercase:true,
            trim : true,
            index: true
        },
        email:{
            type:String,
            required:true,
            unique : true,
            lowercase:true,
            trim : true,
        },
        fullname:{
            type:String,
            required:true,
            trim : true,
            index:true,
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,    
        },
        watchHistory :[
            {
                type: Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true, "Password is Required"]
        },
        refreshToken:{
            type:String
        }
    },{timestamps:true}
)


// this creates a document User(users) with reference to the schema userSchema
const User = mongoose.model("User",userSchema)