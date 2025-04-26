import "../../globals.css";

export default function Header(){
    return <header className="bg-white">
    <nav className="mx-auto flex max-w-7xl items-center justify-end p-8 space-x-4" aria-label="Global">
      <a href="/" className="text-lg font-semibold">Home</a>
    </nav>
  </header>
}