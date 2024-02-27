import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion2";


interface FaqItem {
    question: string;
    answer: string;
  }

  interface FaqListProps {
    faqData: FaqItem[];
  }

const FAQ = ({ faqData } : FaqListProps) => {
	return (
		<div className="w-full p-24 grid grid-cols-3">
            <h1 className="text-6xl font-semibold col-span-1 mr-4">Frequently Asked Questions</h1>
			<Accordion type='single' collapsible className='w-full col-span-2'>
				{ faqData.map((item: FaqItem, idx: number) => <AccordionItem value={`item-${idx}`} key={idx}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>{item.answer}</AccordionContent>
				</AccordionItem>)}
			</Accordion>
		</div>
	);
};

export default FAQ;
