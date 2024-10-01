<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asitencia Personal</title>
    <!-- IMPORTAR CDN BOOSTRAP-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="./css/styles.css">


</head>

<body>
    <div class="container-fluid bg-warning d-flex flex-column align-items-center ">
        <h1 class="fw-bold fs-1 mt-5">REGISTRA TU ASISTENCIA</h1>
        <div class=" contenedor-forms container-md p-4 bg-light rounded shadow mb-5 ">
            <form action="" id="formAsistencia">
                <div class="d-flex flex-column mb-3 align-items-center">
                    <label for="txtusuario" class="form-label fw-bold fs-2">Ingrese su Usuario</label>
                    <input type="text" id="txtusuario" class="form-control" placeholder="Usuario" name="usuario">
                </div>
                <div class="d-flex justify-content-between mt-4 gap-2">
                    <button id="btnentrada" class="btn btn-success" type="submit" name="btnentrada" value="ok">ENTRADA</button>
                    <button id="btnsalida" class="btn btn-danger" type="submit" name="btnsalida" value="ok">SALIDA</button>
                </div>
            </form>
        </div>

    </div>

    <!-- IMPORTAR CDN BOOSTRAP JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>