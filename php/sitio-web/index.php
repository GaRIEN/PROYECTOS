<?php
// Array de clientes con rutas completas
$clientes = [
    "/sitio-web/imagenes/logo/logo-cvp.png",
    "/sitio-web/imagenes/inicio/ventanapvc-png.png",
    "/sitio-web/imagenes/logo/logo-cvp.png",
    "/sitio-web/imagenes/inicio/ventanapvc-png.png",
    "/sitio-web/imagenes/logo/logo-cvp.png",
    "/sitio-web/imagenes/inicio/ventanapvc-png.png"
];
?>

<?php include("template/Cabecera.php"); ?>

<section>
    <div id="carouselExample" class="carousel ">
        <div class="carousel-inner slide vh-100">
            <div class="carousel-item active">
                <img src="./imagenes/inicio/paraslider.webp" class="d-block w-100 object-fit-cover vh-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100 " alt="...">
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
</section>
<section>
    <div>
        <h2>CORPORACION DEL VALLE PVC</h2>
        <div>
            <h3>"El confort de un hogar libre de ruido"</h3>
            <p>Nuestro sistema termoacústico te ofrece una protección excepcional contra el frío, el calor y el ruido, creando un ambiente cómodo y tranquilo en cualquier espacio. Gracias a la tecnología de aislamiento avanzada, nuestras soluciones no solo mejoran el confort térmico, sino que también contribuyen a la eficiencia energética de tu hogar o negocio, reduciendo costos de climatización. Diseñadas para adaptarse a tus necesidades, nuestras puertas, ventanas y mamparas combinan funcionalidad, durabilidad y diseño estético.</p>
        </div>
        <div>
            <div>
                <div>
                    <img src="/sitio-web/imagenes/inicio/ventanapvc-png.png" alt="">
                </div>
                <div>
                    <h4>VENTANAS DE PVC</h4>
                    <p>Perfectas para cualquier clima, estas ventanas resisten la humedad y el paso del tiempo sin perder su calidad ni estética.</p>
                    <button>VER VENTANAS</button>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div>
        <h2>BENEFICIOS DEL PVC</h2>
        <div>
            <div class="container mt-4">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card text-center shadow-lg border-0">
                            <div class="card-body">
                                <img src="imagenes/seguridad.png" class="img-fluid mb-3" alt="Seguridad">
                                <h4 class="card-title text-primary">Seguridad</h4>
                                <p class="card-text">
                                    Desarrollamos sistemas de ventanas y puertas de PVC de alta tecnología, diseñados para brindar
                                    máxima seguridad, resistencia y estilo a tu hogar o negocio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<section>
    <div>
        <h2>NUESTROS PROVEEDORES</h2>
        <div class="container mt-5">
            <div id="clientesCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <?php
                    $totalClientes = count($clientes);
                    $clientesPorSlide = 4; // Cantidad de clientes por slide
                    $totalSlides = ceil($totalClientes / $clientesPorSlide);

                    for ($i = 0; $i < $totalSlides; $i++) {
                        $active = ($i === 0) ? 'active' : ''; // Activa el primer slide
                        echo '<div class="carousel-item ' . $active . '">';
                        echo '<div class="row text-center justify-content-center">';

                        for ($j = 0; $j < $clientesPorSlide; $j++) {
                            $index = ($i * $clientesPorSlide) + $j;
                            if ($index < $totalClientes) {
                                echo '<div class="col-6 col-md-4 col-lg-3">';
                                echo '<img src="' . $clientes[$index] . '" class="img-fluid p-2" alt="Cliente ' . $index . '">';
                                echo '</div>';
                            }
                        }

                        echo '</div>';
                        echo '</div>';
                    }
                    ?>
                </div>

                <!-- Controles del Carrusel -->
                <button class="carousel-control-prev" type="button" data-bs-target="#clientesCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#clientesCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    </div>
    <div>
        <h2>NUESTROS CLIENTES</h2>
        <div class="container mt-5">

            <div id="clientesCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <?php
                    $totalClientes = count($clientes);
                    $clientesPorSlide = 4; // Cantidad de clientes por slide
                    $totalSlides = ceil($totalClientes / $clientesPorSlide);

                    for ($i = 0; $i < $totalSlides; $i++) {
                        $active = ($i === 0) ? 'active' : ''; // Activa el primer slide
                        echo '<div class="carousel-item ' . $active . '">';
                        echo '<div class="row text-center justify-content-center">';

                        for ($j = 0; $j < $clientesPorSlide; $j++) {
                            $index = ($i * $clientesPorSlide) + $j;
                            if ($index < $totalClientes) {
                                echo '<div class="col-6 col-md-4 col-lg-3">';
                                echo '<img src="' . $clientes[$index] . '" class="img-fluid p-2" alt="Cliente ' . $index . '">';
                                echo '</div>';
                            }
                        }

                        echo '</div>';
                        echo '</div>';
                    }
                    ?>
                </div>

                <!-- Controles del Carrusel -->
                <button class="carousel-control-prev" type="button" data-bs-target="#clientesCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#clientesCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    </div>
</section>

</div>


<?php include("template/Pie.php"); ?>