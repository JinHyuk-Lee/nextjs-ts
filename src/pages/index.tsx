import Link from 'next/link'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Link href={'/test'}>
        <a>test page</a>
      </Link>
    </main>
  )
}

export default HomePage
