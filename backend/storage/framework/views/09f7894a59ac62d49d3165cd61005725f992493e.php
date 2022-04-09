
<?php $__env->startSection('content'); ?>
<body class="c-section-container">

    <a href="<?php echo e(Route('category.index')); ?>" class="c-section-button--back">Voltar</a>

    <h1 class="c-section-title--form">Cadastrar Categoria</h1>

    <form class="c-section-form" method="POST" action="<?php echo e(Route('category.store')); ?>">
        <?php echo csrf_field(); ?>

        <label class="c-section-label h6 form-label">Nome</label>
        <input class="c-section-input mb-3 form-control" id="nome" name="name" type="text" placeholder="nome" />

        <div class="c-section-group-buttom">
            <a class="c-section-button--cancel" href="<?php echo e(Route('category.index')); ?>">Cancelar</a>
            <button type="submit" class="c-section-button--salve">Cadastrar</button>
        </div>
    </form>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/category/create.blade.php ENDPATH**/ ?>