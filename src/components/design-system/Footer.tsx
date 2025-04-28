
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Design System</h3>
            <p className="text-muted-foreground">A comprehensive design system with accessible, responsive components</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://react.dev" className="text-muted-foreground hover:text-primary transition-colors">React</a></li>
              <li><a href="https://www.typescriptlang.org/" className="text-muted-foreground hover:text-primary transition-colors">TypeScript</a></li>
              <li><a href="https://tailwindcss.com/" className="text-muted-foreground hover:text-primary transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="https://discord.com" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
