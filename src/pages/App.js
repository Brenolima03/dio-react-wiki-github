import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/input';
import Button from '../components/button';
import ItemRepo from '../components/itemRepo';
import { Container } from './styles';
import { api } from '../services/api';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      
      if (data.id) {
        const alreadyExists = repos.find(repo => repo.id === data.id);
        if (!alreadyExists) {
          setRepos((previous) => [...previous, data]);
          setCurrentRepo("");
          return;
        }
      }
    } catch (error) {
      console.error("Error fetching the repository:", error);
    }
  };

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
  };
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          handleRemoveRepo={ handleRemoveRepo }
          key={repo.id}
          repo={repo}
        />
      ))}
    </Container>
  );
};
export default App;
