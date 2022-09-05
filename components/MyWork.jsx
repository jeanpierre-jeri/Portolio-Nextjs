import Image from 'next/image'

export const MyWork = ({ title, subtitle, projects }) => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">{title}</h2>
      <p className="section__subtitle section__subtitle--work">{subtitle}</p>

      <div className="portfolio">
        {projects.map((project) => {
          const { link, project_image } = project.attributes
          const { url, width, height, alternativeText } = project_image.data.attributes
          return (
            <a
              key={project.id}
              href={link}
              target="_blank"
              className="portfolio__item"
              rel="noreferrer"
            >
              <picture className="portfolio__img">
                <Image src={url} height={height} width={width} alt={alternativeText} />
              </picture>
            </a>
          )
        })}
      </div>
    </section>
  )
}
