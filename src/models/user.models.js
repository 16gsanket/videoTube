import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"

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


// this is used for saving the password in the encrypter format
userSchema.pre("save" , async function(next){


    if(!this.modified("password")) return next();

    this.password = bcrypt.hash(this.password,10);
    next()
})

// following method tp check the password and is to be mointed on the userSchema directly
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = function(){
    var token = jwt.sign(
        { 
          id = this._id,
          email = this.email
         },
         process.env.ACCESS_TOKEN_SECRET, 
         { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
        );
}
userSchema.methods.generateRefreshToken = function(){
    var token = jwt.sign(
        { 
          id = this._id,
         },
         process.env.REFRESH_TOKEN_SECRET, 
         { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
        );
}


// this creates a document User(users) with reference to the schema userSchema
const User = mongoose.model("User",userSchema)