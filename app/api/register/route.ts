import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/config/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return new NextResponse("Missing name, email, and password", {
        status: 400,
      });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (exist) {
      return new NextResponse("User already exists", {
        status: 400,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashPassword,
        },
      });

      console.log("Created user:", user);
      return new NextResponse(JSON.stringify({ data: user, success: true }), {
        status: 200,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return new NextResponse(JSON.stringify(error), { status: 400 });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { email, name } = await request.json();

    if (!name) {
      return new NextResponse("Missing name", {
        status: 400,
      });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!exist) {
      return new NextResponse("User not Found", {
        status: 404,
      });
    }

    try {
      const user = await prisma.user.update({
        where: { email },
        data: {
          name: name,
        },
      });

      console.log("Created user:", user);
      return new NextResponse(JSON.stringify({ data: user, success: true }), {
        status: 200,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return new NextResponse(JSON.stringify(error), { status: 400 });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};
