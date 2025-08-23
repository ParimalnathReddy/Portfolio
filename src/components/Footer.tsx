import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Parimal Kodumuru. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>in East Lansing, Michigan</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Last updated: August 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;