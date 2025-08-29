import NavigationBar from '../molecules/NavigationBar';

export default function PageLayout({ children }) {
  return (
    <main>
      <NavigationBar />
      <h1>Lista de Instrumentos</h1>
            <div className="page-content">
        {children}
      </div>
    </main>
  );
}