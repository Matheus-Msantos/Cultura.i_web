<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo e(asset('css/menu.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/base.css')); ?>">

    <!-- JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/8455a3d02b.js" crossorigin="anonymous"></script>
    <script src="<?php echo e(asset('js/menu.js')); ?>"></script>
    <script src="https://kit.fontawesome.com/4d52201842.js" crossorigin="anonymous"></script>

    <title>Portal ADM</title>


    <script>
    function remover() {
      return confirm('Você realmente deseja excluir esse produto?');
    }
    </script>
</head>
    <?php echo $__env->yieldContent('content'); ?>
    <div id="wrapper">
        <div class="overlay"></div>

        <!-- Sidebar -->
        <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <div class="m-4">
                    <img class="img-thumbnail" src="<?php echo e(asset('image/gnose.png')); ?>" alt="Brand">
                </div>

                <div class="c-nav-user">
                <span>Olá <?php echo e(Auth()->user()->name); ?></span>
                </div>


                <div class="c-nav-links">
                    <li class="mb-1 p-1">
                        <a class="button pr-5 pl-5 font-weight-bold" href="<?php echo e(Route('product.index')); ?>" style="border-radius: 30px">EVENTOS</a>
                    </li>
                    <li class="mb-1 p-1">
                        <a class="button pr-5 pl-5 font-weight-bold" href="<?php echo e(Route('category.index')); ?>" style="border-radius: 30px">CATEGORIAS</a>
                    </li>
                    <li class="mb-1 p-1">
                        <a class="button pr-5 pl-5 font-weight-bold" href="<?php echo e(Route('address.index')); ?>" style="border-radius: 30px">ENDEREÇOS</a>
                    </li>
                    <li class="mb-1 p-1">
                        <a class="button pr-5 pl-5 font-weight-bold" href="<?php echo e(Route('user.index')); ?>" style="border-radius: 30px">USUÁRIOS</a>
                    </li>
                    <li class="mb-1 p-1">
                        <a class="button pr-5 pl-5 font-weight-bold" href="<?php echo e(Route('order.index')); ?>" style="border-radius: 30px">PEDIDOS</a>
                    </li>
                </div>
            </ul>
            <div class="c-nav-logout">

                <form method="POST" action="<?php echo e(Route('logout')); ?>">
                <?php echo csrf_field(); ?>
                    <a class="pr-5 pl-5 btn-sair font-weight-bold" href="<?php echo e(Route('logout')); ?>" style="border-radius: 30px" onclick="event.preventDefault(); this.closest('form').submit();">SAIR</a>
                </form>

            </div>
        </nav>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <button type="button" class="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                <span class="hamb-top"></span>
                <span class="hamb-middle"></span>
                <span class="hamb-bottom"></span>
            </button>
    </div>

</html>
<?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/layouts/head.blade.php ENDPATH**/ ?>