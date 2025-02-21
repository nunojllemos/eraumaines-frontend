import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AboutDescription = ({ description }) => {
    return (
        <ReactMarkdown className='about-description-content 1366:my-16 text-16 768:text-22 font-light text-justify' remarkPlugins={[remarkGfm]}>
            {description}
        </ReactMarkdown>
    )
}
export default AboutDescription
