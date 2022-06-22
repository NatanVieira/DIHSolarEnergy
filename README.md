# DIHSolarEnergy

Projeto II - Dev In House NDD - Angular

Bem-vindo ao repositório do meu segundo projeto da Dev In House! 😃

O objetivo é criar uma plataforma que simule o gerenciamento de unidades de geração de energia solar.

* A plataforma tem uma página de login que permite o usuário entrar ou registrar seu usuário
* Depois de passar pelo login, o usuário é levado para a página de dashboard que mostra estatísticas sobre as suas unidades geradoras, como quantidade,
  unidades ativas, inativas, média de geração e um gráfico com as gerações dos últimos 12 meses
* Em todas as páginas o usuário terá acesso a um menu que pode levar ele a outras páginas ou novamente ao dashboard inicial
* Além da página de dashboard existe a página que lista suas unidades, nessa página o usuário pode cadastrar uma nova unidade, alterar uma unidade existente ou eliminar qualquer unidade
* Outra ferramenta que a plataforma oferece é uma página para cadastro de geração mensal, nela são listadas as unidades ativas e campos para definir a data e a geração total.
* Tanto a média de geração quanto os dados do gráfico são baseadas nas unidades ativas.

Para rodar o projeto você pode baixar o código ou clonar o repositório.

Após ter o diretório em sua máquina você precisará instalar as depedências, para isso acesse o terminal e vá até a dentro da pasta do diretório e execute o comando
npm install ou yarn install.

Após instalar as depedências é necessáiro que você já tenha instalado ou instale as ferramentas angular, angular cli e json-server.

Para instalar o angular cli utilize o comando npm: npm install -g @angular/cli.

Para instalar o json-server utilize o comando npm: npm install json-server.

Depois de ter essas ferramentas instaladas, basta acessar um terminal e ir até a pasta do projeto e executar o comando json-server --watch db.json, assim a plataforma terá acesso ao fakedatabase.

Volte ao terminal e execute o comando "ng serve -o" e o angular cli abrirá o projeto
no endereço http://localhost:4200.

Abaixo as orientações geradas automáticamente pelo angular cli.

########################################################################################################

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
