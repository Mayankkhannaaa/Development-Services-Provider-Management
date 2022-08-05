import Document, { Html, Head, Main, NextScript } from "next/document";
// import { GA_TRACKING_ID } from "../src/lib/gtag";
class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-775ZLZW0P7`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-775ZLZW0P7', {
                      page_path: window.location.pathname,
                    });
                  `,
            }}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-236120560-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-236120560-1', {
                      page_path: window.location.pathname,
                    });
                  `,
            }}
          />
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-FGC2M95D0F`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FGC2M95D0F', {
                      page_path: window.location.pathname,
                    });
                  `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2905442,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  `,
            }}
          />
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-FGC2M95D0F"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag("js", new Date()); gtag("config", "G-FGC2M95D0F");
          </script> */}
          <meta
            name="keywords"
            content={
              "cheap website," +
              "website for business," +
              "website for startups," +
              "web services," +
              "web development services," +
              "cheap web application" +
              "web development," +
              "high quality website," +
              "custom website," +
              "custom website development," +
              "website development," +
              "new website," +
              "website for me," +
              "website for business," +
              "web solutions," +
              "cheap mobile apps," +
              "mobile apps for business," +
              "mobile apps for startups," +
              "mobile app services," +
              "mobile development services," +
              "cheap mobile application" +
              "mobile app development," +
              "high quality mobile apps," +
              "custom mobile apps," +
              "custom mobile app development," +
              "mobile apps development," +
              "new mobile apps," +
              "mobile apps for me," +
              "mobile apps for business," +
              "mobile app solutions," +
              "best web building sites," +
              "google new website," +
              "make a new website," +
              "build a new website," +
              "i need a website," +
              "i need a website for my business," +
              "i need an ecommerce website," +
              "i need a business website," +
              "need a website," +
              "build custom website," +
              "personalized website," +
              "custom web development services," +
              "custom web design services," +
              "customize website," +
              "custom web design company," +
              "custom website design company," +
              "affordable custom websites," +
              "custom ecommerce website," +
              "custom website design cost," +
              "affordable custom website design," +
              "cheap website builders," +
              "affordable web design," +
              "cheap website design," +
              "affordable website design," +
              "cheap website makers," +
              "cheap web design," +
              "affordable website," +
              "cheap website creator," +
              "affordable web design services," +
              "affordable web design company," +
              "affordable website design near me," +
              "cheap ecommerce website," +
              "affordable websites for small business," +
              "affordable website designer," +
              "affordable custom websites," +
              "affordable website builders," +
              "best cheap website builders," +
              "affordable website design packages," +
              "a one website services," +
              "a one website solutions," +
              "website management," +
              "new cheap website," +
              "low cost website design," +
              `A-ONE WEB SOLUTIONS is an ambitious and motivated service
            provider tailored to the needs of businesses of every esteemed
            composition. We are focused on providing services that are
            vastly accessible for everyone who tries to connect with us.
            Serving many international clients, we have a vast experience in
            serving all types of clients in a very reasanable and quality
            focused mindset.,` +
              "International Clients"
            }
          />
          <meta name="author" content={"Mayank Khanna"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
