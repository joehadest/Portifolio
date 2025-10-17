import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink, Code2, Sparkles, Rocket, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Açaí Alto Stop',
      description: 'Landing page moderna e responsiva para divulgação de loja de açaí',
      tech: ['React.tsx', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/joehadest/acai',
      demo: 'https://acaialtostop.vercel.app',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Rei dos Salgados',
      description: 'Website institucional completo para empresa de salgados',
      tech: ['React.tsx', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/joehadest/reidossalgados',
      demo: 'https://reidossalgados.webpulseservicos.com',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Do Cheff',
      description: 'Site comercial profissional com design atrativo e funcional',
      tech: ['React.tsx', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/joehadest/docheffrn',
      demo: 'https://www.do-cheff-rn.com.br/',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Webpulse Serviços',
      description: 'Website corporativo da Webpulse com design moderno e responsivo',
      tech: ['React.tsx', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/joehadest/webpulse',
      demo: 'https://www.webpulseservicos.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gestão de Produtos',
      description: 'Sistema de gerenciamento de produtos com interface intuitiva',
      tech: ['TypeScript', 'React', 'Tailwind'],
      github: 'https://github.com/joehadest/gest-odeprodutos',
      demo: 'https://gest-odeprodutos.vercel.app',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JJ Tattoo',
      description: 'Landing page elegante para estúdio de tatuagem',
      tech: ['React.tsx', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/joehadest/jj-tattoo',
      demo: 'https://jj-tattoo.vercel.app',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Baracho',
      description: 'Website moderno e responsivo com design atrativo',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/joehadest/baracho',
      demo: 'https://github.com/joehadest/baracho',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const skills = [
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'HTML5', icon: '🏗️' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Vercel', icon: '▲' },
    { name: 'SEO', icon: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header/Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-950/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Code2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Joel Melo
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Início', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative group px-2 py-1 hover:text-blue-400 transition-all duration-300"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative z-50 p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-slate-900/95 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl shadow-blue-500/20 animate-slide-down overflow-hidden">
              <div className="flex flex-col p-4 gap-2">
                {['Início', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-3 hover:bg-blue-500/10 rounded-lg transition-all duration-300 hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="início" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Disponível para novos projetos</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 animate-slide-up leading-tight">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Desenvolvedor
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Front-end
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Transformo <span className="text-blue-400 font-semibold">ideias</span> em interfaces{' '}
            <span className="text-purple-400 font-semibold">simples</span>,{' '}
            <span className="text-pink-400 font-semibold">responsivas</span> e{' '}
            <span className="text-cyan-400 font-semibold">acessíveis</span>
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#projetos" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Ver Projetos
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a 
              href="#contato" 
              className="group px-8 py-4 border-2 border-blue-400/50 hover:border-blue-400 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Entre em Contato
              </span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full p-1">
              <div className="w-1.5 h-3 bg-blue-400 rounded-full mx-auto animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sou <span className="text-blue-400 font-semibold">Joel Melo (joe)</span>, desenvolvedor front-end especializado em criar 
                  interfaces simples, responsivas e acessíveis. Foco em projetos web 
                  com HTML, CSS, JavaScript e TypeScript.
                </p>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Tenho experiência com deploy e hospedagem em <span className="text-purple-400 font-semibold">Vercel</span> para sites e 
                  apps estáticos, sempre buscando otimização de performance, SEO básico 
                  e as melhores práticas de desenvolvimento.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-blue-400" />
                Habilidades
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group relative p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                      <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projetos em Destaque
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Confira alguns dos meus trabalhos recentes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-transparent transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10`}></div>
                <div className="absolute inset-[1px] bg-slate-900 rounded-2xl -z-10"></div>

                {/* Animated Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <div className={`w-3 h-3 bg-gradient-to-br ${project.gradient} rounded-full animate-pulse`}></div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 group/link"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover/link:text-blue-400 transition-colors" />
                      <span className="text-sm font-medium">Código</span>
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 hover:scale-105 group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vamos Trabalhar Juntos?
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Estou sempre aberto a novas oportunidades e colaborações.<br />
            <span className="text-blue-400 font-semibold">Vamos criar algo incrível!</span>
          </p>

          <div className="flex justify-center gap-6 flex-wrap mb-12">
            <a 
              href="https://github.com/joehadest"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <Github className="w-12 h-12 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <span className="font-semibold group-hover:text-blue-400 transition-colors">GitHub</span>
                <span className="text-sm text-gray-500">@joehadest</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/joel-melo-ab60b729b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <Linkedin className="w-12 h-12 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <div className="absolute inset-0 bg-blue-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <span className="font-semibold group-hover:text-blue-600 transition-colors">LinkedIn</span>
                <span className="text-sm text-gray-500">Joel Melo</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/joehadest/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <svg className="w-12 h-12 text-gray-400 group-hover:text-pink-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                  </svg>
                  <div className="absolute inset-0 bg-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <span className="font-semibold group-hover:text-pink-500 transition-colors">Instagram</span>
                <span className="text-sm text-gray-500">@joehadest</span>
              </div>
            </a>
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
            <p className="text-2xl font-semibold mb-4">Pronto para começar seu projeto?</p>
            <p className="text-gray-400 mb-6">Vamos transformar sua ideia em realidade!</p>
            <div className="inline-flex gap-2 items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform cursor-pointer">
              <Zap className="w-5 h-5" />
              <span>Entre em contato agora</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 py-12 px-6 bg-gradient-to-b from-transparent to-slate-950">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Joel Melo
              </span>
            </div>

            <div className="text-center text-gray-400">
              <p className="mb-2">Desenvolvido com React + Tailwind CSS</p>
              <p>&copy; 2025 Joel Melo. Todos os direitos reservados.</p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/joehadest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/joel-melo-ab60b729b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
