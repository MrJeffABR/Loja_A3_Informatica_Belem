"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  AtSign,
  BatteryCharging,
  Check,
  ChevronDown,
  Cpu,
  House,
  Laptop,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tablet,
  Tv,
  Truck,
  Volume2,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5591980237643";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://a3-informatica.mrjeffb.chatgpt.site").replace(/\/$/, "");
const FLEXMIND_WHATSAPP = `https://wa.me/5584986005544?text=${encodeURIComponent("Olá, gostaria de saber mais sobre os serviços da FlexMind! Vim através do site 'A3 Informática'")}`;

const services = [
  {
    icon: Monitor,
    title: "Desktop",
    text: "Falhas de inicialização, lentidão, aquecimento, upgrades e manutenção.",
    tag: "Computadores",
  },
  {
    icon: Laptop,
    title: "Notebook",
    text: "Tela, teclado, bateria, sistema, limpeza interna e diagnóstico técnico.",
    tag: "Mobilidade",
  },
  {
    icon: Smartphone,
    title: "Celular",
    text: "Troca de tela, bateria, câmera, alto-falante, botões e reparo em placa.",
    tag: "Smartphones",
  },
  {
    icon: Tablet,
    title: "Tablet",
    text: "Avaliação de tela, carga, bateria, conectividade e desempenho.",
    tag: "Tablets",
  },
  {
    icon: Tv,
    title: "TV Box",
    text: "Análise de energia, travamentos, conectividade e funcionamento.",
    tag: "Entretenimento",
  },
  {
    icon: Volume2,
    title: "Caixa Bluetooth",
    text: "Diagnóstico de áudio, carga, bateria, conexões e comandos.",
    tag: "Áudio",
  },
];

const faqs = [
  {
    question: "A A3 Informática atende todas as marcas?",
    answer:
      "Sim. A A3 Informática realiza assistência técnica multimarcas para aparelhos Samsung, Apple, Xiaomi, Redmi, POCO, Motorola, Realme, Asus, Dell, Lenovo, Acer, HP, JBL, Sony, LG e muitas outras marcas. A disponibilidade do reparo e das peças é confirmada após a avaliação do modelo.",
  },
  {
    question: "Quais aparelhos a A3 Informática atende?",
    answer:
      "A assistência é especializada em desktop, notebook, celular, tablet, TV Box e caixa Bluetooth. Se o seu aparelho não estiver nessa lista, fale com a equipe para confirmar a possibilidade de avaliação.",
  },
  {
    question: "Como descubro se o conserto compensa?",
    answer:
      "O primeiro passo é o diagnóstico. Com ele, você entende o problema e recebe as informações necessárias para decidir com mais segurança antes de autorizar o serviço.",
  },
  {
    question: "Posso pedir uma orientação antes de ir à assistência?",
    answer:
      "Sim. Envie pelo WhatsApp o tipo de aparelho, a marca ou modelo e uma descrição do defeito. Isso agiliza o primeiro atendimento, mas a confirmação técnica pode exigir avaliação presencial.",
  },
  {
    question: "Onde fica a A3 Informática?",
    answer:
      "Na Travessa Lomas Valentinas, 93A, bairro Sacramenta, em Belém–PA, CEP 66083-390.",
  },
  {
    question: "Como funciona o delivery da A3 Informática?",
    answer:
      "Após o preenchimento do diagnóstico rápido, escolha a opção de delivery. A equipe confirma o atendimento e combina a retirada do equipamento em sua residência. O diagnóstico e o serviço são realizados na loja e, ao final, o equipamento é devolvido no endereço combinado.",
  },
  {
    question: "A A3 Informática é assistência autorizada das marcas?",
    answer:
      "A A3 Informática é uma assistência técnica multimarcas independente. As marcas citadas pertencem aos seus respectivos titulares, e o atendimento a um produto não representa vínculo ou autorização oficial da fabricante.",
  },
];

const brandGroups = [
  { title: "Celulares e tablets", icon: Smartphone, text: "Samsung Galaxy S, A, M, Z, Note e Tab; Apple iPhone e iPad; Xiaomi, Redmi e POCO; Motorola Moto G, Edge e Razr; Realme, Asus Zenfone e ROG Phone; LG, Nokia, Huawei, Honor, TCL e Multilaser." },
  { title: "Notebooks e computadores", icon: Laptop, text: "Dell Inspiron, Vostro, Latitude e XPS; Lenovo IdeaPad, ThinkPad e Legion; Acer Aspire, Nitro e Predator; Asus VivoBook, Zenbook, TUF e ROG; HP Pavilion, ProBook e EliteBook; Samsung Book, Apple MacBook e iMac, Positivo, VAIO, Avell e LG Gram." },
  { title: "TV Box e streaming", icon: Tv, text: "Xiaomi Mi Box e TV Stick, Amazon Fire TV Stick, Roku, Apple TV, Google Chromecast e Google TV, Intelbras, Aquário, MXQ, Tanix e outros aparelhos de streaming e TV Box." },
  { title: "Caixas de som Bluetooth", icon: Volume2, text: "JBL Go, Flip, Charge, Boombox e PartyBox; Bose SoundLink; Sony SRS; LG XBoom; Samsung Sound Tower; Anker Soundcore, Philips, Mondial, Pulse, Xiaomi e outras caixas Bluetooth." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ElectronicsStore"],
      "@id": `${SITE_URL}/#empresa`,
      name: "A3 Informática",
      url: SITE_URL,
      image: `${SITE_URL}/images/a3-logo-oficial.png`,
      logo: `${SITE_URL}/images/a3-logo-oficial.png`,
      description: "Assistência técnica multimarcas e acessórios em Belém para celulares, tablets, notebooks, desktops, TV Box e caixas Bluetooth, com serviço de coleta e devolução agendada.",
      telephone: "+55 91 98023-7643",
      address: { "@type": "PostalAddress", streetAddress: "Travessa Lomas Valentinas, 93A", addressLocality: "Belém", addressRegion: "PA", postalCode: "66083-390", addressCountry: "BR" },
      areaServed: { "@type": "City", name: "Belém" },
      sameAs: ["https://instagram.com/a3_informatica"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de assistência técnica multimarcas",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `Assistência técnica para ${service.title}`, serviceType: `Diagnóstico, manutenção e reparo de ${service.title}`, description: service.text, provider: { "@id": `${SITE_URL}/#empresa` }, areaServed: { "@type": "City", name: "Belém" } },
        })),
      },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "A3 Informática", inLanguage: "pt-BR", publisher: { "@id": `${SITE_URL}/#empresa` } },
    { "@type": "Service", "@id": `${SITE_URL}/#delivery`, name: "A3 Informática Delivery — coleta e devolução de equipamentos", description: "Retirada agendada do equipamento na residência do cliente, diagnóstico e reparo na loja e devolução no endereço combinado.", serviceType: "Delivery de assistência técnica", provider: { "@id": `${SITE_URL}/#empresa` }, areaServed: { "@type": "City", name: "Belém" } },
    { "@type": "FAQPage", "@id": `${SITE_URL}/#duvidas`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

function Logo({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <span className="brand brand--light" aria-label="A3 Informática">
        <Image
          className="brand__official-logo"
          src="/images/a3-logo-oficial.png"
          alt="A3 Informática — Assistência Técnica e Acessórios"
          width={470}
          height={273}
          unoptimized
        />
      </span>
    );
  }

  return (
    <span className="brand brand--header" aria-label="A3 Informática — Assistência Técnica e Acessórios">
      <Image
        className="brand__symbol"
        src="/images/a3-simbolo.png"
        alt=""
        width={244}
        height={153}
        priority
        unoptimized
      />
      <span className="brand__text">
        <strong>Informática</strong>
        <small>Assistência Técnica e Acessórios</small>
      </span>
    </span>
  );
}

function CircuitGraphic({ placement }: { placement: "hero" | "services" | "diagnostic" }) {
  const gradientId = `circuit-gradient-${placement}`;

  return (
    <svg className={`tech-circuit tech-circuit--${placement}`} viewBox="0 0 820 520" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="70" y1="440" x2="760" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B6EE8" stopOpacity="0" />
          <stop offset="0.46" stopColor="#76B9FF" />
          <stop offset="1" stopColor="#FF6900" />
        </linearGradient>
      </defs>
      <g className="tech-circuit__grid" stroke="currentColor" strokeWidth="1">
        <path d="M110 70V450M230 40V480M350 70V450M470 40V480M590 70V450M710 40V480" />
        <path d="M70 110H750M40 230H780M70 350H750M40 470H780" />
      </g>
      <g className="tech-circuit__traces" stroke={`url(#${gradientId})`} strokeLinecap="round" strokeLinejoin="round">
        <path className="tech-circuit__trace tech-circuit__trace--one" d="M28 414H164L226 352H362L432 282H612L688 206H792" />
        <path className="tech-circuit__trace tech-circuit__trace--two" d="M84 486V402L156 330V212L244 124H392L454 62H694" />
        <path className="tech-circuit__trace tech-circuit__trace--three" d="M202 504V430L290 342H486L554 274V144L630 68H804" />
      </g>
      <g className="tech-circuit__nodes">
        <circle cx="226" cy="352" r="7" />
        <circle cx="432" cy="282" r="7" />
        <circle cx="688" cy="206" r="7" />
        <circle cx="244" cy="124" r="5" />
        <circle cx="554" cy="274" r="5" />
      </g>
      <g className="tech-circuit__orbit" transform="translate(612 144)">
        <circle r="62" />
        <circle r="42" />
        <path d="M0-62A62 62 0 0 1 62 0" />
        <circle className="tech-circuit__satellite" cx="0" cy="-62" r="5" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [device, setDevice] = useState("");
  const [problem, setProblem] = useState("");
  const [urgency, setUrgency] = useState("");
  const [serviceMode, setServiceMode] = useState("");
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [diagnosticOrigin, setDiagnosticOrigin] = useState("Site");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!diagnosticOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDiagnosticOpen(false);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [diagnosticOpen]);

  function openDiagnostic(origin: string, selectedDevice = "", delivery = false) {
    setDiagnosticOrigin(origin);
    if (selectedDevice) setDevice(selectedDevice);
    if (delivery) setServiceMode("Delivery: buscar e devolver em minha residência");
    setDiagnosticOpen(true);
  }

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--scroll", `${max > 0 ? window.scrollY / max : 0}`);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!hero || !finePointer.matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", `${(event.clientX - rect.left) / rect.width - 0.5}`);
        hero.style.setProperty("--my", `${(event.clientY - rect.top) / rect.height - 0.5}`);
      });
    };
    hero.addEventListener("pointermove", move);
    return () => {
      hero.removeEventListener("pointermove", move);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function sendDiagnostic(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Olá, A3 Informática! Gostaria de solicitar uma avaliação.",
      `Origem do contato: ${diagnosticOrigin}`,
      `Aparelho: ${device || "não informado"}`,
      `Problema: ${problem || "não informado"}`,
      `Urgência: ${urgency || "não informada"}`,
      `Modalidade: ${serviceMode || "não informada"}`,
    ].join("\n");
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="scroll-progress" aria-hidden="true" />

      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <span><MapPin size={14} /> Sacramenta, Belém–PA</span>
          <button className="utility-bar__action" onClick={() => openDiagnostic("Barra superior")}>
            Atendimento pelo WhatsApp <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav">
          <a href="#inicio" className="logo-link" aria-label="Ir ao início">
            <Logo />
          </a>
          <nav className={`nav__links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#delivery" onClick={() => setMenuOpen(false)}>Delivery</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#diagnostico" onClick={() => setMenuOpen(false)}>Diagnóstico</a>
            <a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
          <button className="button button--primary nav__cta" onClick={() => openDiagnostic("Menu principal")}>
            Solicitar avaliação
          </button>
          <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="inicio" ref={heroRef}>
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__shade" aria-hidden="true" />
        <CircuitGraphic placement="hero" />
        <div className="hero__slash hero__slash--one" aria-hidden="true" />
        <div className="hero__slash hero__slash--two" aria-hidden="true" />
        <div className="shell hero__inner">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light"><Sparkles size={16} /> Assistência técnica e acessórios</span>
            <h1><span>A3 Informática.</span><br /><em>Assistência técnica para seus eletrônicos.</em></h1>
            <p>Diagnóstico e reparo multimarcas em Belém para desktop, notebook, celular, tablet, TV Box e caixa Bluetooth.</p>
            <div className="hero__actions">
              <button className="button button--orange" onClick={() => openDiagnostic("Seção principal")}>
                <MessageCircle size={18} /> Iniciar diagnóstico
              </button>
              <a className="button button--glass" href="#servicos">Conhecer serviços <ArrowDown size={18} /></a>
            </div>
            <div className="hero__proof">
              <span><MapPin /> Sacramenta, Belém–PA</span>
              <span><Truck /> Busca e devolução agendadas</span>
              <span><ShieldCheck /> Atendimento multimarcas</span>
            </div>
          </div>
          <div className="hero__service-panel" aria-label="Equipamentos atendidos pela A3 Informática">
            <div className="hero__service-panel-top">
              <span>Especialidades</span>
              <small>6 categorias</small>
            </div>
            <div className="hero__service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <div key={service.title}><Icon aria-hidden="true" /><span>{service.title}</span></div>;
              })}
            </div>
            <div className="hero__delivery"><Truck aria-hidden="true" /><span><strong>A3 Informática Delivery</strong><small>Buscamos e devolvemos em sua residência</small></span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais">
        <div className="shell trust-strip__grid">
          <div><strong>6</strong><span>categorias de aparelhos</span></div>
          <div><SearchCheck /><span>Avaliação antes do reparo</span></div>
          <div><ShieldCheck /><span>Cuidado técnico em cada etapa</span></div>
          <div><Truck /><span>Delivery: busca e devolução</span></div>
        </div>
      </section>

      <section className="section section--white" id="servicos">
        <CircuitGraphic placement="services" />
        <div className="shell">
          <div className="section-heading" data-reveal="split">
            <div>
              <span className="eyebrow">Especialidades</span>
              <h2>Uma assistência para os aparelhos que movem o seu dia.</h2>
            </div>
            <p>Do trabalho ao entretenimento, a A3 Informática avalia o defeito e orienta o próximo passo com objetividade.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title} data-reveal="scale" style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
                  <span className="service-card__index">0{index + 1}</span>
                  <div className="service-card__icon"><Icon strokeWidth={1.6} /></div>
                  <span className="service-card__tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <button className="service-card__action" onClick={() => openDiagnostic(`Serviço: ${service.title}`, service.title)}>
                    Consultar atendimento <ArrowRight />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--cloud brands" id="marcas">
        <div className="shell">
          <div className="section-heading" data-reveal="split">
            <div>
              <span className="eyebrow">Atendimento multimarcas</span>
              <h2>Assistência para as principais marcas e linhas.</h2>
            </div>
            <p>A A3 Informática atende aparelhos de diversas fabricantes. As linhas abaixo são exemplos; confirme o modelo e a disponibilidade de peças no diagnóstico.</p>
          </div>
          <div className="brand-grid">
            {brandGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <article className="brand-card" key={group.title} data-reveal="scale" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
                  <Icon aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </article>
              );
            })}
          </div>
          <p className="brands__notice">A3 Informática é uma assistência técnica independente. As marcas e linhas citadas pertencem aos seus respectivos titulares e são usadas apenas para identificar os equipamentos atendidos.</p>
        </div>
      </section>

      <section className="section delivery" id="delivery">
        <div className="delivery__track" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell delivery__grid">
          <div className="delivery__copy" data-reveal="left">
            <span className="eyebrow eyebrow--light"><Truck size={17} /> A3 Informática Delivery</span>
            <h2>Delivery de assistência técnica em Belém.</h2>
            <p>A A3 Informática busca o celular, notebook, computador, tablet, TV Box ou caixa Bluetooth em sua residência, realiza o diagnóstico e o serviço na loja e devolve o equipamento no endereço combinado.</p>
            <button className="button button--orange" onClick={() => openDiagnostic("A3 Informática Delivery", "", true)}>
              <Truck size={18} /> Solicitar coleta
            </button>
            <small>Coleta e devolução mediante agendamento e confirmação de atendimento.</small>
          </div>
          <div className="delivery__steps">
            {[
              ["01", "Solicite", "Preencha o diagnóstico e escolha a opção de delivery."],
              ["02", "Nós buscamos", "A retirada é combinada diretamente com você."],
              ["03", "Diagnosticamos", "O equipamento é avaliado na assistência técnica."],
              ["04", "Nós devolvemos", "Após a conclusão, levamos o equipamento à sua residência."],
            ].map(([number, title, text], index) => (
              <article key={number} data-reveal="right" style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
                <span>{number}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
                {index === 1 ? <Truck /> : index === 3 ? <House /> : <ArrowRight />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink story" id="processo">
        <div className="story__media" aria-hidden="true" />
        <div className="shell story__inner">
          <div className="story__copy" data-reveal="left">
            <span className="eyebrow eyebrow--light">Precisão antes de qualquer decisão</span>
            <h2>O problema certo exige o diagnóstico certo.</h2>
            <p>Você não precisa entender de tecnologia para ser bem atendido. Explique o que aconteceu; a equipe organiza as informações e conduz a avaliação.</p>
            <ul>
              <li><Check /> Explique o defeito em linguagem simples</li>
              <li><Check /> Receba uma orientação inicial no WhatsApp</li>
              <li><Check /> Autorize o serviço somente após a avaliação</li>
            </ul>
          </div>
          <div className="process-list">
            {[
              ["01", "Conte o problema", "Informe o aparelho, modelo e o que aconteceu."],
              ["02", "Escolha como enviar", "Leve à loja ou solicite a retirada pelo delivery da A3 Informática."],
              ["03", "Entenda a solução", "Você recebe as informações para decidir com segurança."],
              ["04", "Autorize o reparo", "O serviço segue após a sua aprovação."],
            ].map(([number, title, text], index) => (
              <article key={number} data-reveal="right" style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cloud expectation">
        <div className="shell expectation__grid">
          <div className="expectation__visual">
            <Image src="/images/a3-diagnostic.png" alt="Diagnóstico técnico em uma bancada de assistência" width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" loading="eager" unoptimized />
            <div className="expectation__stamp"><Wrench /><span>Atendimento<br /><strong>especializado</strong></span></div>
          </div>
          <div className="expectation__content" data-reveal="right">
            <span className="eyebrow">O que você pode esperar</span>
            <h2>Técnica, transparência e cuidado com o que é seu.</h2>
            <p>Um bom atendimento reduz dúvidas desde o primeiro contato. Por isso, a conversa começa pelo problema real e pelo uso que você faz do aparelho.</p>
            <div className="feature-list">
              <div><Cpu /><span><strong>Avaliação técnica</strong><small>Investigação do defeito antes da indicação do serviço.</small></span></div>
              <div><PackageCheck /><span><strong>Orientação objetiva</strong><small>Informações úteis para você decidir o próximo passo.</small></span></div>
              <div><BatteryCharging /><span><strong>Soluções multidevice</strong><small>Atendimento para equipamentos de trabalho, comunicação e lazer.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section diagnostic" id="diagnostico">
        <div className="diagnostic__orb diagnostic__orb--blue" aria-hidden="true" />
        <div className="diagnostic__orb diagnostic__orb--orange" aria-hidden="true" />
        <CircuitGraphic placement="diagnostic" />
        <div className="shell diagnostic__grid">
          <div className="diagnostic__copy" data-reveal="left">
            <span className="eyebrow eyebrow--light"><Zap size={16} /> Atendimento mais rápido</span>
            <h2>Comece com três informações.</h2>
            <p>Preencha o diagnóstico rápido e envie tudo organizado para a equipe no WhatsApp.</p>
            <div className="diagnostic__benefit"><span>01</span><p>Menos mensagens até explicar o problema.</p></div>
            <div className="diagnostic__benefit"><span>02</span><p>Orientação inicial mais direcionada.</p></div>
            <div className="diagnostic__benefit"><span>03</span><p>Você já chega com o atendimento encaminhado.</p></div>
          </div>
          <form className="diagnostic-form" onSubmit={sendDiagnostic} data-reveal="scale">
            <div className="diagnostic-form__top"><span>Diagnóstico rápido</span><small>leva menos de 1 minuto</small></div>
            <label>
              Qual é o aparelho?
              <select value={device} onChange={(e) => setDevice(e.target.value)} required>
                <option value="">Selecione uma opção</option>
                {services.map((service) => <option key={service.title}>{service.title}</option>)}
              </select>
            </label>
            <label>
              O que está acontecendo?
              <textarea value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Ex.: não liga, tela quebrada, descarrega rápido..." required />
            </label>
            <label>
              Quando você precisa resolver?
              <select value={urgency} onChange={(e) => setUrgency(e.target.value)} required>
                <option value="">Selecione uma opção</option>
                <option>O quanto antes</option>
                <option>Nesta semana</option>
                <option>Estou apenas pesquisando</option>
              </select>
            </label>
            <label>
              Como prefere enviar o aparelho?
              <select value={serviceMode} onChange={(e) => setServiceMode(e.target.value)} required>
                <option value="">Selecione uma opção</option>
                <option>Levar pessoalmente à assistência</option>
                <option>Delivery: buscar e devolver em minha residência</option>
              </select>
            </label>
            <button className="button button--orange button--full" type="submit"><MessageCircle /> Enviar para o WhatsApp</button>
            <p className="diagnostic-form__note">A avaliação inicial por mensagem não substitui o diagnóstico presencial.</p>
          </form>
        </div>
      </section>

      <section className="section section--white faq" id="duvidas">
        <div className="shell faq__grid">
          <div className="faq__heading" data-reveal="left">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Antes de levar seu aparelho.</h2>
            <p>Informações rápidas para você iniciar o atendimento com mais segurança.</p>
            <button className="faq__contact" onClick={() => openDiagnostic("Dúvidas frequentes")}>Ainda ficou com dúvida? <ArrowRight /></button>
          </div>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <article className={`faq__item ${openFaq === index ? "is-open" : ""}`} key={faq.question} data-reveal="right" style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{faq.question}</span><ChevronDown />
                </button>
                <div className="faq__answer"><p>{faq.answer}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact__photo" aria-hidden="true" />
        <div className="contact__overlay" aria-hidden="true" />
        <div className="shell contact__inner" data-reveal="left">
          <span className="eyebrow eyebrow--light">Assistência técnica em Belém</span>
          <h2>Seu aparelho merece uma avaliação profissional.</h2>
          <p>Fale diretamente com a A3 Informática e dê o primeiro passo para resolver o problema.</p>
          <div className="contact__actions">
            <button className="button button--orange" onClick={() => openDiagnostic("Seção de contato")}><MessageCircle /> (91) 98023-7643</button>
            <a className="button button--glass" href="https://www.google.com/maps/search/?api=1&query=Travessa+Lomas+Valentinas+93A+Sacramenta+Bel%C3%A9m+PA" target="_blank" rel="noreferrer"><MapPin /> Ver localização</a>
          </div>
          <address>Trav. Lomas Valentinas, 93A — Sacramenta, Belém–PA · CEP 66083-390</address>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__grid">
          <div><Logo light /><p>Assistência técnica e acessórios para os aparelhos que fazem parte da sua rotina.</p></div>
          <div><strong>Especialidades</strong><a href="#servicos">Desktop e notebook</a><a href="#servicos">Celular e tablet</a><a href="#servicos">TV Box e caixa Bluetooth</a></div>
          <div><strong>Atendimento</strong><button className="footer__action" onClick={() => openDiagnostic("Rodapé")}>WhatsApp</button><a href="https://instagram.com/a3_informatica" target="_blank" rel="noreferrer"><AtSign /> @a3_informatica</a><a href="#diagnostico">Diagnóstico rápido</a></div>
          <div><strong>Localização</strong><p>Trav. Lomas Valentinas, 93A<br />Sacramenta, Belém–PA<br />CEP 66083-390</p></div>
        </div>
        <div className="shell footer__bottom" aria-label="Desenvolvedor do site">
          <p>
            Desenvolvido por <a href="https://www.flexmind.tec.br" target="_blank" rel="noopener noreferrer">FlexMind</a>
          </p>
          <a className="footer__developer-phone" href={FLEXMIND_WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Falar com a FlexMind pelo WhatsApp no número 84 98600-5544">
            <MessageCircle aria-hidden="true" /> (84) 98600-5544
          </a>
        </div>
      </footer>

      <button className="whatsapp-float" onClick={() => openDiagnostic("Botão flutuante")} aria-label="Iniciar diagnóstico para falar com a A3 Informática no WhatsApp">
        <MessageCircle /> <span>Fale agora</span>
      </button>

      {diagnosticOpen && (
        <div className="diagnostic-modal" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDiagnosticOpen(false);
        }}>
          <section className="diagnostic-modal__panel" role="dialog" aria-modal="true" aria-labelledby="diagnostic-modal-title">
            <button className="diagnostic-modal__close" onClick={() => setDiagnosticOpen(false)} aria-label="Fechar diagnóstico"><X /></button>
            <div className="diagnostic-modal__intro">
              <span className="eyebrow"><Zap size={15} /> Antes do WhatsApp</span>
              <h2 id="diagnostic-modal-title">Conte o que aconteceu.</h2>
              <p>Essas informações seguem organizadas para a A3 Informática e agilizam o seu atendimento.</p>
            </div>
            <form className="diagnostic-form diagnostic-form--modal" onSubmit={sendDiagnostic}>
              <label>
                Qual é o aparelho?
                <select value={device} onChange={(e) => setDevice(e.target.value)} required autoFocus>
                  <option value="">Selecione uma opção</option>
                  {services.map((service) => <option key={service.title}>{service.title}</option>)}
                </select>
              </label>
              <label>
                O que está acontecendo?
                <textarea value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Ex.: não liga, tela quebrada, descarrega rápido..." required />
              </label>
              <label>
                Quando você precisa resolver?
                <select value={urgency} onChange={(e) => setUrgency(e.target.value)} required>
                  <option value="">Selecione uma opção</option>
                  <option>O quanto antes</option>
                  <option>Nesta semana</option>
                  <option>Estou apenas pesquisando</option>
                </select>
              </label>
              <label>
                Como prefere enviar o aparelho?
                <select value={serviceMode} onChange={(e) => setServiceMode(e.target.value)} required>
                  <option value="">Selecione uma opção</option>
                  <option>Levar pessoalmente à assistência</option>
                  <option>Delivery: buscar e devolver em minha residência</option>
                </select>
              </label>
              <button className="button button--orange button--full" type="submit"><MessageCircle /> Continuar no WhatsApp</button>
              <p className="diagnostic-form__note">O WhatsApp será aberto somente após o preenchimento.</p>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
