<?php
session_start();

$conexao = mysqli_connect("192.168.11.64", "root", "asbcop@49", "db_meioamb");
if (!$conexao) {
    die('Erro de conexão: '.mysqli_connect_error());
}


// Receba o valor enviado via POST
$nota = $_POST['nota3'];
$matricula1 = $_SESSION['matriculadb'];

// Faça algo com o valor recebido
// ...

$result_usuarios = "select *  FROM cadastro WHERE matricula = '$matricula1' AND nota != '0' ";
$result = mysqli_query($conexao, $result_usuarios);
$result01= mysqli_affected_rows($conexao);

if($result01 != 0 ){


}
else{
    $result_usuario = "UPDATE cadastro SET nota='$nota' WHERE matricula='$matricula1'";
    $result = mysqli_query($conexao, $result_usuario);
    // Envie uma resposta (opcional)
    echo 'Recebido com sucesso!';
    exit;   
}





mysqli_close($conexao);

?>