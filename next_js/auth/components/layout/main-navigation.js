import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import classes from './main-navigation.module.css';

function MainNavigation() {

  const [session, loading] = useSession();

  function logoutHandler(){
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link legacyBehavior href='/'>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && !loading (
            <li>
              <Link legacyBehavior href='/auth'>Login</Link>
            </li>
          )}
          
          {session && (
            <li>
              <Link legacyBehavior href='/profile'>Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
