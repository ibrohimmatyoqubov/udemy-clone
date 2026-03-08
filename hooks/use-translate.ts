'use client'

import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'

function useTranslate() {
	const params = useParams()
	const lng = Array.isArray(params.lng) ? params.lng[0] : params.lng
	const { t } = useTranslation(lng || 'en')

	return t
}

export default useTranslate
