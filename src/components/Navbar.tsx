import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavItems = () => (
    <>
      <Button
        variant="ghost"
        className="text-gray-200 hover:text-white hover:bg-white/10"
        onClick={() => scrollToSection('home')}
      >
        Home
      </Button>
      <Button
        variant="ghost"
        className="text-gray-200 hover:text-white hover:bg-white/10"
        onClick={() => scrollToSection('skills')}
      >
        Skills
      </Button>
      <Button
        variant="ghost"
        className="text-gray-200 hover:text-white hover:bg-white/10"
        onClick={() => scrollToSection('projects')}
      >
        Projects
      </Button>
      <Button
        variant="ghost"
        className="text-gray-200 hover:text-white hover:bg-white/10"
        onClick={() => scrollToSection('education')}
      >
        Education
      </Button>
      <Button
        variant="ghost"
        className="text-gray-200 hover:text-white hover:bg-white/10"
        onClick={() => scrollToSection('experience')}
      >
        Experience
      </Button>
      <Button
        variant="default"
        className="bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => scrollToSection('contact')}
      >
        Contact Me
      </Button>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              SH
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavItems />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-900/95 border-slate-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavItems />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}