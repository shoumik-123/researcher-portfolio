import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <Navigation />
    </header>
  );
}