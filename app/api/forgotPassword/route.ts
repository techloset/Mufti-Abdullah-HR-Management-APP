import { prisma } from "@/config/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest) => {
  try {
    const { email, newPassword } = await request.json();

    const userLogin = await prisma.user.findUnique({
      where: { email },
    });

    if (!userLogin) {
      return new NextResponse(JSON.stringify(Error), { status: 400 });
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);

    const user = await prisma.user.update({
      where: { email },
      data: {
        password: hashPassword,
      },
    });
    return new NextResponse(JSON.stringify({ data: user, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};
