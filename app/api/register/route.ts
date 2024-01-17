import { prisma } from "@/app/lib/prisma";
// @ts-ignore
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || " ");

export async function POST(req: Request) {
  try {
    const { name, surrname, email, password, judet, oras, numar_telefon } =
      (await req.json()) as {
        name: string;
        surrname: string;
        email: string;
        password: string;
        judet: string;
        oras: string;
        numar_telefon: string;
      };
    const hashed_password = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        surrname,
        email: email.toLowerCase(),
        password: hashed_password,
        judet,
        oras,
        numar_telefon,
      },
    });
    const credentials = `Credentialele tale sunt: ${email} si  ${password}`;

    try {
      await sendgrid.send({
        to: email,
        from: "bitwizecorporation@gmail.com",
        subject: " Astea sunt datele tale pentru a putea sa te conectezi",
        html: `<div>${credentials}</div>`,
      });
    } catch (e) {
      console.log(e);
    }

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 },
    );
  }
}
