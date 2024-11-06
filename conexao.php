<?php
session_start();
if (isset($_POST['submit'])) {
$usuario1 = $_POST['usuario1'];
$matricula1 = $_POST['matricula1'];
$lac1 = $_POST['lac1'];



$_SESSION['matriculadb'] = $matricula1;

define('HOST', '192.168.11.64');
define('USUARIO', 'root');
define('SENHA', 'asbcop@49');
define('DB', 'db_meioamb');

$conexao = mysqli_connect("192.168.11.64", "root", "asbcop@49", "db_meioamb");

if (!$conexao) {
    die('Erro de conexão: ' . mysqli_connect_error());
}

$result_usuarios = "select *  FROM cadastro WHERE matricula = '$matricula1' ";
$result = mysqli_query($conexao, $result_usuarios);
$result01= mysqli_affected_rows($conexao);

if ($result01  != 0) {
    header("Location:/formulario.html");
    exit;
}
else{

$query = "INSERT INTO cadastro (nome, matricula, lac) VALUES ('$usuario1', '$matricula1', '$lac1')";
$result = mysqli_query($conexao, $query);

if ($result) {
    header("Location:/formulario.html");
    exit;
} else {
    echo "Erro ao inserir dados no banco de dados: " . mysqli_error($conexao);
}
}
mysqli_close($conexao);
}
?>
