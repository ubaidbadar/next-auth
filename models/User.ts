import { Schema, model, models } from 'mongoose';


let modal = models.users;


if (!modal) {
    const User = new Schema({
        name: String,
        email: {
            type: String,
            required: true,
            validate: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 7
        },
        image: {
            type: String,
            validate: /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i
        },
        emailVerified: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true })
    modal = model('users', User);
}


export default modal;