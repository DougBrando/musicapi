# 🎸 Music Place - Catálogo de Instrumentos

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Este repositório contém o **frontend** da aplicação Music Place, uma interface moderna e interativa para a visualização de um catálogo de instrumentos musicais.

**[➡️ Teste a aplicação ao vivo!](https://catalogo-de-instrumentos.netlify.app/)**

## 📖 Sobre o Projeto

Music Place é uma aplicação web que consome uma API de instrumentos para exibir os dados de forma flexível e amigável. O projeto foi estruturado com foco em boas práticas de desenvolvimento, como a arquitetura **Atomic Design**, resultando em um código limpo, reutilizável e de fácil manutenção.

A interface permite que o usuário explore o catálogo de duas maneiras distintas — uma **tabela detalhada** com ordenação dinâmica e uma visualização em **cards**, mais visual e direta. Além disso, conta com funcionalidades de busca em tempo real e uma interface totalmente responsiva.

## ✨ Features Principais

-   ✅ **Visualização Dupla:** Alterne entre os modos de exibição em **Tabela** ou **Cards**.
-   ✅ **Busca Dinâmica:** Filtre instrumentos pelo nome em tempo real.
-   ✅ **Ordenação Avançada:** Na tabela, clique nos cabeçalhos para ordenar as colunas de forma ascendente ou descendente.
-   ✅ **Feedback de Interface:** Mensagens claras de "Carregando..." e "Erro" para guiar o usuário durante as requisições.
-   ✅ **Layout Responsivo:** Experiência de uso consistente em desktops, tablets e smartphones.
-   ✅ **Formatação de Moeda:** Preços exibidos no padrão brasileiro (BRL).

## 🏛️ Arquitetura e Conceitos Aplicados

Para garantir a escalabilidade e a qualidade do código, foram aplicados os seguintes conceitos:

-   **Atomic Design:** Os componentes da interface foram organizados em **Átomos**, **Moléculas** e **Organismos**, promovendo o máximo reuso e facilitando a manutenção.
-   **Hook Customizado (`useGetInstruments`):** A lógica de busca de dados, gerenciamento de estado (carregamento, erro, dados) e ordenação foi centralizada em um único hook, mantendo os componentes de página enxutos e focados apenas na renderização.
-   **State Lifting:** O estado global da aplicação (lista de instrumentos, termo de busca, etc.) é controlado no componente principal e distribuído aos filhos via props, garantindo uma fonte única de verdade.

## ✨ Tecnologias Utilizadas

-   **React 18** (Biblioteca principal, inicializado com Vite)
-   **React Router DOM** (Para o gerenciamento de rotas e navegação)
-   **Axios** (Cliente HTTP para realizar as chamadas à API)
-   **CSS3 Moderno** (Utilizando Variáveis, Flexbox e Grid Layout)
-   **Vite** (Ambiente de desenvolvimento rápido e otimizado)

## 🚀 Como Executar o Projeto

Para rodar a aplicação em seu ambiente local, siga os passos abaixo.

**Pré-requisitos:**
* Node.js (v18+)

### Frontend (Interface Web)

```bash
# 1. Clone o repositório
git clone [https://github.com/DougBrando/musicapi.git](https://github.com/DougBrando/musicapi.git)

# 2. Navegue até a pasta do projeto
cd musicapi

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```
✅ A aplicação estará disponível em `http://localhost:5173` (ou a porta indicada no seu terminal).

## 👨‍💻 Autor

**Douglas Graça**

* GitHub: [@DougBrando](https://github.com/DougBrando)
* LinkedIn: [Douglas Graça](https://www.linkedin.com/in/douglas-graca/)
