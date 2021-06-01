import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
/**
 * Homepage
 */
const ResetPage: React.FC = () => {
  return (
    <main>
      <Link href={'/'}>
        <a>back</a>
      </Link>
      <HomepageCounter />
    </main>
  )
}

export default ResetPage
