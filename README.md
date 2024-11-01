# Projeto Starbugs Coffee - Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados para o site [Starbugs Coffee](https://starbugs-qa.vercel.app/), desenvolvido com o objetivo de garantir a qualidade das funcionalidades oferecidas para compra de café e processos relacionados. A suíte cobre cenários comuns de pedidos, aplicando diferentes condições, como o uso de cupons de desconto e situações de erros.

<img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/starbugs.png" alt="web" width="600"/>

## 📋 Sobre o Projeto

O site Starbugs Coffee é uma aplicação de demonstração onde usuários podem selecionar diferentes tipos de cafés e efetuar pedidos. Este projeto de automação visa simular e validar as principais funcionalidades do site, garantindo que a experiência do usuário ocorra sem erros e que os fluxos de compra funcionem corretamente. A suíte de testes cobre desde casos de compra simples até cenários com uso de cupons válidos e inválidos, abordando também a manipulação de mensagens de erro.
<img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/order.png" alt="web" width="600"/>
### 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end para automação de interface de usuário 
- **JavaScript**: Linguagem de programação utilizada para a criação dos testes.
- **GitHub Actions**: Ferramenta de CI/CD que automatiza o processo de execução dos testes a cada commit, proporcionando feedback imediato.
- **Tesults**: Plataforma de reporte de resultados de teste, que integra com o Cypress para armazenar e exibir os resultados dos testes automatizados.

<img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/cli_tesult.png" alt="web" width="600"/>

### 🔍 Cenário de Teste

Abaixo estão listados os principais casos de teste implementados para o Starbugs Coffee:

- **🧪 CT-001: Deve comprar um Macchiato com cupom de desconto válido**
  - **Ação**: Escolher o café Macchiato, preencher todos os campos obrigatórios de endereço e selecionar o método de pagamento. Aplicar um cupom válido.
  - **Resultado Esperado**: O pedido é realizado com sucesso e a mensagem "Uhull! Pedido confirmado" é exibida com o desconto aplicado.

- **🧪 CT-002: Deve comprar um Latte sem aplicar cupom**
  - **Ação**: Escolher o café Latte, preencher os campos obrigatórios de endereço e selecionar o método de pagamento. Não aplicar nenhum cupom.
  - **Resultado Esperado**: O pedido é realizado com sucesso e a mensagem "Uhull! Pedido confirmado" é exibida.

- **🧪 CT-003: Selecionar um café indisponível**
  - **Ação**: Escolher o café Expresso Cremoso, que está indisponível.
  - **Resultado Esperado**: Uma mensagem "Produto indisponível" é exibida para o usuário.

- **🧪 CT-004: Realizar a compra sem preencher o endereço**
  - **Ação**: Escolher o café Macchiato e tentar prosseguir com a compra sem preencher os campos de endereço.
  - **Resultado Esperado**: Uma mensagem de erro é exibida pedindo para informar um CEP válido e o número do endereço.

- **🧪 CT-005: Realizar a compra sem selecionar o método de pagamento**
  - **Ação**: Escolher o café Café com Leite, preencher o endereço, mas não selecionar o método de pagamento.
  - **Resultado Esperado**: Uma mensagem de erro "Informe o método de pagamento" é exibida.

- **🧪 CT-006: Realizar a compra de um Capuccino com um cupom expirado**
  - **Ação**: Escolher o café Capuccino, preencher o endereço e selecionar o método de pagamento. Aplicar um cupom expirado.
  - **Resultado Esperado**: Uma mensagem "Cupom expirado!" é exibida.

- **🧪 CT-007: Realizar a compra de um Expresso Gelado com um cupom inválido**
  - **Ação**: Escolher o café Expresso Gelado, preencher o endereço e selecionar o método de pagamento. Aplicar um cupom inválido.
  - **Resultado Esperado**: Uma mensagem "Cupom inválido!" é exibida.

 <img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/cypress.png" alt="web" width="600"/>

### 📊 Integração Contínua com GitHub Actions

Para garantir a integridade dos testes e facilitar a integração contínua, foi configurado o GitHub Actions, permitindo que os testes sejam executados automaticamente a cada push ou pull request neste repositório. Essa prática possibilita o monitoramento constante da qualidade do código e alerta os desenvolvedores em caso de falhas, contribuindo para um ciclo de desenvolvimento mais eficiente.

<img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/gActions.png" alt="web" width="500"/>
<img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/gActions2.png" alt="web" width="500"/>

### 📈 Reporte de Testes com Tesults

Os resultados dos testes são enviados para o **Tesults**, uma plataforma de reporte de testes que exibe o status de cada execução de forma clara e organizada. Com essa integração, os membros da equipe podem visualizar o histórico de execuções e identificar rapidamente falhas, o que facilita a colaboração e o acompanhamento de correções.

<img src="https://github.com/carolprotasio/starbugs-cypress/blob/main/assets/tesult.png" alt="web" width="600"/>

## 🚀 Conclusão

O projeto Starbugs Coffee foi desenvolvido com foco em qualidade e precisão, garantindo que todos os processos de compra estejam funcionando conforme o esperado. A combinação de Cypress para automação de testes, GitHub Actions para integração contínua e Tesults para reporte de resultados cria um ecossistema ágil para manter a confiabilidade do site, proporcionando uma experiência de compra satisfatória aos usuários.


