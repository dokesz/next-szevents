import { connectToDatabase } from '@utils/database'
import Event from '@models/event'

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const event = await Event.findById(params.id).populate('creator');

        return new Response(JSON.stringify(event), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all events", { status: 500 })
    }
}