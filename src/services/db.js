import mongoose from "mongoose";

const conx = async () => await mongoose.connect('mongodb://localhost/taskuser')

export default conx