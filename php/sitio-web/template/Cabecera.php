<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/sitio-web/css/style_cabecera.css">


    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

    <!--LINK DE BOOTSTRAP CSS-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://kit.fontawesome.com/a3442d3abc.js" crossorigin="anonymous"></script>

</head>

<body>
    <header class="position-fixed z-3 w-100 ">
        <div class="header-information container-fluid row p-0 m-0">
            <div class="col-9 d-flex justify-content-center align-items-center gap-5">
                <span class="text-white"><i class="fa-solid fa-mobile-screen-button px-2" style="color: #ffffff;"></i>945143815</span>
                <span class="text-white"><i class="fa-solid fa-mobile-screen-button px-2" style="color: #ffffff;"></i>945143815</span>
                <span class="text-white"><i class="fa-solid fa-envelope px-2" style="color: #ffffff;"></i>
                    corporacionvallepvc@gmail.com</span>
            </div>
            <div class="col-3 justify-content-center align-items-center gap-5">
                <a href="" class="me-4 text-reset">
                    <i class="fa-brands fa-facebook fs-5" style="color: #ffffff;"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fa-brands fa-whatsapp fs-5" style="color:  #ffffff;"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fa-brands fa-instagram fs-5" style="color:  #ffffff;"></i> </a>
                <a href="" class="me-4 text-reset fs-5">
                    <i class="fa-brands fa-tiktok" style="color: #ffffff;"></i>
                </a>

            </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary " id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/sitio-web/imagenes/logo/logo-cvp.png" alt="" class="img-logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto gap-4 ">
                        <li class="nav-item ">
                            <a class="nav-link fw-bold fs-5 <?php echo ($currentPage == 'index.php') ? 'page-active' : 'text-white'; ?>" href="index.php">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold fs-5 <?php echo ($currentPage == 'nosotros.php') ? 'page-active' : 'text-white'; ?>" href="nosotros.php">Nosotros</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white fw-bold fs-5" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white fw-bold fs-5" href="#">Contactanos</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    </header>