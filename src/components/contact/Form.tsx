'use client';

import React, { useState, FormEvent } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const { name, email, subject, message } = formData;
		const mailtoLink = `mailto:dev@townhallgov.com?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\n\n${message}`
		)}`;
		window.location.href = mailtoLink;
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="inline-flex flex-col items-end gap-6 w-full relative">
				<div className="inline-flex flex-col w-full gap-3">
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Enter your name"
					/>
				</div>
				<div className="inline-flex flex-col w-full gap-3">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email"
					/>
				</div>
				<div className="inline-flex flex-col w-full gap-3">
					<Label htmlFor="subject">Subject</Label>
					<Input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						placeholder="I want to.."
					/>
				</div>
				<div className="inline-flex flex-col w-full gap-3">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Hello..."
					/>
				</div>
				<div className="w-full mt-4">
					<Button className="w-full" type="submit">
						Submit
					</Button>
				</div>
			</div>
		</form>
	);
};

export default Form;
