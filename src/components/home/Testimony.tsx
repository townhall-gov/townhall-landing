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
	const [current, setCurrent] = useState(2);
	const [count, setCount] = useState(0);
	const total = 5;

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

	useEffect(() => {
	  if(current === 1){
		api?.scrollNext()
	  }
	  if(current === total +2){
		api?.scrollPrev()
	  }

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current])

	const toPrev = () => {
		if(current > 2) api?.scrollPrev()
	}
	const toNext = () => {
		if(current < total +1) api?.scrollNext()
	}
	

	return (
		<section className="mt-24 w-full overflow-hidden">
            <h4 className=' flex m-4 md:m-24 mb-8 text-3xl sm:text-6xl whitespace-nowrap'>What our users say...</h4>
			<div className='w-full flex flex-col items-center gap-4 '>
				<Carousel
					opts={{
						align: "center",
					}}
					className='w-full overflow-hidden max-w-[100vw]'
					setApi={setApi}
				>
					<CarouselContent>
					<CarouselItem  className={`min-w-[300px] p-3  opacity-0 basis-1/3`}>
									
							</CarouselItem>
						{Array.from({ length: total }).map((_, index) => (
							<CarouselItem key={index} className={`${index === current -2  ? "opacity-100" : "opacity-50"} transition-all min-w-[350px] sm:min-w-[650px] p-3 basis-1/3`}>
									<TestimonyCard />
							</CarouselItem>
						))}
						<CarouselItem className={`min-w-[300px] opacity-0 p-3 basis-1/3`}>
									
							</CarouselItem>
					</CarouselContent>
				</Carousel>
				<SliderNavs active={current -1} total={total} next={toNext} prev={toPrev}/>
			</div>
		</section>
	);
};

export default Testimony;
