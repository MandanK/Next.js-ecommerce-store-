import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: #ddd;
  padding: 10px 15px;
  border-radius: 4px;
  margin: 8px 8px 20px;
`;
export default function Header() {
  return (
    <header css={headerStyles}>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}
