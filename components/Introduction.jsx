import { useMemo } from 'react'
import Image from 'next/image'

export const Introduction = ({ title, subtitle, image }) => {
  const { url } = image.data.attributes

  const titleSplit = useMemo(() => {
    return title.split('/')
  }, [title])

  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        {titleSplit[0]}
        <strong>{titleSplit[1]}</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">{subtitle}</p>
      <picture className="intro__img">
        <Image src={url} width={250} height={250} alt={titleSplit[1]} />
      </picture>
    </section>
  )
}
