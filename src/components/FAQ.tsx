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
    type: string;
  }

const FAQ = ({ faqData, type } : FaqListProps) => {
	return (
		<div className="w-full p-4 sm:p-24 flex flex-col sm:grid sm:grid-cols-3 ">
            <h1 className="text-4xl sm:text-6xl font-semibold col-span-1 mr-4 mb-8 sm:mb-auto">Frequently Asked Questions</h1>
			<Accordion type='single' collapsible className='w-full col-span-2 '>
				{ faqData.map((item: FaqItem, idx: number) => <AccordionItem className={`${type==='home' ? 'bg-[#191E23] border-destructive' : 'bg-[#19385F]  border-white'}`} value={`item-${idx}`} key={idx}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent className="text-[#d4d2d2]">{item.answer}</AccordionContent>
				</AccordionItem>)}
			</Accordion>
		</div>
	);
};

export default FAQ;
