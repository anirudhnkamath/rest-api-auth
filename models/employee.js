import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    salary: {
        required: true,
        type: Number,
        default: 0,
        min: [1, "Salary must be more than 0"]
    }
})
export default mongoose.model("Employee", employeeSchema);