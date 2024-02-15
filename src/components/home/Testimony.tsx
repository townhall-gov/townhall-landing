"use client"

import React, { useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import TestimonyCard from "../TestimonyCard";
import SliderNavs from "../SliderNavs";

const Testimony = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)
		api.on("select", () => {
		  setCurrent(api.selectedScrollSnap() + 1)
		})

	}, [api])

	return (
		<section className="mt-24 w-full overflow-hidden">
            <h4 className=' flex m-24 mb-8 text-6xl whitespace-nowrap'>What our users say...</h4>
			<div className='w-full flex flex-col items-center gap-4 '>
				<Carousel
					opts={{
						align: "center",
					}}
					className='w-full overflow-hidden max-w-[100vw]'
					setApi={setApi}
				>
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index} className={`min-w-[800px] p-3 basis-1/3`}>
									<TestimonyCard active={current -1 === index} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<SliderNavs active={current - 1} setActive={setCurrent} next={() => api?.scrollNext()} prev={() => api?.scrollPrev()}/>
			</div>
		</section>
	);
};

export default Testimony;
