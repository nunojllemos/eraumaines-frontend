import Link from 'next/link'

const PageLink = ({ page, children, toPage, currentPage }) => {
    return (
        <li className={`leading-none p-2 pb-1 pt-0 ${currentPage == page ? 'border-b font-medium' : ''}`}>
            <Link scroll={false} href={{ query: { page: toPage } }}>
                {children}
            </Link>
        </li>
    )
}
export default PageLink
