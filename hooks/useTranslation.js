import { useRouter } from 'next/router'
import { en } from '@/dictionaries/en'
import { pt } from '@/dictionaries/pt'

const useTranslation = () => {
    const { locale } = useRouter()

    const t = locale === 'en' ? en : pt

    return t
}

export default useTranslation
