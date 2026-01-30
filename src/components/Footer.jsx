import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 py-8 border-t border-zinc-900 text-center">
            <p className="text-zinc-500 flex items-center justify-center gap-2 text-sm">
                Designed & Built with <Heart size={16} className="text-red-500 fill-red-500" /> by Vimal Pratap Singh
            </p>
            <p className="text-zinc-600 text-xs mt-2">
                © {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
