import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import emailjs from "emailjs-com";

function generatePassword() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = crypto.randomInt(charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

async function sendOTPToEmail(email: string, otp: string) {
  emailjs.init("Pg9LLfrnQL4JWSJQ6");
  try {
    const templateParams = {
      to_email: email,
      public_key: "Pg9LLfrnQL4JWSJQ6",
      otp: otp,
    };
    await emailjs.send("service_yeajshs", "template_zqnz90q", templateParams);
    console.log("OTP sent successfully!");
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
}

export const PUT = async (request: NextRequest) => {
  try {
    const { email } = await request.json();

    if (!email) {
      throw new Error("Email is required");
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log("🚀 ~ PUT ~ user:", user);

    if (!user) {
      throw new Error("User not found");
    }

    const otp = generatePassword();
    console.log("🚀 ~ PUT ~ otp:", otp);
    await sendOTPToEmail(email, otp);

    await prisma.user.update({
      where: { email },
      data: {
        password: otp,
      },
    });
    return new NextResponse(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
};
// import { prisma } from "@/config/prisma";
// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import crypto from "crypto";

// const EMAIL_USER = "ali234534hashmi@gmail.com";
// const EMAIL_PASSWORD = "ali10203010password";

// async function sendOTPToEmail(email: string, OTP: string) {
//   let transporter = nodemailer.createTransport({
//     service: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: EMAIL_USER,
//       pass: EMAIL_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   let mailOptions = {
//     from: EMAIL_USER,
//     to: email,
//     subject: "Reset Password OTP",
//     text: `Your OTP for resetting the password is: ${OTP}`,
//   };

//   await transporter.sendMail(mailOptions);
// }
// // transporter.verify(function (error, success) {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Server is ready to take our messages");
// //   }
// // });

// function generatePassword() {
//   const charset =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//   let password = "";
//   for (let i = 0; i < 8; i++) {
//     const randomIndex = crypto.randomInt(charset.length);
//     password += charset.charAt(randomIndex);
//   }
//   return password;
// }

// export const PUT = async (request: NextRequest) => {
//   try {
//     const { email } = await request.json();

//     if (!email) {
//       throw new Error("Email is required");
//     }

//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (!user) {
//       throw new Error("User not found");
//     }

//     await sendOTPToEmail(email, "afh3fj98323hd3");
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return new NextResponse(JSON.stringify({ error: error.message }), {
//       status: 400,
//     });
//   }
// };
