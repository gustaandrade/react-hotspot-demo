# react-hotspot-demo
Uma demonstração de um sistema de criação e manutenção de hotspots em uma aplicação web, feita em Javascript, React e Redux.

## Organização

O código está organizado de tal maneira que o portal está dividido entre os componentes de:
- **Header**, que contém os links importantes para a inserção dos Hotspots;
- **ButtonArea**, área que contém o botão principal que habilita o comportamento de ligar e desligar a marcação das hotspots;
- **Hotspots**, área que contém uma tabela relativa aos hotspots que foram marcados, além da possiblidade de remoção dos mesmos.

## Redux

O código responsável pelo estado do projeto foi feito usando a biblioteca do Redux/React Redux, na qual os scripts foram organizados dentro da pasta **store**, a seguinte forma:
- **Actions**, que contém o mapeamento das principais ações que o produto é capaz de executar;
- **Reducers**, que contém a lógica e o tratamento centralizado do store do aplicativo, assim como as manipulações de estado.

## Global

O global da aplicação foi basicamente unir os componentes principais na aplicação, além de usar as suas respectivas estilizações para que o projeto ficasse o mais parecido possível ao modelo apresentado. 

## Packages

O único pacote utilizado foi o Redux/React Redux.

## Assets

O único asset usado no projeto foi o logo da Conpass, para que o visual fique semelhante ao modelo apresentado.

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
