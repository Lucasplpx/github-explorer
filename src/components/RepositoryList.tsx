import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

type Repository = {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const url = 'https://api.github.com/orgs/rocketseat/repos';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
