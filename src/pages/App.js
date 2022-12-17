import gitLogo from '../assets/github.png'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Container } from './styles'
import ItemsRepo from '../components/ItemRepo'
import { useState } from 'react';
import { api } from '../services/api'


function App() {
   const [respos, setRepos, removeRepo] = useState([]);

   const [currentRepo, setCurrentRepo] = useState('');
   const handleSearchRepo = async () => {
      const { data } = await api.get(`/repos/${currentRepo}`)

      if (data.id) {
         const isExist = respos.find(repo => repo.id === data.id)

         if (!isExist) {
            setRepos(prev => [...prev, data])
            setCurrentRepo('')
            return
         }

      }
      alert('Repositório não encontrado')
   }
   const handleRemoveRepo = async (id) => {
      const { data } = await api.get(`/repos/${currentRepo}`)

      if (data.id) {
         const isExist = respos.find(repo => repo.id === data.id)

         if (isExist) {
            setCurrentRepo('')
            return
         }

      }
   }


   return (
      <Container>
         <img src={gitLogo} width={72} height={72} alt="github logo" />
         <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
         <Button onClick={handleSearchRepo} />
         {respos.map(repo => <ItemsRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
      </Container>
   );
}

export default App;
