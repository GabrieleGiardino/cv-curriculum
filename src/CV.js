import React from 'react';
import { Link } from 'react-scroll'; // Importa il pacchetto react-scroll per facilitare lo scroll fluido
import './Curriculum.css'
// Componente per la Navbar
const MyNav = () => {
  return (
    <div>
      {/* Intestazione con informazioni personali */}
      <header className="bg-light text-center py-3">
        <h1>Gabriele Giardino</h1>
        <p>Parma, Italia</p>
        <p>Email: <a href="mailto:gabrielegiardino@hotmail.it">gabrielegiardino@hotmail.it</a></p>
        <p>Telefono: <a href="tel:+3939382769064">+39 39382769064</a></p>
      </header>
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="profile" smooth={true} duration={500}>
                Profilo Professionale
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500}>
                Competenze Tecniche
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="experience" smooth={true} duration={500}>
                Esperienze Lavorative
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="education" smooth={true} duration={500}>
                Istruzione e Formazione
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="languages" smooth={true} duration={500}>
                Lingue
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="soft-skills" smooth={true} duration={500}>
                Competenze Trasversali
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profilo Professionale */}
      <section id="profile">
        <h2>Profilo Professionale</h2>
        <p>
          Aspirante <strong>Web Developer</strong> con esperienza in gestione operativa, problem solving e coordinamento di team. Attualmente frequento il corso di Web Development presso Epicode School, dove sto acquisendo competenze in HTML, CSS, JavaScript e React. Sono una persona dinamica, con ottime capacità di comunicazione e attitudine al lavoro in squadra.
        </p>
      </section>
      <hr />

      {/* Competenze Tecniche */}
      <section id="skills">
        <h2>Competenze Tecniche</h2>
        <ul>
          <li>Linguaggi di programmazione: HTML, CSS, JavaScript</li>
          <li>Framework e librerie: React</li>
          <li>Strumenti di sviluppo: Git, GitHub, VS Code</li>
          <li>Database: MySQL (livello base)</li>
          <li>Gestione e-commerce: esperienza nella gestione di negozi fisici e online</li>
          <li>Pacchetto Office: Excel, Word, PowerPoint</li>
        </ul>
      </section>
      <hr />

      {/* Esperienza Lavorativa */}
      <section id="experience">
        <h2>Esperienza Lavorativa</h2>

        {/* EULIP Srl */}
        <div style={{ marginBottom: '20px' }}>
          <h3>EULIP Srl | Operaio (Contratto Indeterminato)</h3>
          <p>Attualmente in ruolo presso EULIP Srl.</p>
        </div>

        {/* Clean B&B */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Clean B&B | Key Holder</h3>
          <p><em>Giugno 2022 - Marzo 2023 | Parma, Italia</em></p>
          <ul>
            <li>Gestione di 23 appartamenti su Parma e provincia.</li>
            <li>Problem solving e assistenza clienti tramite il portale "Kross".</li>
            <li>Coordinamento delle richieste del team Area Manager.</li>
          </ul>
        </div>

        {/* Helbiz SPA */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Helbiz SPA | Impiegato</h3>
          <p><em>Settembre 2020 - Marzo 2021 | Parma, Italia</em></p>
          <ul>
            <li>Gestione attrezzature e coordinamento turni del team.</li>
            <li>Interazione con il portale aziendale per il monitoraggio e la risoluzione di problemi.</li>
          </ul>
        </div>

        {/* WeedUP */}
        <div style={{ marginBottom: '20px' }}>
          <h3>WeedUP | Co-Proprietario</h3>
          <p><em>Dicembre 2019 - Luglio 2020 | Parma & Bologna, Italia</em></p>
          <ul>
            <li>Creazione e gestione di un negozio fisico e online.</li>
            <li>Gestione logistica, vendite e strategie di marketing.</li>
          </ul>
        </div>

        {/* EULIP SPA (precedente esperienza) */}
        <div style={{ marginBottom: '20px' }}>
          <h3>EULIP SPA | Operaio Generico</h3>
          <p><em>Gennaio 2017 - Novembre 2019 | Parma, Italia</em></p>
          <ul>
            <li>Carico/scarico merci con muletto e transpallet elettrico.</li>
            <li>Utilizzo di strumenti industriali come etichettatrici e imballatori.</li>
          </ul>
        </div>

        {/* Gestione B&B "Al Conservatorio" */}
        <div>
          <h3>Gestione B&B "Al Conservatorio"</h3>
          <p><em>Gennaio 2016 - Dicembre 2016 | Parma, Italia</em></p>
          <ul>
            <li>Preparazione e gestione di una casa vacanze.</li>
            <li>Assistenza clienti e gestione prenotazioni.</li>
          </ul>
        </div>
      </section>
      <hr />

      {/* Istruzione e Formazione */}
      <section id="education">
        <h2>Istruzione e Formazione</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Epicode School | Corso Web Development</h3>
          <p><em>Attualmente in corso</em></p>
          <ul>
            <li>HTML, CSS, JavaScript, React</li>
            <li>Sviluppo di applicazioni web</li>
            <li>Git &amp; GitHub per il controllo di versione</li>
          </ul>
        </div>
        <div>
          <h3>Diploma Liceo Scientifico "Giacomo Leopardi"</h3>
        </div>
      </section>
      <hr />

      {/* Lingue */}
      <section id="languages">
        <h2>Lingue</h2>
        <ul>
          <li>Italiano (Madrelingua)</li>
          <li>Inglese (Buona conoscenza, scritto e parlato)</li>
          <li>Francese (Base)</li>
        </ul>
      </section>
      <hr />

      {/* Competenze Trasversali */}
      <section id="soft-skills">
        <h2>Competenze Trasversali</h2>
        <ul>
          <li>Problem solving</li>
          <li>Lavoro di squadra</li>
          <li>Gestione del tempo</li>
          <li>Comunicazione efficace</li>
          <li>Adattabilità e voglia di imparare</li>
        </ul>
      </section>
      <hr />

      <footer style={{ fontSize: '0.8em', textAlign: 'center' }}>
        <p>
          <small>Autorizzo il trattamento dei dati personali ai sensi del GDPR (Regolamento UE 2016/679).</small>
        </p>
      </footer>
    </div>
  );
};

export default MyNav;
