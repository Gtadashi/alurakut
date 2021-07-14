import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


  const githubUser = 'Gtadashi';


  function ProfileSidebar() {
    return (
      <Box >
          <img src={`https://github.com/${githubUser}.png`}/>
        </Box>
    )
  }


export default function Home() {

  const pessoasFavoritas = [
  'juunegreiros', 
  'omariosouto', 
  'peas', 
  'rafaballerini', 
  'marcobrunodev',
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
    </div>

      <div style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle"></h2>
          Pessoas da comunidade ({pessoasFavoritas.length})

          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
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
