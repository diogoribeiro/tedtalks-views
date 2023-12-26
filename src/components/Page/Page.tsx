import { ComponentProps } from 'react';

import './Page.css';

interface PageProps extends ComponentProps<'div'> {
  isLoading: boolean;
}

function Page({ children, isLoading }: PageProps) {
  return <div>{isLoading ? <div className="loading">Loading...</div> : children}</div>;
}

export default Page;
