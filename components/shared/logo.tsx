import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<div className='max-md:size-12 max-sm:size-11'>
				<Image src={'/logo.svg'} alt='logo' width={50} height={50} />
			</div>
			<h1 className='font-space-grotesk text-4xl font-bold max-md:text-3xl max-sm:text-2xl'>
				Demmy
			</h1>
		</Link>
	)
}

export default Logo
