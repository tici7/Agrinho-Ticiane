## index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agro Forte</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>🌱 Agro Forte</h1>
    <p>Futuro Sustentável — Construindo um futuro melhor através da sustentabilidade e preservação.</p>
  </header>

  <nav>
    <a href="#sobre">Sobre</a>
    <a href="#sustentabilidade">Sustentabilidade</a>
    <a href="#quiz">Quiz</a>
    <a href="#opiniao">Opinião</a>
  </nav>

  <section id="sobre">
    <h2>🌿 Sobre o Projeto</h2>

    <p>
      O Agro Forte incentiva práticas agrícolas sustentáveis,
      preservação ambiental e uso consciente dos recursos naturais.
    </p>

    <img
      class="banner"
      src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
      alt="Campo sustentável"
    >

    <div class="cards">

      <div class="card">
        <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop">

        <div class="card-content">
          <h3>🌎 Preservação</h3>

          <p>
            Cuidar das florestas e rios ajuda o planeta e as futuras gerações.
          </p>
        </div>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop">

        <div class="card-content">
          <h3>🚜 Agricultura Sustentável</h3>

          <p>
            Produzir alimentos respeitando a natureza é essencial.
          </p>
        </div>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1000&auto=format&fit=crop">

        <div class="card-content">
          <h3>💧 Economia de Água</h3>

          <p>
            Economizar água ajuda a preservar os recursos naturais.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section id="sustentabilidade">
    <h2>♻️ Como melhorar o futuro?</h2>

    <ul>
      <li>✅ Reciclar materiais</li>
      <li>✅ Plantar árvores</li>
      <li>✅ Economizar água</li>
      <li>✅ Usar energia limpa</li>
      <li>✅ Preservar rios e florestas</li>
    </ul>
  </section>

  <section id="quiz">
    <h2>🧠 Quiz Sustentável</h2>

    <div class="quiz">

      <div class="question">
        <h3>1. Qual atitude ajuda o meio ambiente?</h3>

        <label>
          <input type="radio" name="q1" value="certo">
          Reciclar lixo
        </label>

        <label>
          <input type="radio" name="q1" value="errado">
          Jogar lixo no rio
        </label>

        <label>
          <input type="radio" name="q1" value="errado">
          Desmatar florestas
        </label>
      </div>

      <div class="question">
        <h3>2. Como economizar água?</h3>

        <label>
          <input type="radio" name="q2" value="certo">
          Fechar a torneira
        </label>

        <label>
          <input type="radio" name="q2" value="errado">
          Desperdiçar água
        </label>

        <label>
          <input type="radio" name="q2" value="errado">
          Deixar mangueira ligada
        </label>
      </div>

      <div class="question">
        <h3>3. O que é sustentabilidade?</h3>

        <label>
          <input type="radio" name="q3" value="certo">
          Preservar a natureza
        </label>

        <label>
          <input type="radio" name="q3" value="errado">
          Poluir rios
        </label>

        <label>
          <input type="radio" name="q3" value="errado">
          Destruir florestas
        </label>
      </div>

      <button onclick="corrigirQuiz()">
        Ver Resultado
      </button>

      <div id="resultado"></div>

    </div>
  </section>

  <section id="opiniao">
    <h2>💡 Sua Opinião</h2>

    <p>
      O que podemos fazer para melhorar o planeta?
    </p>

    <textarea id="textoOpiniao" placeholder="Digite sua opinião..."></textarea>

    <button onclick="enviarOpiniao()">
      Enviar
    </button>

    <p id="mensagem"></p>
  </section>

  <footer>
    <p>🌱 Agro Forte © 2026</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## style.css

```css
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial, sans-serif;
}

body{
  background:#f4fff4;
  color:#234;
  line-height:1.6;
}

header{
  background:linear-gradient(to right,#1b5e20,#43a047);
  color:white;
  text-align:center;
  padding:50px 20px;
}

header h1{
  font-size:3rem;
  margin-bottom:10px;
}

nav{
  background:#2e7d32;
  text-align:center;
  padding:15px;
}

nav a{
  color:white;
  text-decoration:none;
  margin:0 15px;
  font-weight:bold;
}

section{
  max-width:1200px;
  margin:auto;
  padding:50px 20px;
}

.banner{
  width:100%;
  border-radius:15px;
  margin-top:25px;
  box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
  margin-top:30px;
}

.card{
  background:white;
  border-radius:12px;
  overflow:hidden;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card img{
  width:100%;
  height:200px;
  object-fit:cover;
}

.card-content{
  padding:20px;
}

.quiz{
  background:white;
  padding:30px;
  border-radius:15px;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.question{
  margin-bottom:25px;
}

.question h3{
  margin-bottom:10px;
  color:#1b5e20;
}

.question label{
  display:block;
  margin:8px 0;
}

button{
  background:#2e7d32;
  color:white;
  border:none;
  padding:12px 25px;
  border-radius:8px;
  cursor:pointer;
  margin-top:10px;
  transition:0.3s;
}

button:hover{
  background:#1b5e20;
}

#resultado{
  margin-top:20px;
  font-size:1.2rem;
  font-weight:bold;
  color:#1b5e20;
}

textarea{
  width:100%;
  height:120px;
  padding:15px;
  margin-top:15px;
  border-radius:10px;
  border:1px solid #aaa;
  resize:none;
}

#mensagem{
  margin-top:15px;
  color:#1b5e20;
  font-weight:bold;
}

footer{
  background:#1b5e20;
  color:white;
  text-align:center;
  padding:20px;
  margin-top:40px;
}
```

---

## script.js

```javascript
function corrigirQuiz(){

  let pontos = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if(q1 && q1.value === "certo"){
    pontos++;
  }

  if(q2 && q2.value === "certo"){
    pontos++;
  }

  if(q3 && q3.value === "certo"){
    pontos++;
  }

  const resultado = document.getElementById("resultado");

  resultado.innerHTML =
    "🌟 Você acertou " + pontos + " de 3 perguntas!";

  if(pontos === 3){
    resultado.innerHTML +=
      "<br>Parabéns! Você entende sobre sustentabilidade 🌎";
  }
}

function enviarOpiniao(){

  const texto = document.getElementById("textoOpiniao").value;

  const mensagem = document.getElementById("mensagem");

  if(texto.trim() === ""){
    mensagem.innerHTML =
      "⚠️ Digite uma opinião antes de enviar.";
  }else{
    mensagem.innerHTML =
      "✅ Obrigado pela sua opinião! Juntos podemos construir um futuro melhor.";
  }
}
```
