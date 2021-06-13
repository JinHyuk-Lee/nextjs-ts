import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { Header } from '@components/header/header'

export default class CustomDocument extends Document<DocumentInitialProps> {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps
    }
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
