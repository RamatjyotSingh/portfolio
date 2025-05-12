const Footer = () => {
  return (
    <footer className="c-space py-10 border-t border-black-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side with name/tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-xl font-semibold">Ramatjyot Singh</h3>
          <p className="text-white-500 text-sm mt-1">Aspiring Software Engineer & Developer</p>
        </div>
        
        {/* Center element - optional decorative line */}
        <div className="hidden md:block h-12 w-px bg-black-300"></div>
        
        {/* Right side with improved social icons */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/RamatjyotSingh" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:border-white/20 hover:bg-black-500 transition-all"
            aria-label="GitHub Profile"
          >
            <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
          </a>
          <a 
            href="https://linkedin.com/in/Ramatjyot" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:border-white/20 hover:bg-black-500 transition-all"
            aria-label="LinkedIn Profile"
          >
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;