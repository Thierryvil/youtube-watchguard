# YouTube WatchGuard Server 👀🛡️

Bem-vindo ao repositório do YouTube WatchGuard Server! 📹🔒

## Rota: `/search`

A rota `/search` é usada para realizar pesquisas no sistema. Ela aceita consultas e retorna os resultados correspondentes. Abaixo estão os detalhes sobre como usar essa rota.


### POST /search

```sh
curl -X POST http://localhost:5000  -H "Content-Type: application/json" -d '{"query": "teste", "secondsPerWeekDays": [120, 0, 0, 0, 0, 0, 0]}'
```

### Corpo da Requisição
**query** string

***secondsPerWeekDays** number[]

`Exemplo`:
```json
{
  "query": "javascript",
  "secondsPerWeekDays": [900, 7200, 1800, 9000, 1200, 2400, 5400]
}
```


### Resposta

A resposta desta rota será um JSON contendo os resultados da pesquisa com base na consulta fornecida.

Exemplo de resposta:

```json
{
  "mostUsedWordsInDescriptions": ["Teste", "Dois"],
  "mostUsedWordsInTitles": ["Teste", "Dois"],
  "totalInSecondsToWatchAllVideos": 12121,
  "videos": [
    [],
    [
     {
        "id": "141412121",
        "title": "title",
        "description": "description",
        "duration": 60,
        "thumbnail": "thumbnail",
        "publishedAt": "2021-01-01T00:00:00Z",
      } 
    ]
  ]
}
```

## Pré-requisitos 🛠️

Antes de começar, certifique-se de que você tenha o seguinte instalado em seu sistema:

- Node.js v18.17.1
- npm 9.8.1
- TypeScript 4.5.2

## Tecnologias Utilizadas 🛠️

O YouTube WatchGuard Server foi desenvolvido utilizando as seguintes tecnologias:

1. **ESLint** para linting e formatação de código
2. **Jest** para testes
4. **@SWC/Core** e **@SWC/Jest** para compilação e teste
4. **MSW** para simulação de API
5. **SuperTest** para testes de API HTTP
6. **Express** para servidor HTTP
7. **GoogleaApis** para requisições na API do Youtube
8. **Morgan** para logs de requisições

## Configuração ⚙️

Antes de começar, certifique-se de seguir as etapas abaixo para configurar o ambiente corretamente:

### 1. Obter uma Chave de API do Google 🗝️

Para acessar a API do YouTube, você precisa de uma Chave de API do Google. Siga os passos abaixo para obtê-la:

1. Acesse a [Console de APIs do Google](https://console.developers.google.com/).
2. Crie um novo projeto ou selecione um projeto existente.
3. Ative a "YouTube Data API v3" para o projeto. [Ativar YouTube Data API v3](https://console.developers.google.com/apis/library/youtube.googleapis.com)
4. Crie uma nova Credencial do tipo "Chave de API". [Criar Credencial](https://console.developers.google.com/apis/credentials)
5. (Opcional, mas recomendado) Restrinja a Chave de API conforme necessário.
6. Copie a Chave de API gerada.

### 2. Variáveis de Ambiente 🌐

Aqui estão as variáveis de ambiente utilizadas neste projeto:

**GOOGLE_API_KEY**: Sua chave de API do Google para acessar a API do YouTube.

**PORT**: A porta em que o servidor será executado (Padrao: 5000).

**MAX_VIDEOS_RESULT**: Quantidade maxima de videos que retornará do youtube (Padrao: 200)

**MAX_KEYWORD_DISPLAY**: Quantidade maxima de palavras que irá contar (Padrao: 5)

**DEBUG**: Verifica se a variavel de ambiente NODE_ENV esta como **production**.

### Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
```env
GOOGLE_API_KEY=sua-chave-da-api-do-google
PORT=5000
MAX_VIDEO_RESULTS=200
MAX_KEYWORD_DISPLAY = 5
```
Lembre-se de substituir **sua-chave-da-api-do-google** pela sua chave de API do Google.

## Projeto 🚀

1. Primeiro, clone este repositório para o seu ambiente local:
```sh
git clone https://github.com/Thierryvil/youtube-watchguard
```
2. Navegue até o diretório do projeto:
```sh
cd youtube-watchguard && cd server/ 
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
1. Realizar o build:
```sh
docker build -t youtube-watchguard-server .  
```

2. Iniciar o servidor:
```sh
docker run -it -p 5000:5000 youtube-watchguard-server
```