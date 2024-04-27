import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";

// Create new employee
export const POST = async (request: NextRequest) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      maritalStatus,
      gender,
      nationality,
      address,
      city,
      state,
      zip,
      imageUrl,
      startDate,
      employeeID,
      userName,
      employeeType,
      emailAddress,
      department,
      designation,
      workingDays,
      joinDate,
      officeLocation,
      appointmentLetter,
      salarySlips,
      relivingLetter,
      experienceLetter,
      stockID,
      skypeID,
      githubID,
    } = await request.json();

    if (!designation) {
      return new NextResponse("Missing something", {
        status: 400,
      });
    }
    try {
      const employee = await prisma.employee.create({
        data: {
          firstName,
          lastName,
          email,
          mobileNumber,
          maritalStatus,
          gender,
          nationality,
          address,
          city,
          state,
          zip,
          imageUrl,
          startDate,
          employeeID,
          userName,
          employeeType,
          emailAddress,
          department,
          designation,
          workingDays,
          joinDate,
          officeLocation,
          appointmentLetter,
          salarySlips,
          relivingLetter,
          experienceLetter,
          stockID,
          skypeID,
          githubID,
        },
      });

      console.log("Created user:", employee);
      return new NextResponse(
        JSON.stringify({ data: employee, success: true }),
        {
          status: 200,
        }
      );
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

// Update existing employee
export const PUT = async (request: NextRequest) => {
  try {
    const { id, ...data } = await request.json();

    const employee = await prisma.employee.update({
      where: { id },
      data,
    });

    console.log("Updated user:", employee);
    return new NextResponse(JSON.stringify({ data: employee, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};

// Delete employee
export const DELETE = async (request: NextRequest) => {
  try {
    const { id } = await request.json();

    await prisma.employee.delete({
      where: { id },
    });

    console.log("Deleted user with id:", id);
    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};
export const GET = async (request: NextRequest) => {
  try {
    const employees = await prisma.employee.findMany();

    console.log("Fetched all employees:", employees);
    return new NextResponse(
      JSON.stringify({ data: employees, success: true }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching employees:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};
