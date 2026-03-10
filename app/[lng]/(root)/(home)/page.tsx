import Categories from './_components/categories'
import FeaturedCourses from './_components/featured-courses'
import Hero from './_components/hero'
import Instructor from './_components/instructor'
import LearningJourney from './_components/learning-journey'

function Page() {
	return (
		<div className='max-md:px-5'>
			<Hero />
			<FeaturedCourses />
			<Categories />
			<Instructor />
			<LearningJourney />
		</div>
	)
}

export default Page
