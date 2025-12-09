import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Phone, Shield, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Cestas", href: "#produtos" },
    { label: "Românticas", href: "#" },
    { label: "Aniversário", href: "#" },
    { label: "Corporativas", href: "#" },
    { label: "Quem Somos", href: "#" },
    { label: "Contato", href: "#" },
  ];

  const trustBadges = [
    { icon: Phone, text: "(11) 99999-9999", subtext: "Atendimento" },
    { icon: Shield, text: "Desde 2010", subtext: "Empresa" },
    { icon: CreditCard, text: "100% Segura", subtext: "Sua compra" },
    { icon: Truck, text: "Entrega Rápida", subtext: "Agilidade" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Entregamos em todo Brasil com carinho!</span>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:underline">Fale Conosco</a>
            <a href="#" className="hover:underline">Cadastre-se</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Café<span className="text-primary">Manhã</span>
            </h1>
            <span className="text-xs text-muted-foreground">Cestas Especiais</span>
          </a>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="Buscar cestas de café da manhã..." 
                className="pr-12 bg-secondary/50 border-border focus:bg-background"
              />
              <Button 
                size="icon" 
                className="absolute right-0 top-0 h-full rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Input 
              type="search" 
              placeholder="Buscar cestas..." 
              className="pr-12 bg-secondary/50"
            />
            <Button 
              size="icon" 
              className="absolute right-0 top-0 h-full rounded-l-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="hidden lg:block border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <badge.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{badge.text}</p>
                  <p className="text-xs text-muted-foreground">{badge.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center gap-8 py-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border">
              <a href="#" className="flex items-center gap-2 py-2 text-foreground hover:text-primary">
                <User className="h-4 w-4" />
                Minha Conta
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
