import * as React from "react";
import Layout from "../componets/layout";

export default function AboutPage() {
  return (
    <Layout titulo="Sobre">
      <h1>Sobre</h1>
      <hr />
      <p>
        Este é um site simples que mostra a estrutura básica de um site com
        React.
      </p>
    </Layout>
  );
}

export const Head = () => <title>Sobre</title>;
