import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { rootRoute } from '../../utils/routes';

import './Page.css';

interface PageProps extends ComponentProps<'div'> {
  isLoading: boolean;
}

function Page({ children, isLoading }: PageProps) {
  return (
    <article className="main-container">
      <header className="header-container">
        <Link className="title" to={rootRoute}>
          <h1>Ted Talk Views</h1>
        </Link>
      </header>
      <main className="body-container">{isLoading ? <div className="loading">Loading...</div> : children}</main>
      <footer className="footer">
        <span>Developed by Diogo Ribeiro</span>
      </footer>
    </article>
  );
}

export default Page;
