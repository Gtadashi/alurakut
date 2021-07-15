import React, { useState } from 'react';
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


  const githubUser = 'Gtadashi';


  function ProfileSidebar() {
    return (
      <Box as="aside">
          <img src={`https://github.com/${githubUser}.png`}/>
          <hr  />
          <p>
          <a className="boxLink" href={`https://github.com/${githubUser}`}>
            @{githubUser}
          </a>
          </p>
          <hr />

          <AlurakutProfileSidebarMenuDefault/>
        </Box>
    )
  }


export default function Home() {

  const [comunidades, setComunidades] = useState([{
    id: '221',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',

  }]);
  //const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
  'juunegreiros', 
  'omariosouto', 
  'peas', 
  'rafaballerini', 
  'wfelipe2011',
  'felipefialho',
]
 

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>

      <div style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar />
    </div>
    

      <div style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
          Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className="subTitle">O que voce deseja fazer?</h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);

            console.log('campo:', dadosDoForm.get('title'));
            console.log('campo:', dadosDoForm.get('image'));


            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image'),
            }

           const comunidadesAtualizadas = [...comunidades, 'Alura Stars'];
           setComunidades(comunidadesAtualizadas);
          }}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text">
              </input>
            </div>
            <div>
              <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="title" 
                aria-label="Coloque uma URL para usarmos de capa">
              </input>
            </div>

            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
    </div>

      <div style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidades ({comunidades.length})
          </h2>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                <a href={`/users/${itemAtual.title}`} >
                 <img src={itemAtual.image}/>
                  <span>{itemAtual.title }</span>
                </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle"></h2>
          Pessoas da comunidade ({pessoasFavoritas.length})

          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li key ={itemAtual}>
                <a href={`/users/${itemAtual}`} >
                  <img src={`https://github.com/${itemAtual}.png`}/>
                  <span>{itemAtual }</span>
                </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
    </div>
    </MainGrid>
    </>
  )
}
