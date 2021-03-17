import styled from 'styled-components'
import Card from '../src/components/Card'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 0;
  & > div {
    margin: 10px;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 800;
  transition: color .1s;
  position: fixed;
  z-index: 10;
  &:hover{
    color: rgb(60, 62, 68);
  }
` 

export async function getStaticPaths(){
  return {
    paths: [],
    fallback: 'blocking'
  }
}



export async function getStaticProps(context){
  const id = context.params.id
  const character = await
  fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
  const characterJSON = await character.json()

  return{
    props: {
      id: id,
      characters: characterJSON,
    }
  }
}

export default function Id({id, characters}){
  var nextPage = parseInt(id) + 1
  var prevPage = parseInt(id) - 1
  return(
    <>
      <Link 
        href={prevPage}
        style={{left: '20px', top: '20px'}}
      >
        anterior
      </Link>
      <Link 
        href={nextPage}
        style={{right: '20px', top: '20px'}}
      >
        proximo
      </Link>
      <Container>
        {
          characters.results.map(character => {
            return(
              <Card key={character.id} character={character}/>
            ) 
          })
        }      
      </Container>
    </>
  )
}