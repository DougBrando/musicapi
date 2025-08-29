import { NavLink } from 'react-router-dom';

export default function NavLinkAtom({ to, children }) { 
  return (
    <NavLink to={to} className="nav-link">
      {children}
    </NavLink>
  );
}