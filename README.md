# Movies

Aplicativo que lista filmes usando o React Native

## Pré-requisitos

* Git
* Nodejs
* Yarn
* Aplicativo "Expo App" da [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [App Store](https://itunes.apple.com/us/app/expo-client/id982107779)

## Como instalar e executar

1. Instalar o pacote do nodejs ``create-react-native-app`` executando  seguinte comando no Git Bash:

  * ``npm install -g create-react-native-app``

2. Atualizar o npm e instalar o pacote ``yarn`` com o seguinte comando:

  * ``npm install -g npm@latest``
  * ``npm install -g yarn``

3. Instalar as dependências do projeto por meio de três comandos no Git Bash:
  * ``cd movies``
  * ``npm install``
  * ``yarn install``

4. Executar o projeto por meio do comando no Git Bash:
  * ``cd movies``
  * ``npm run start``

5. Conectar o celular via USB e apertar a letra ``a`` se for Android ou ``i`` se for iOS no Git Bash.


## Funcionalidades

* Adicionar filme usando uma API em uma base de dados externa.
* Listar todos os filmes adicionados pelos usuários.
* Marcar como favorito os filmes e enviar via API para uma base de dados externa.

## Componentes

### AppHeader

Componente que cria um cabeçalho para aplicação com um ícone e um título. O componente possui dois atributos.

|Atributo|Descrição|
|---|---|
|title|Título da aplicação que deve aparecer no cabeçalho|
|icon|Endereço do ícone da aplicação deve aparecer no cabeçalho, a imagem deve ter 32x32px|

#### Exemplo de uso

```
<AppHeader title="Filmes" icon=https://image.flaticon.com/icons/png/512/168/168557.png" />
```


### MovieList

Componente que carrega uma coleção de filmes usando requisição HTTP e uma API própria, não possui nenhum atributo bastando apenas usar. O ``MovieList`` utiliza o ``MovieItem`` para construir a lista de filmes no Aplicativo.

#### Exemplo de uso

``<MovieList />``

### MovieItem

Componente que mostra as informações de um filme usando um componente visual do tipo Card. A personalização dessas opções é feita pelos atributos do componente. O ``MovieItem`` faz parte do componente ``<MovieList />``, é recomendado o seu uso em conjunto.

|Atributo|Descrição|
|---|---|
|id|Código único de identificação do filme na base de dados|
|key|Código único de identificação do filme na base de dados|
|title|Título do filme|
|cover|Link da imagem para ser a capa do card|
|grade|Nota do IMDB|
|year|Ano de lançamento do filme|
|isFavorite|Se o filme está marcado como favorito|

#### Exemplo de uso

```
<MovieItem
  title='Senhor dos anéis: A sociedade do Anel'
  key=1
  id=1
  cover='https://assets.b9.com.br/wp-content/uploads/2017/11/O-Senhor-dos-Aneis.jpg'
  grade=9.7
  year=2002
  isFavorite=true />
```
