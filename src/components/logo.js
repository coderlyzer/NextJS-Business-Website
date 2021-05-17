/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import { Link } from 'components/link'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        didsplay: 'flex',
        cursoor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="nextjs landing page logo" />
    </Link>
  )
}
