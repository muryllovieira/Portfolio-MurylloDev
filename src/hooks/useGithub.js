import axios from 'axios';
import { useEffect, useState } from 'react';

const useGitHubProjects = username => {
  const [gitHubUser, setGitHubUser] = useState(null);
  const [gitHubRepos, setGitHubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      if (!username) return;

      setLoading(true);
      setError(null);

      try {
        const [reposResponse, userResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}/repos`, {
            params: {
              sort: 'updated',
              per_page: 20,
              direction: 'desc',
            },
          }),
          axios.get(`https://api.github.com/users/${username}`),
        ]);

        const reposData = reposResponse.data;
        const userData = userResponse.data;

        const formatDate = dateString => {
          if (!dateString) return 'Data Desconhecida';
          const date = new Date(dateString);
          return (
            date.toDateString().slice(0, 3) +
            ' ' +
            date.toLocaleDateString('pt-BR', {
              month: 'numeric',
              day: '2-digit',
              year: 'numeric',
            })
          );
        };

        const formattedRepos = reposData
          .filter(repo => repo.description)
          .slice(0, 6)
          .map((repo, index) => ({
            id: 100 + index,
            title: repo.name,
            description: repo.description,
            stack: repo.language ? [repo.language] : [],
            link: repo.html_url,
            stats: {
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              updated_at: formatDate(repo.updated_at),
            },
            isGitHub: true,
          }));

        setGitHubRepos(formattedRepos);
        setGitHubUser({
          name: userData.name || userData.login,
          avatar: userData.avatar_url,
          html_url: userData.html_url,
          login: userData.login,
        });
      } catch (error) {
        console.error('Erro ao buscar GitHub:', error);
        setError(error.message || 'Erro ao carregar dados do GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return {
    gitHubUser,
    gitHubRepos,
    loading,
    error,
  };
};

export default useGitHubProjects;
