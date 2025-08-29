import NavLink from '../atoms/NavLinkAtom';

export default function NavigationBar() {
  return (
    <nav>
      <NavLink to="/card">
        Listagem (card)
      </NavLink>
      <NavLink to="/">
        Listagem (tabela)
      </NavLink>
    </nav>
  );
}