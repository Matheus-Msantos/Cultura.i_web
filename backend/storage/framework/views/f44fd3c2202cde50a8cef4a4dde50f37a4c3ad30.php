<?php $__env->startSection('content'); ?>

<body class="c-section-container">

    <a href="<?php echo e(Route('user.index')); ?>" class="c-section-button--back">Voltar</a>

    <h1 class="c-section-title--form">Editar Usuário</h1>

    <form class="c-section-form" method="POST" action="<?php echo e(Route('user.update', $user->id)); ?>" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>

        <label class="c-section-label form-label">Admin</label>
        <input class="c-section-input form-control" id="isAdmin" name="isAdmin" type="number" placeholder="0 ou 1" value="<?php echo e($user->isAdmin); ?>">

        <div class="c-section-group-buttom">
            <a class="c-section-button--cancel" href="<?php echo e(Route('user.index')); ?>">Cancelar</a>
            <button type="submit" class="c-section-button--salve">Atualizar</button>
        </div>

        <label class="c-section-label h6 form-label">Imagem</label>
        <input class="c-section-input mb-3 form-control" id="image" name="image" type="file">

    </form>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/user/edit.blade.php ENDPATH**/ ?>