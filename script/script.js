
  document.getElementById('copyEmailBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const email = "luizmiguelsouzasouza79@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const aviso = document.createElement('div');
      aviso.textContent = "Email copiado!";
      aviso.style.position = "fixed";
      aviso.style.bottom = "30px";
      aviso.style.left = "50%";
      aviso.style.transform = "translateX(-50%)";
      aviso.style.background = "#b300ff";
      aviso.style.color = "#fff";
      aviso.style.padding = "10px 20px";
      aviso.style.borderRadius = "8px";
      aviso.style.fontFamily = "Poppins, sans-serif";
      aviso.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
      aviso.style.zIndex = "9999";
      document.body.appendChild(aviso);
      setTimeout(() => aviso.remove(), 2000);
    });
  });




    function sobre() { 
        document.getElementById("conteiner").innerHTML = `
       <div class="card">
  <h2>Sobre Mim</h2>
  <p>Olá! Meu nome é <strong>Luiz Miguel Souza</strong>, tenho 17 anos e sou estudante da <strong>Etec de Praia Grande</strong>, onde curso <strong>Informática para Internet</strong>, uma formação voltada ao desenvolvimento web e às tecnologias modernas.
  Onde estudo estou sendo treinado para trabalhar em <strong>Equipe</strong> e sob <strong>Pressão</strong>, habilidades essenciais no mercado de trabalho atual.
  </p>

  <p>Durante o curso, aprendi e pratiquei diversas linguagens e ferramentas essenciais, como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, <strong>TypeScript</strong>, <strong>Ionic Framework</strong>, <strong>C++</strong> e <strong>C#</strong>. Essas tecnologias me permitem criar aplicações completas, do front-end ao back-end, com foco em desempenho e uma boa experiência do usuário.</p>

  <p>Atualmente, estou em transição para me tornar um <strong>desenvolvedor Full Stack</strong>, ampliando minhas habilidades e aprofundando meus conhecimentos em diferentes áreas da programação.</p>

  <p>Estudo e aplico práticas de programação há cerca de 5 anos. Sempre tive interesse na área de informática. comecei com <strong>Python</strong>, desenvolvendo sistemas simples, e logo migrei para o <strong>desenvolvimento web</strong>, onde me encontrei profissionalmente.</p>

  <p>Sou um entusiasta da tecnologia e da programação, sempre buscando aprender mais e me aperfeiçoar no que faço. Gosto de transformar ideias em projetos e criar soluções que realmente façam a diferença.</p>
</div>
        `;


    };

      function soft() { 
  document.getElementById("conteiner").innerHTML = `
    <div class="card">
      <h2>Soft Skills</h2>
      <div class="soft-grid">

        <div class="soft-item">
          <h3>Proatividade</h3>
          <p>Capacidade de agir antecipadamente, identificando oportunidades e tomando iniciativa para resolver problemas antes que se tornem obstáculos.</p>
        </div>

        <div class="soft-item">
          <h3>Olhar Técnico</h3>
          <p>Habilidade de analisar situações com pensamento lógico e crítico, identificando detalhes técnicos e propondo soluções eficientes e sustentáveis.</p>
        </div>

        <div class="soft-item">
          <h3>Resiliência</h3>
          <p>Capacidade de manter o foco e a calma diante de desafios e pressões, aprendendo com as dificuldades e encontrando soluções equilibradas.</p>
        </div>

        <div class="soft-item">
          <h3>Gestão de Tempo</h3>
          <p>Organização e priorização eficiente das tarefas, garantindo que prazos sejam cumpridos sem comprometer a qualidade do trabalho.</p>
        </div>

        <div class="soft-item">
          <h3>Comunicação Eficaz</h3>
          <p>Capacidade de transmitir informações de forma clara e objetiva, facilitando a colaboração e o entendimento entre equipes e partes interessadas.</p>
        </div>

        <div class="soft-item">
          <h3>Trabalho em Equipe</h3>
          <p>Disposição para colaborar, ouvir diferentes pontos de vista e contribuir para o sucesso coletivo, mantendo um ambiente positivo e cooperativo.</p>
        </div>

      </div>
    </div>
  `;
};


   function hard() {
  document.getElementById("conteiner").innerHTML = `
    <div class="card">
      <h2>Hard Skills</h2>
      <div class="hard-grid">
        <div class="hard-column">
          <h3>Front-End:</h3>
          <div class="hard-item">
            <p><strong>HTML:</strong> Estrutura básica para páginas web.</p>
          </div>
          <div class="hard-item">
            <p><strong>CSS:</strong> Estilização e layout de páginas web.</p>
          </div>
          <div class="hard-item">
            <p><strong>JavaScript:</strong> Linguagem para interatividade no navegador.</p>
          </div>
          <div class="hard-item">
            <p><strong>Bootstrap:</strong> Framework CSS para design responsivo.</p>
          </div>
          <div class="hard-item">
            <p><strong>Ionic:</strong> Framework para apps móveis híbridos.</p>
          </div>
          <div class="hard-item">
            <p><strong>Git, GitHub:</strong> Controle de versão e hospedagem de código.</p>
          </div>
        </div>

        <div class="hard-column">
          <h3>Back-End:</h3>
          <div class="hard-item">
            <p><strong>JavaScript:</strong> Execução de código no servidor (Node.js).</p>
          </div>
          <div class="hard-item">
            <p><strong>PHP:</strong> Linguagem para desenvolvimento web no servidor.</p>
          </div>
          <div class="hard-item">
            <p><strong>C++:</strong> Linguagem para aplicações de alto desempenho.</p>
          </div>
          <div class="hard-item">
            <p><strong>C#:</strong> Linguagem para desenvolvimento Windows e web.</p>
          </div>
          <div class="hard-item">
            <p><strong>MySQL:</strong> Sistema de gerenciamento de banco de dados.</p>
          </div>
          <div class="hard-item">
            <p><strong>Ionic Framework, Angular, TypeScript:</strong> Desenvolvimento de apps móveis e web modernos.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
