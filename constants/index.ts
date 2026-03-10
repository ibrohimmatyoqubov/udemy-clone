import { Contact, Home, ListVideo, Rss } from 'lucide-react'
import {
	DiCisco,
	DiCreativecommonsBadge,
	DiDjango,
	DiDocker,
	DiGhost,
	DiGithubFull,
	DiLess,
	DiMailchimp,
	DiMeteorfull,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
} from 'react-icons/di'

export const navLinks = [
	{ route: '', name: 'navLink1', icon: Home },
	{ route: 'courses', name: 'navLink2', icon: ListVideo },
	{ route: 'blogs', name: 'navLink3', icon: Rss },
	{ route: 'contact', name: 'navLink4', icon: Contact },
]

export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: "O'zbekcha" },
	{ route: 'ru', label: 'Русский' },
	{ route: 'tr', label: 'Türkçe' },
]

export const companies = [
	DiCisco,
	DiCreativecommonsBadge,
	DiGhost,
	DiGithubFull,
	DiMeteorfull,
	DiLess,
	DiMailchimp,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
	DiDjango,
	DiDocker,
]

export const filterCourses = [
	{ label: 'cateogry1', name: 'all' },
	{ label: 'cateogry2', name: 'trending' },
	{ label: 'cateogry3', name: 'popular' },
	{ label: 'cateogry4', name: 'featured' },
]

export const filterLevels = [
	{ label: 'level1', name: 'all' },
	{ label: 'level2', name: 'beginner' },
	{ label: 'level3', name: 'intermediate' },
	{ label: 'level4', name: 'advanced' },
]

export const courses = [
	{
		title: 'JavaScript',
		previewImage: '/assets/javascript.webp',
		author: {
			image: '/assets/authors/chris-impey.png',
			name: 'Chris Impley',
		},
		oldPrice: 179,
		currentPrice: 79,
		level: 'Beginner',
	},
	{
		title: 'ReactJS',
		previewImage: '/assets/reactjs.webp',
		author: {
			image: '/assets/authors/chris-impey.png',
			name: 'Chris Impley',
		},
		oldPrice: 159,
		currentPrice: 59,
		level: 'Intermidate',
	},
	{
		title: 'VueJS',
		previewImage: '/assets/vuejs.webp',
		author: {
			image: '/assets/authors/chris-impey.png',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Telegram BOT',
		previewImage: '/assets/telegram-bot.webp',
		author: {
			image: '/assets/authors/chris-impey.png',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
	{
		title: 'React Native',
		previewImage: '/assets/reactjs.webp',
		author: {
			image: '/assets/authors/chris-impey.png',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Foundation',
		previewImage: '/assets/foundation.webp',
		author: {
			image: '/assets/authors/chris-impey.png',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
]

export const categories = [
	{
		icon: '/assets/categories/digital-marketing.svg',
		label: 'Digital Marketing',
	},
	{ icon: '/assets/categories/web-development.svg', label: 'Web Development' },
	{ icon: '/assets/categories/graphic-design.svg', label: 'Graphic Design' },
	{ icon: '/assets/categories/photography.svg', label: 'Photography' },
	{ icon: '/assets/categories/social-sciences.svg', label: 'Social Sciences' },
	{ icon: '/assets/categories/art-humanities.svg', label: 'Art & Humanities' },
	{
		icon: '/assets/categories/personal-development.svg',
		label: 'Personal Development',
	},
	{ icon: '/assets/categories/it-software.svg', label: 'IT & Software' },
]

export const instructors = [
	{
		name: 'Chris Impley',
		image: '/assets/authors/chris-impey.png',
		job: 'Web Developer',
	},
	{
		name: 'Thomas Winter',
		image: '/assets/authors/thomas-winter.png',
		job: 'Photographer',
	},
	{
		name: 'Emma Watson',
		image: '/assets/authors/emma-watson.png',
		job: 'Digital Marketer',
	},
	{
		name: 'John Doe',
		image: '/assets/authors/john-doe.png',
		job: 'Designer',
	},
]

export const learningJourney = [
	{
		title: 'startTitle1',
		excerpt: 'startDescription1',
		image: '/assets/journey/rating.png',
	},
	{
		title: 'startTitle2',
		excerpt: 'startDescription2',
		image: '/assets/journey/science.png',
	},
	{
		title: 'startTitle3',
		excerpt: 'startDescription3',
		image: '/assets/journey/online-learning.png',
	},
	{
		title: 'startTitle4',
		excerpt: 'startDescription4',
		image: '/assets/journey/certificate.png',
	},
]
