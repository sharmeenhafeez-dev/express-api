const {Schema,model} = require ('mongoose')


const userSchema = new Schema(
    {
        username :{
                type:String,
                 required : true
               },
               email :{
                type:String,
                 required : true,
                 unique : true
               },
               password :{
                type:String,
                 required : true
               },
               userimage :{
                type:String,
                required : true

               },

               role: {
                type: String,
                required: true,
                default: "user"
            },
               joining :{
                type:Date,
                 default : Date.now
               }

    }
)
const User = model ('user', userSchema)

module.exports = User