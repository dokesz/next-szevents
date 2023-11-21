import { connectToDatabase } from "@utils/database";
import Event from "@models/event";
// GET (read)

//this is a get request that fetches all prompts from the database
//it is an async function that takes in a request object
//it connects to the database and then fetches all prompts

export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();

    const event = await Event.findById(params.id).populate("creator");
    if (!event) {
      return new Response("Event not found", { status: 404 });
    }

    return new Response(JSON.stringify(event), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all events", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async (request, { params }) => {
  const { title, tag, description, date, image } = await request.json();

  try {
    await connectToDatabase();

    const existingEvent = await Event.findById(params.id);

    if (!existingEvent) {
      return new Response("event not found", { status: 404 });
    }

    existingEvent.title = title;
    existingEvent.description = description;
    existingEvent.date = date;
    existingEvent.tag = tag;
    existingEvent.image = image;

    await existingEvent.save();
    return new Response(JSON.stringify(existingEvent), { status: 200 });
  } catch (error) {
    return new Response("Failed to update event", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDatabase();

    await Event.findByIdAndRemove(params.id);

    return new Response(JSON.stringify({ message: "Event deleted successfully" }), { status: 200 })
  } catch (error) {
    return new Response("Failed to delete event", { status: 500 })
  }
}