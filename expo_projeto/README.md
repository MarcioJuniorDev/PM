# Tecnologias
- **React**: base do projeto, com código frontend e backend.
- **Beekeeper**: interface gráfica do banco de dados. [download](https://etecspgov.sharepoint.com/:u:/r/sites/Section_7793.A.-.T.406.228.20250/Shared%20Documents/General/Beekeeper-Studio-Setup-5.2.9.exe?csf=1&web=1&e=WQ7WeY "download do beekeeper")
- **Insonmia**: banco de dados. [download](https://etecspgov.sharepoint.com/:u:/r/sites/Section_7793.A.-.T.406.228.20250/Shared%20Documents/General/Insomnia.Core-11.1.0.exe?csf=1&web=1&e=fc0yqV "download do insonmia")
- **backend-financas-API:** API. [download](https://etecspgov.sharepoint.com/:u:/r/sites/Section_7793.A.-.T.406.228.20250/Shared%20Documents/General/backend-financas-main.zip?csf=1&web=1&e=bEcVpD "download da API") (incluso no projeto na pasta backend com as alterações necessárias)

# Execução
1. Abra a pasta do projeto no VS Code.
2. Abra o terminal e digite os seguintes comandos:
```
 npx expo install expo@^52.0.0
 npm install -g nodejs@latest
 npm install -g npm
 npm install --global yarn
 yarn add styled-components
 yarn add @react-navigation/native
 yarn add react-native-screens react-native-safe-area-context
 yarn add @react-navigation/native-stack
```
3. Isso instalará as dependências React na sua máquina.
4. Após baixar todas as tecnologias, instale o BeeKeeper.
5. Abra a API com o cmd e digite os comandos para rodar a API:
```
 yarn dev
 npm rum dev
```
6. Abra o BeeKeeper. Em "Connection Type", selecione "SQLite". Logo em seguida, abaixo desse campo estará o "Choose file". Selecione ele, abra a pasta da API e a pasta do prisma e selecione o arquivo "dev" e então conecte no banco de dados.