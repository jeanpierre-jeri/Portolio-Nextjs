import Image from 'next/image'

export const MyStack = ({ title, btnTitle, stackImages }) => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">{title}</h2>
      <div className="slider">
        <div className="slider-track">
          {stackImages.map(({ id, attributes }) => {
            const { width, height, alternativeText, url } = attributes

            return (
              <div key={id} className="slide">
                <Image src={url} width={width} height={height} alt={alternativeText} />
              </div>
            )
          })}
          {stackImages.map(({ id, attributes }) => {
            const { width, height, alternativeText, url } = attributes

            return (
              <div key={id} className="slide">
                <Image src={url} width={width} height={height} alt={alternativeText} />
              </div>
            )
          })}
        </div>
        {/* slider-track */}
      </div>
      {/* slider*/}
      <a href="#work" className="btn">
        {btnTitle}
      </a>
    </section>
  )
}
