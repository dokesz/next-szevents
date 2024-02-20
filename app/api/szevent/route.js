import { connectToDatabase } from "@utils/database";
import Event from "@models/event";

export const revalidate = 0;

export const GET = async () => {
  try {
    await connectToDatabase();
    const events = await Event.find({})
      .populate("creator", "-email")
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch all events:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch all events" }),
      { status: 500 }
    );
  }
};