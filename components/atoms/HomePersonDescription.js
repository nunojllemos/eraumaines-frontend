import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const HomePersonDescription = ({ description }) => {
    return (
        <ReactMarkdown className='about-description-content default-text text-justify' remarkPlugins={[remarkGfm]}>
            {description}
        </ReactMarkdown>
    )
}
export default HomePersonDescription
