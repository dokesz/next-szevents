import { Schema, model, models } from "mongoose";

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
    image: {
        type: String,
        required: [true, 'Please provide an image.'],
    }
});

const Event = models.Event || model('Event', EventSchema);

export default Event;