# Interface Lojas Americanas

## Instruções para Instalação e Execução

1. **Pré-requisitos**:
   - Certifique-se de ter o Node.js instalado na versão mais recente.
   - Instale o gerenciador de pacotes `npm`.
   - Instale o Expo CLI globalmente:
     ```bash
     npm install -g expo-cli
     ```

2. **Instalação**:
   - Clone este repositório:
     ```bash
     git clone https://github.com/seu-usuario/interface-lojas-americanas.git
     ```
   - Navegue até o diretório do projeto:
     ```bash
     cd interface-lojas-americanas
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```

3. **Execução**:
   - Inicie o servidor de desenvolvimento:
     ```bash
     npx expo start
     ```
   - Escaneie o QR Code no terminal com o aplicativo Expo Go (disponível para Android e iOS) ou execute no emulador.

---

## Decisões Técnicas Tomadas

1. **Navegação**:
   - Utilizamos o **Expo Router** para gerenciar a navegação entre telas, garantindo uma estrutura modular e escalável.

2. **Estilo**:
   - Seguiu-se o padrão visual das Lojas Americanas, utilizando as cores predominantes da marca: vermelho (`#e30613`), branco (`#fff`) e preto/cinza (`#444`).

3. **Componentização**:
   - Dividimos a interface em componentes reutilizáveis, como `Header`, `FiltroRelevancia` e `CustomDrawerContent`, para facilitar a manutenção e escalabilidade.

---

## Dificuldades Encontradas e Como Foram Resolvidas

1. **Alinhamento de Elementos**:
   - Problema: O cabeçalho do `Drawer` não estava alinhado corretamente com as bordas.
   - Solução: Ajustamos o estilo do cabeçalho para ocupar toda a largura do `Drawer` utilizando `width: "100%"` e removemos margens desnecessárias.

2. **Posicionamento dos Botões**:
   - Problema: Os botões "Entrar" e "Criar conta" não estavam centralizados.
   - Solução: Utilizamos `flexDirection: "row"` e `justifyContent: "center"` para posicionar os botões lado a lado no centro.

3. **Consistência Visual**:
   - Problema: Garantir que o design seguisse o padrão visual das Lojas Americanas.
   - Solução: Utilizamos as cores da marca e ajustamos os componentes para harmonizar com o layout.

---

## Sugestões de Melhorias Futuras

1. **Responsividade**:
   - Implementar ajustes para garantir que a interface funcione perfeitamente em diferentes tamanhos de tela.

2. **Acessibilidade**:
   - Adicionar suporte para leitores de tela e melhorar o contraste de cores para atender às diretrizes de acessibilidade.

3. **Performance**:
   - Otimizar o carregamento de imagens e componentes para melhorar a performance em dispositivos de baixa capacidade.

4. **Novos Recursos**:
   - Adicionar funcionalidades como filtros avançados, integração com APIs de produtos e suporte para múltiplos idiomas.

5. **Testes Automatizados**:
   - Implementar testes unitários e de integração para garantir a estabilidade do código.
