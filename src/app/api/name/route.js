import Name from "@/lib/models/Name";
import connectToDb from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const names = await Name.find();
    return new NextResponse(JSON.stringify(names), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Could not find names " + error.message }),
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name } = body;

    await connectToDb();
    const newName = new Name({name});
    await newName.save();
    return new NextResponse(
      JSON.stringify({ message: "name created", name: newName }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error creating name " + error.message }),
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  try {
    const body = await request.json();
    const { nameId } = body;

    if (!nameId) {
      return new NextResponse(JSON.stringify({ message: "id is required" }), {
        status: 400,
      });
    }

    await connectToDb();

    const deletedName = await Name.findByIdAndDelete(nameId);

    if (!deletedName) {
      return new NextResponse(JSON.stringify({ message: "Name not found" }), {
        status: 400,
      });
    }

    return new NextResponse(JSON.stringify({ message: "Name deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error deleting name: " + error.message}),
      { status: 400 }
    );
  }
};