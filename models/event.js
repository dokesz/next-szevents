import { Schema, model, models } from "mongoose";
import User from './user.js';

const EventSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'Please provide a prompt.'],
    },
    tag: {
        type: String,
        required: [true, 'Please provide a tag.'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description.'],
    },
    date: {
        type: Date,
        required: [true, 'Please provide a date.'],
    },
    image: {
        type: String,
        required: [true, 'Please provide an image.'],
    }
});

const Event = models.Event || model('Event', EventSchema);

export default Event;