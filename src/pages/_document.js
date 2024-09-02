import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="타이틀" />
        <meta property="og:description" content="안녕하세요 설명입니다" />
        <meta
          property="og:image"
          content="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/everyones_pc.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
