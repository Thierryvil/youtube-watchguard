# YouTube WatchGuard Server 👀🛡️

Bem-vindo ao repositório do YouTube WatchGuard Server! 📹🔒

# Configuração ⚙️

Antes de começar, certifique-se de seguir as etapas abaixo para configurar o ambiente corretamente:

## 1. Obter uma Chave de API do Google 🗝️

Para acessar a API do YouTube, você precisa de uma Chave de API do Google. Siga os passos abaixo para obtê-la:

1. Acesse a [Console de APIs do Google](https://console.developers.google.com/).
2. Crie um novo projeto ou selecione um projeto existente.
3. Ative a "YouTube Data API v3" para o projeto. [Ativar YouTube Data API v3](https://console.developers.google.com/apis/library/youtube.googleapis.com)
4. Crie uma nova Credencial do tipo "Chave de API". [Criar Credencial](https://console.developers.google.com/apis/credentials)
5. (Opcional, mas recomendado) Restrinja a Chave de API conforme necessário.
6. Copie a Chave de API gerada.

## 2. Variáveis de Ambiente 🌐

Aqui estão as variáveis de ambiente utilizadas neste projeto:

**GOOGLE_API_KEY**: Sua chave de API do Google para acessar a API do YouTube.

**PORT**: A porta em que o servidor será executado (Padrao: 5000).

**MAX_VIDEOS_RESULT**: Quantidade maxima de videos que retornará do youtube (Padrao: 200)

**MAX_KEYWORD_DISPLAY**: Quantidade maxima de palavras que irá contar (Padrao: 5)

**DEBUG**: Verifica se esta no modo DEBUG para usar dados mockados.

### Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
```env
GOOGLE_API_KEY=sua-chave-da-api-do-google
PORT=5000
```
Lembre-se de substituir **sua-chave-da-api-do-google** pela sua chave de API do Google.

## Projeto 🚀

1. Primeiro, clone este repositório para o seu ambiente local:
```sh
git clone https://github.com/Thierryvil/youtube-watchguard
```

2. Instalar dependências
Navegue até o diretório do projeto e instale as dependências necessárias:
```sh
cd youtube-watchguard && cd server/ && npm install
```

3. Depois de configurar o ambiente, você pode iniciar o servidor usando o seguinte comando:
```sh
npm start
```