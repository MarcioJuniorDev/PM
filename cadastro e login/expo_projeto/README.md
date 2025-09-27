# Tecnologias
- **React**: base do projeto, com código frontend e backend.
- **Beekeeper**: interface gráfica do banco de dados. [download](https://www.beekeeperstudio.io/download/?ext=exe&arch=&type=installer&edition=community "download do beekeeper")
- **Insonmia**: banco de dados. [download](https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website "download do insonmia")

# Execução
1. Abra a pasta do projeto no VS Code.
2. Abra o terminal e digite os seguintes comandos:
```
 npm install --global yarn
 yarn add styled-components
 yarn add @react-navigation/native
 yarn add @react-navigation/native-stack
 yarn add @react-native-async-storage/async-storage
 yarn add axios
 yarn add @react-native-async-storage/async-storage
 yarn add nodejs
 yarn add react-native-gesture-handler
 yarn add @react-navigation/drawer
 yarn add expo@^52.0.0
 npx expo install react-native-reanimated
```
3. Isso instalará as dependências React na sua máquina.
4. Após baixar todas as tecnologias, instale o BeeKeeper.
5. Abra a API com o cmd e digite os comandos para rodar a API:
```
 npm rum dev
```
6. Abra o BeeKeeper. Em "Connection Type", selecione "SQLite". Logo em seguida, abaixo desse campo estará o "Choose file". Selecione ele, abra a pasta da API e a pasta do prisma e selecione o arquivo "dev" e então conecte no banco de dados.