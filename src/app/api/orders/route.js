import { authOptions, isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { Order } from "@/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (_id) {
    return Response.json(await Order.findById(_id));
  }

  if (admin) {
    return Response.json(await Order.find());
  }

  if (userEmail) {
    return Response.json(await Order.find({ userEmail }));
  }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  try {
    const session = await getServerSession(authOptions);
    const data = await req.json();
    const admin = await isAdmin();

    if (!admin) {
      throw new Error("User is not authorized to perform this action.");
    }

    const {
      _id,
      userEmail,
      phone,
      streetAddress,
      postalCode,
      city,
      country,
      cartProducts,
      paid,
    } = data;

    const updateOrder = await Order.findOneAndUpdate(
      { _id: _id },
      {
        userEmail,
        phone,
        streetAddress,
        postalCode,
        city,
        country,
        cartProducts,
        paid,
      },
      { new: true }
    );

    if (updateOrder) {
      return Response.json({
        success: true,
        message: "Order status updated successfully! ",
      });
    } else {
      return Response.json({
        success: true,
        message: "failed to update the status of order",
      });
    }
  } catch (error) {
    console.error("Error processing PUT request:", error);
    return Response.json(
      { error: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
