# 🎸 Music Place - Catálogo de Instrumentos

![Badge](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Badge](https://img.shields.io/badge/Vite-5.0.0-purple?logo=vite)
![Badge](https://img.shields.io/badge/Licen%C3%A7a-MIT-green)

Music Place é uma aplicação front-end desenvolvida em React para consumir, listar e interagir com uma API de instrumentos musicais. O projeto foi construído progressivamente, aplicando conceitos modernos de arquitetura de software como **Atomic Design** e gerenciamento de estado avançado, resultando em uma base de código limpa, organizada e escalável.

**[➡️ Ver demonstração online](https://catalogo-de-instrumentos.netlify.app/)**

---

## ✨ Features

-   ✅ **Visualização Dupla:** Os dados podem ser vistos em formato de **Tabela** ou em **Cards**.
-   ✅ **Busca Dinâmica:** Filtre a lista de instrumentos em tempo real pelo nome.
-   ✅ **Ordenação de Colunas:** Na tabela, clique nos cabeçalhos para ordenar os dados por nome, tipo, marca, etc. (ascendente e descendente).
-   ✅ **Navegação Ativa:** O link do menu fica destacado indicando a página atual.
-   ✅ **Layout Responsivo:** A interface se adapta a diferentes tamanhos de tela.
-   ✅ **Feedback de UI:** Exibição clara de mensagens de "Carregando..." e "Erro" durante a busca de dados.
-   ✅ **Formatação de Dados:** Valores monetários são exibidos no formato brasileiro (BRL).

---

## 🏛️ Arquitetura e Conceitos Aplicados

Este projeto foi além de uma simples listagem, aplicando conceitos importantes para a construção de aplicações robustas:

-   **Atomic Design:** A interface foi componentizada seguindo a hierarquia de **Átomos**, **Moléculas**, **Organismos** e **Templates**, garantindo máxima reutilização e manutenibilidade.
-   **Hook Customizado (`useGetInstruments`):** Toda a lógica de busca e gerenciamento de estado dos dados foi abstraída para um hook customizado, tornando os componentes de página mais limpos e focados apenas na exibição.
-   **State Lifting (Elevação de Estado):** O estado principal da aplicação (lista de instrumentos, termo de busca, ordenação) é gerenciado no componente `App.jsx` e distribuído para os componentes filhos via props, garantindo uma única fonte de verdade para os dados.

---

## 🛠️ Tecnologias

-   **React.js**
-   **Vite** (Ambiente de Desenvolvimento Rápido)
-   **React Router DOM** (Gerenciamento de Rotas)
-   **CSS3** (com Variáveis, Flexbox e Grid para Responsividade)
-   **Axios** (Cliente HTTP para chamadas à API)

---

## 🚀 Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DougBrando/musicapi.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd musicapi
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra o endereço [http://localhost:5173](http://localhost:5173) (ou a porta que aparecer no seu terminal) no seu navegador.

---

[GitHub](https://github.com/DougBrando) | [LinkedIn](https://www.linkedin.com/in/douglas-graca/)
