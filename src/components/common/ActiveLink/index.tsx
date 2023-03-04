import type { ReactElement } from 'react';
import { Children, cloneElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  activeClassName: string;
  children: ReactElement;
}

export default function ActiveLink({ ...rest }: Props) {
  const router = useRouter();
  const child = Children.only(rest.children);
  let className = child.props.className || '';
  const [mounted, setMounted] = useState(false);

  if (router.pathname === rest.href && rest.activeClassName) {
    className = `${className} ${rest.activeClassName}`.trim();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href={rest.href} passHref={true}>
      {cloneElement(child, { className })}
    </Link>
  );
}
