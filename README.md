#  convite-aniversario-ellen
Convite de aniversário para Ellen
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convite de Aniversário - Ellen</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Aniversário da Ellen</h1>
        <p>Venha comemorar conosco!</p>
        <img    src="./img/vas.png"></img>
    </header>
    <main>
        <section id="details">
            <h2>Detalhes da Festa</h2>
            <p><img src="./img/local.png" alt="Local Icon" class="icon"> Local: Play City Nova América</p>
            <p><img src="./img/calen.png" alt="Data Icon" class="icon"> Data: 17/08/2024</p>
            <p><img src="./img/hor.png" alt="Horário Icon" class="icon"> Horário: 18h às 22h</p>
        </section>
        <section id="rsvp">
            <h2>Confirme sua Presença</h2>
            <form id="rsvp-form">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="guest">Nome do Acompanhante:</label>
                <input type="text" id="guest" name="guest">

                <button type="submit">Confirmar</button>
            </form>
            <div id="guest-list">
                <h3>Lista de Presença</h3>
                <ul id="guest-names">
                    <!-- Nomes dos convidados serão inseridos aqui -->
                </ul>
            </div>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
