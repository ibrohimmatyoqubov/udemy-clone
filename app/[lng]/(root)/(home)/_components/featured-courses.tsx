'use client'

import CourseCard from '@/components/cards/course.card'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { courses, filterCourses } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { cn } from '@/lib/utils'
import { useState } from 'react'

function FeaturedCourses() {
	const [filter, setFilter] = useState('all')
	const t = useTranslate()
	return (
		<div className='container mx-auto max-w-6xl py-12'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
				<div className='flex flex-col space-y-1'>
					<h2 className='font-space-grotesk text-3xl font-bold'>
						{t('exploreCourses')}
					</h2>
					<p className='text-sm text-muted-foreground'>
						{t('exploreCoursesDescription')}
					</p>
				</div>

				<div className='no-scrollbar flex items-center gap-2 self-end max-md:mt-4 max-md:w-full max-md:overflow-x-auto max-md:rounded-full max-md:bg-primary max-md:p-2'>
					{filterCourses.map(item => (
						<Button
							key={item.name}
							rounded={'full'}
							variant={filter === item.name ? 'secondary' : 'ghost'}
							className={cn(
								'font-medium max-md:w-full max-md:bg-secondary',
								filter === item.name && 'text-primary'
							)}
							onClick={() => setFilter(item.name)}
						>
							{t(item.label)}
						</Button>
					))}
				</div>
			</div>

			<Carousel
				opts={{ align: 'start' }}
				className='relative mt-6  w-full md:flex'
			>
				<CarouselContent>
					{courses.map(course => (
						<CarouselItem
							key={course.title}
							className='sm:basis-1/2 md:basis-1/2 tb:basis-1/3'
						>
							<CourseCard {...course} />
						</CarouselItem>
					))}
				</CarouselContent>

				<div className='absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2'>
					<CarouselPrevious className='static size-12 translate-y-0' />
					<CarouselNext className='static size-12 translate-y-0' />
				</div>
			</Carousel>
		</div>
	)
}

export default FeaturedCourses
