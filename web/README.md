# 👀 YouTube WatchGuard Web

O YouTube WatchGuard é uma aplicação web desenvolvida em Next.js 13 e TypeScript que permite aos usuários controlar o tempo que passam assistindo a vídeos no YouTube. Com esta ferramenta, você pode definir limites diários para o tempo de visualização em diferentes dias da semana, ajudando a manter um equilíbrio saudável entre o entretenimento online e outras atividades importantes.

Comece a definir seus limites diários e aproveite um tempo mais saudável no YouTube! 🎉

## Recursos Principais 🚀

- **Controle de Tempo**: Defina limites de tempo específicos para cada dia da semana, controlando quanto tempo você pode gastar assistindo a vídeos no YouTube.
- **Interface Amigável**: Uma interface intuitiva e fácil de usar que permite aos usuários configurar suas preferências de forma rápida e simples.

## Pré-requisitos 🛠️

### 2. Variáveis de Ambiente 🌐

Aqui estão as variáveis de ambiente utilizadas neste projeto:

**API_URL**: Endereço do Backend.

Antes de começar, certifique-se de que você tenha o seguinte instalado em seu sistema:

- Node.js v18.17.1
- npm 9.8.1
- TypeScript 4.5.2

## Tecnologias Utilizadas 🛠️

O YouTube WatchGuard Web foi desenvolvido utilizando as seguintes tecnologias:

1. **Next.js 13** Framework React com foco em renderização do lado do servidor.
2. **Tailwind CSS** Uma estrutura CSS utilitária altamente personalizável para desenvolvimento rápido.
3. **Material Icons** - para icones de design fornecidos pelo Google.
4. **Yup** para validação de esquemas.
5. **Jest** para testes

## Projeto 🚀

1. Clone este repositório para o seu computador:
```sh
git clone https://github.com/Thierryvil/youtube-watchguard
```

2. Navegue até o diretório do projeto:
```sh
cd youtube-watchguard && cd web 
```

### Localmente 
1. Instalar dependências
```sh
npm install
```

2. Depois de configurar o ambiente, você pode iniciar o servidor usando o seguinte comando:
```sh
npm start
```

### Docker

3. Faça o build da aplicação:
```sh
docker build -t youtube-watchguard-web . 
```

4. Inicie a aplicação:
```sh
docker run -it -p 3000:3000 youtube-watchguard-web
```

Acesse a aplicação em seu navegador em http://localhost:3000.