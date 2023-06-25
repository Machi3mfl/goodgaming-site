import { minidenticon } from 'minidenticons'
import Image from 'next/image'
import { useMemo } from 'react'

interface RandomAvatarImgProps {
    username: string
    saturation?: number
    lightness?: number
    width: number
    height: number
}

const RandomAvatarImg = ({ username, saturation, lightness, width, height, ...props }: RandomAvatarImgProps) => {
    const svgURI = useMemo(
      () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(username, saturation, lightness)),
      [username, saturation, lightness]
    )
    return (<Image src={svgURI} alt={username} {...props} width={width} height={height} />)
  }

export default RandomAvatarImg