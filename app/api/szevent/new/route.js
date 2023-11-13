import { connectToDatabase } from "@utils/database";
import Event from "@models/event";

export const POST = async (req, res) => {
  const { userId, title, tag, description, image } = await req.json();

  try {
    await connectToDatabase();
    const newEvent = new Event({
      creator: userId,
      title,
      tag,
      description,
      image,
    });

    await newEvent.save();

    return new Response(JSON.stringify(newEvent), {
      status: 201,
    });
  } catch (error) {
    return new Response('An error occurred while creating the prompt.', { status: 500 })
  }
};
