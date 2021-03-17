import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  color: #fff;
  height: 220px;
  width: 600px;
  & > h2{
    font-weight: 800;
  }
  & > p{
    font-weight: 500;
  }
`

const Text = styled.div`
  display: flex;
  margin-left: 10px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
`

export default function Card({character}){
  const {
    id,
    status,
    name,
    species,
    gender,
    image, 
    location, 
    origin
  } = character

  return(
    <Container key={id}>
      <img src={image} alt={name} />
      <Text>
        <div>  
          <h2>{name}({gender})</h2>
          <p style={{fontWeight: '500'}}>
            {status} - {species}
          </p>
        </div>
        
        <div style={{margin: '20px 0px'}}>
          <h4 style={{color: '#919E9E'}}>
            Last known location:
          </h4>
          <h3>{location.name}</h3>
        </div>

        <div>
          <h4 style={{color: '#919E9E'}}>
            First known location:
          </h4>
          <h3>{origin.name}</h3>
        </div>
      </Text>
    </Container>
  )
}