# 👀 YouTube WatchGuard

O YouTube WatchGuard é uma aplicação web desenvolvida em Next.js 13 e TypeScript que permite aos usuários controlar o tempo que passam assistindo a vídeos no YouTube. Com esta ferramenta, você pode definir limites diários para o tempo de visualização em diferentes dias da semana, ajudando a manter um equilíbrio saudável entre o entretenimento online e outras atividades importantes.

## Recursos Principais 🚀

- **Controle de Tempo**: Defina limites de tempo específicos para cada dia da semana, controlando quanto tempo você pode gastar assistindo a vídeos no YouTube.
- **Interface Amigável**: Uma interface intuitiva e fácil de usar que permite aos usuários configurar suas preferências de forma rápida e simples.

## Pré-requisitos 🛠️

Antes de começar, certifique-se de que você tenha o seguinte instalado em seu sistema:

- Node.js v18.17.1
- npm 9.8.1
- TypeScript 4.5.2

## Tecnologias Utilizadas 🛠️

O YouTube WatchGuard foi desenvolvido utilizando as seguintes tecnologias:

- [Next.js 13](https://nextjs.org/) - Um framework React com foco em renderização do lado do servidor.
- [Tailwind CSS](https://tailwindcss.com/) - Uma estrutura CSS utilitária altamente personalizável para desenvolvimento rápido.
- [Material Icons](https://material.io/resources/icons/) - Ícones de design fornecidos pelo Google.
- [ESLint](https://eslint.org/) - Uma ferramenta de análise de código estático para identificar e corrigir problemas no código JavaScript/TypeScript.

## Instalação e Uso 🚀

1. Clone este repositório para o seu computador:
```bash
git clone https://github.com/Thierryvil/youtube-watchguard
```

2. Navegue até o diretório do projeto:
```bash
cd youtube-watchguard
```

3. Faça o build da aplicação:
```bash
docker build -t youtube-watchguard . 
```

4. Inicie a aplicação:
```bash
docker run -p 3000:3000 -it youtube-watchguard
```

Acesse a aplicação em seu navegador em http://localhost:3000.

Comece a definir seus limites diários e aproveite um tempo mais saudável no YouTube! 🎉


Esperamos que o YouTube WatchGuard ajude você a gerenciar seu tempo no YouTube de forma mais eficaz e equilibrada. Se você tiver alguma dúvida, sugestão ou relatório de bug, não hesite em abrir uma issue neste repositório. Aproveite a aplicação e continue sendo produtivo! 🌟