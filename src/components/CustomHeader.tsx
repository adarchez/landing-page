import Head from "next/head";

export default function CustomHeader() {
  return (
    <Head>
      <title>Desarrollo Web Freelance | Sitios modernos y rapidos</title>
      <meta
        name="description"
        content="Desarrollador web freelance. Diseño sitios modernos, rápidos y responsivos para negocios y emprendedores. ¡Impulsa tu presencia online!"
      />
      <meta
        name="keywords"
        content="desarrollador web, freelance, diseño web, sitios responsivos, landing page, programación, servicios web"
      />
      <meta name="author" content="DarchezDev" />

      {/* OpenGraph para compartir en Facebook, WhatsApp, etc. */}
      <meta
        property="og:title"
        content="Desarrollador Web Freelance | Sitios Modernos y Rápidos"
      />
      <meta
        property="og:description"
        content="Diseño y desarrollo de sitios web modernos, rápidos y profesionales para negocios y emprendedores."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://adarchez.com/" />
      <meta property="og:image" content="https://adarchez.com/logo.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Desarrollador Web Freelance | Sitios Modernos y Rápidos"
      />
      <meta
        name="twitter:description"
        content="Diseño y desarrollo de sitios web modernos, rápidos y profesionales para negocios y emprendedores."
      />
      <meta name="twitter:image" content="https://adarchez.com/logo.jpg" />
    </Head>
  );
}
