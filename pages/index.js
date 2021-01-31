import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          QuizComp - Quiz sobre Computação
        </title>
        <meta property="og:image" content={db.bg} key="ogimage" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>

          <Widget.Header>
            <h1>A hitória da Computação</h1>
          </Widget.Header>
          <Widget.Content>
            <h2>Testes os seus conhecimentos sobre alguns fatos da Computação!</h2>
            <p />
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Nome do Jogador?"
                value={name}
                autoFocus
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Pronto para jogar ${name} ?`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>

          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>

          <Widget.Content>
            <h2>Outros quizes:</h2>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/tarsisos" />
    </QuizBackground>
  );
}
