import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export const About = ({ title, subtitle, description, image }) => {
  const { url, width, height, alternativeText } = image
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">{title}</h2>
      <p className="section__subtitle section__subtitle--about">{subtitle}</p>

      <div className="about-me__body">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
      <picture className="about-me__img">
        <Image src={url} width={width} height={height} alt={alternativeText} />
      </picture>
    </section>
  )
}
