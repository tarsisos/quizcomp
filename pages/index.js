import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

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
      </Head>
      <QuizContainer>
        <Widget>

          <Widget.Header>
            <h1>Quiz sobre a Computação</h1>
          </Widget.Header>
          {/*           <Widget.Content>
            <p>
              Testes sobre Computação!
            </p>
          </Widget.Content> */}
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Qual é o seu nome?"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>

          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>
              Outros quizes:
            </p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/tarsisos" />
    </QuizBackground>
  );
}
