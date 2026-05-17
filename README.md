# 💎 Steven Universe Local API Component

Uma estrutura de dados em formato JSON encapsulada em um módulo JavaScript (`ES Module`), projetada para fornecer informações detalhadas sobre os personagens principais e a mitologia da animação **Steven Universe**. 

Este componente foi desenvolvido para simular o comportamento de uma API RESTful local, facilitando a renderização dinâmica de interfaces (como catálogos, bibliotecas virtuais ou landing pages) sem a necessidade de dependências externas de banco de dados.

---

## 🚀 Funcionalidades

* **Módulo Nativo (ES6):** Utiliza `export const` permitindo a importação direta via `import { universe } from '...'` em scripts do tipo `module`.
* **Dados Estruturados:** Contém informações consistentes de diversos personagens, incluindo:
  * Nome do personagem.
  * URL de imagens hospedadas (imagens oficiais da Wiki).
  * Biografia/Descrição detalhada de cada um.
  * Armas características (*Manoplas, Espadas, Chicotes, etc.*).
  * Idade cronológica estimada no universo da série.
  * Links de referência para a documentação oficial da Fandom.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+):** Estruturação de dados e modularização nativa.
* **JSON:** Formato leve para intercâmbio e mapeamento de dados.

---

## 📦 Como Utilizar

### 1. Integração no HTML
Para que o navegador permita a importação do arquivo de dados, certifique-se de carregar o script que vai consumir a API utilizando o atributo `type="module"`:

```html
<script src="./src/js/carregarCards.js" type="module" defer></script>
