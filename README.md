# TraktoTv :tv:

Implementação do [Desafio Front-end Developer da Trakto](https://github.com/trakto/desafio_frontend). Tal projeto foi desenvolvido tendo como base as descrições do desafio e seguiu fielmente o [modelo proposto no Figma](https://www.figma.com/file/Ajzapgkl4vrXw8KnHlIwPh/PrototipoTraktoTV).

A arquitetura de diretórios adotada nesta implementação segue a seguinte estrutura:

    .
    ├── src                    
    │   ├── app
    │   │   ├── components
    │   │   ├── guards
    │   │   ├── interceptors
    │   │   ├── interfaces
    │   │   ├── pages
    │   │   ├── services
    │   │   ├── app-routing.module.ts
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   └── app.module.ts
    |   ├── assets
    │   ├── environments
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css             
    └── ...
 
  ## Configurações :gear:
  
  O projeto foi desenvolvido utilizando as seguintes especificações:
  
  - **Angular CLI**: 15.2.4
  - **Node**: 18.15.0
  - **Package Manager**: npm 9.5.0
  
   Caso a sua máquina não satisfaça tais pré-requisitos, faça a instalação da atual versão LTS do Node juntamente com o seu gerenciador de pacotes clicando [aqui](https://nodejs.org/en/download). Para a instalação do Angular CLI, clique [aqui](https://angular.io/cli).
   
  ## Como executar? :thinking:
  
  Uma vez tendo todos os pré-requisitos satisfeitos, siga os passos listados abaixo:
  
  ### 1º passo

  Para ter acesso ao código da aplicação, faça o clone deste repositório na sua máquina executando o seguinte comando dentro de uma pasta de sua preferêcia:

     git clone https://github.com/basilioarth/Trakto-Tv.git

  Caso você não tenha o git instalado, clica [aqui](https://git-scm.com/downloads) :wink:.
  
  Se preferir, você também pode ter acesso ao código ao baixá-lo através da opção "Download ZIP" disponibilizada aqui pela interface do GitHub. Para mais detalhes sobre esse processo, clique [aqui](https://docs.github.com/pt/repositories/working-with-files/using-files/downloading-source-code-archives).
  
  ### 2º passo
  
  Para instalar todas as dependências do projeto, execute o seguinte comando dentro do diretório raiz da aplicação:
  
      npm install
  
  ### 3º passo
  
  Por fim, para executar o projeto, execute o seguinte comando: 
  
      ng serve -o
      
  Prontinho. O projeto será aberto em uma nova aba em seu navegador padrão :smiley:. 
  
  ### Observações
  Vale reforçar que, assim como informado na descrição do desafio, para se autenticar nesta aplicação você precisa usar as credenciais da sua conta da Trakto. Caso   você ainda não tenha, crie uma conta gratuita na plataforma clicando [aqui](https://dashboard.trakto.io/). Vale informar também que, para que você visualize seus materiais didáticos através da listagem existente nesta aplicação, é preciso primeiro criá-los a partir de qualquer template disponível na plataforma.
  
  ## Diferenciais :sparkles:
  
  Esta seção tem o objetivo de compartilhar os diferenciais presentes nesta implementação, mencionando tudo aquilo que foi feito para além do exigido nas especificações do desafio. Segue abaixo a lista de diferenciais:
  
  - Implementação do módulo opcional "Desenho". :white_check_mark:
  - Responsividade em todas as telas construídas. :white_check_mark:
  - Uso de `guard` para a proteção de todas as rotas da aplicação. :white_check_mark:
  - Cuidado com a performance da aplicação ao evitar a dependência de módulos CommonJS. :white_check_mark:
  
