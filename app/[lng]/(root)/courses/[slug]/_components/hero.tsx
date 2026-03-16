'use client'

import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import ReactStars from 'react-stars'
import { Clock3 } from 'lucide-react'
import { PiStudentBold } from 'react-icons/pi'

function Hero() {
	const t = useTranslate()
	return (
		<>
			<h1 className='font-space-grotesk text-4xl font-bold'>
				ReactJS full course
			</h1>

			<p className='mt-4 text-muted-foreground'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima soluta
				laudantium at, quaerat voluptate libero.
			</p>

			<div className='mt-4 flex flex-wrap items-center gap-6'>
				<div className='flex items-center gap-2'>
					<Image
						width={50}
						height={50}
						alt='author'
						src={'/assets/authors/chris-impey.png'}
						className='rounded-full object-cover'
					/>
					<p className='font-space-grotesk font-bold'>Chris Impey</p>
				</div>

				<div className='flex items-center gap-2 font-space-grotesk'>
					<p className='font-bold text-[#E59819]'>4.5</p>
					<ReactStars value={4.5} edit={false} color2='#E59819' />
					<p className='font-bold'>(199)</p>
				</div>

				<div className='flex items-center gap-2'>
					<PiStudentBold className='size-6' />
					<p className='font-space-grotesk font-bold'>80 {t('students')}</p>
				</div>

				<div className='flex items-center gap-2'>
					<Clock3 className='size-6' />
					<p className='font-space-grotesk font-bold'>
						{t('lastUpdated')} 11/2025
					</p>
				</div>
			</div>
			<Image
				src={'/assets/reactjs.webp'}
				alt='course'
				width={1920}
				height={1080}
				className='mt-4 rounded-md object-cover'
			/>
		</>
	)
}

export default Hero
