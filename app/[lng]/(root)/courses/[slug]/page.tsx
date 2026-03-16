import TopBar from '@/components/shared/top-bar'
import Hero from './_components/hero'
import Overview from './_components/overview'
import Description from './_components/description'
import { Separator } from '@/components/ui/separator'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import CourseCard from '@/components/cards/course.card'
import { courses } from '@/constants'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'

async function Page({ params: { lng } }: LngParams) {
	const { t } = await translation(lng)
	return (
		<>
			<TopBar label='allCourses' extra='Full Course ReactJs' />

			<div className='container mx-auto max-w-6xl'>
				<div className='grid grid-cols-3 gap-5 pt-12'>
					<div className='col-span-2 max-lg:col-span-3'>
						<Hero />
						<Overview />
					</div>
					<div className='col-span-1 max-lg:col-span-3'>
						<Description />
					</div>
				</div>

				<Separator className='my-12' />

				<Carousel opts={{ align: 'start' }} className='relative mt-6 w-full'>
					<div className='mb-6  flex items-center justify-between'>
						<h1 className='font-space-grotesk text-4xl font-bold max-md:mr-1  max-md:text-2xl'>
							{t('youMayLike')}
						</h1>
					</div>

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
					<div className='absolute -bottom-9 left-1/2 flex -translate-x-1/2 gap-2'>
						<CarouselPrevious className='static size-12 translate-y-0' />
						<CarouselNext className='static size-12 translate-y-0' />
					</div>
				</Carousel>
			</div>
		</>
	)
}

export default Page
