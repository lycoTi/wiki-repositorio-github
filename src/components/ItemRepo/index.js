import React from 'react'
import { ItemContainer } from './styles';

function ItemsRepo({ repo, handleRemoveRepo }) {

   const handleRemove = () => {
      handleRemoveRepo(repo.id)
   }
   return (
      <ItemContainer>
         <h3>{repo.name}</h3>
         <p>{repo.full_name}</p>
         <a href={repo.html_uel} target="_blank" rel='noreferrer'>Ver Repositório</a><br />
         <a href='#' className='remover' rel='noreferrer' onClick={handleRemove}>Remover</a>
         <hr />
      </ItemContainer>
   )
}

export default ItemsRepo;