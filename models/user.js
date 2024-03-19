const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =require('bcrypt');

const SALT_ROUNDS = 6;

const noteSchema = new Schema ({
    text: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
}, {
    timestamps: true
});


const userSchema = new Schema ({
   name: { type: String, required: true },
   email: {
    type: String,
    unique: true,
    trim: true,
    lowerCase: true,
    required: true
   },
   password: {
    type: String,
    trim: true,
    minLength: 3,
    require: true
   },
   notes: [noteSchema]
}, {
    timestamps: true,
    // toJSON option is used to transform the document when its serialized to JSON
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
   });

   // pres-save hook that will hash the password anythime the password has changed
   userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    // SALT variable detremines how much time it will take to perform the hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
   });


module.exports = mongoose.model('User', userSchema);