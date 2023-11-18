import { connectToDatabase } from "@utils/database";
import Event from "@models/event";

//this is a get request that fetches all prompts from the database
//it is an async function that takes in a request object
//it connects to the database and then fetches all prompts 

export const revalidate = 0;

export const GET = async () => {
  try {
    await connectToDatabase();
    const prompts = await Event.find({})
      .populate("creator", "-email")
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch all prompts:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch all prompts" }),
      { status: 500 }
    );
  }
};