import * as React from "react";
import Layout from "../componets/layout";

export default function IndexPage() {
  return (
    <Layout titulo="Home">
      <h1>Olá Mundo Gatsby!</h1>
      <hr />

      <p>Iniciando com os primeiros componentes React no Gatsby</p>
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;
