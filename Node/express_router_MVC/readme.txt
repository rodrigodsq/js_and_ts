//---------CONTEUDO----------//
-router e controller;
-views;
-arquivos estaticos(pasta './public');
-webpack;
-Middlewares;
-Banco de dados MongoDB;
-Express Session e Flash Messages;
-Helmet e CSRF para segurança;

-Injeção de conteudo nas views: {
        <%= titulo %>                                   <!-- exibir algum conteudo passado -->

        <%- titulo %>                                   <!- a tag <%- significa que aceita html, parecido com innerHtml -->

        <% if(typeof titulo !== 'undefined'){ %>        <!--fazendo if-->
            <%= titulo %>
        <% } else { %>
            O titulo não foi enviado
        <% } %> 

        <% numeros.forEach(num => { %>                  <!-- fazendo for -->
            <%= num %> <br>
        <% }); %>

        <%- include('includes/head'); %>                <!-- inclui arquivo, uma parte de uma pagina como cabeçalho e rodapé -->
}