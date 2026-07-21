import Link from 'next/link';

export function NavSecondary() {
  const navItems = [
    { label: 'Propósito', href: '#proposito' },
    { label: 'Sobre mim', href: '#sobre-mim' },
    { label: 'Família', href: '#familia' },
    { label: 'Trabalho', href: '#trabalho' },
    { label: 'Conteúdos', href: '#conteudos' },
  ];

  return (
    // 'sticky top-0 z-50' faz a navbar ficar fixa no topo ao rolar a página
    <nav className="sticky top-0 z-50 w-full bg-[#093733] text-white font-alan shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <ul className="flex items-center justify-center md:justify-around space-x-6 sm:space-x-12 py-5 overflow-x-auto no-scrollbar text-lg sm:text-xl font-light">
          {navItems.map((item, index) => (
            <li key={index} className="whitespace-nowrap">
              <Link
                href={item.href}
                className="hover:opacity-80 transition-opacity duration-200 tracking-wide block px-2 py-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}