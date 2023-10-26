import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
	const { name, phone } = await request.json();
	if (!name || !phone) return NextResponse.json({ error: 'Bad request' }, { status: 400 });

	const transport = nodemailer.createTransport({
		service: 'Mail.ru',
		auth: {
			user: process.env.EMAIL_SENDER,
			pass: process.env.EMAIL_SENDER_PASSWORD,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.EMAIL_SENDER,
		to: process.env.EMAIL_RECEIVER,
		subject: 'Заявка с сайта',
		text: `Имя: ${name}\nТелефон: ${phone}`
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err, info) {
				if (!err) {
					resolve('Email sent');
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return NextResponse.json({ message: 'Email sent' });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
