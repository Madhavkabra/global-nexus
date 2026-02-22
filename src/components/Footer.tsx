const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">A</span>
            </div>
            <span className="text-foreground font-semibold tracking-tight">
              Arctura
            </span>
          </div>

          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#ecosystem" className="hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © 2026 Arctura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
