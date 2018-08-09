import mongoose from 'mongoose';

import { family } from '../utils/types';

let clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    family: { type: String, required: true }
});

export default mongoose.model('clients', clientSchema);