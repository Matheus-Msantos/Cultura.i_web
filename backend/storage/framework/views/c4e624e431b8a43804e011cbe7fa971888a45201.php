
<?php $__env->startSection('content'); ?>

<body class="c-section-container">

    <a href="<?php echo e(Route('user.index')); ?>" class="c-section-button--back">Voltar</a>

    <h1 class="c-section-title--form">Cadastrar Usuário</h1>

    <form class="c-section-form" method="POST" action="<?php echo e(Route('user.store')); ?>" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>

            <label class="c-section-label h6 form-label">Nome</label>
            <input class="c-section-input mb-3 form-control" id="nome" name="name" type="text" placeholder="nome" required>

            <label class="c-section-label h6 form-label">email</label>
            <input class="c-section-input mb-3 form-control" id="email" name="email" type="email" placeholder="email" required>

            <label class="c-section-label h6 form-label">senha</label>
            <input class="c-section-input mb-3 form-control" id="password" name="password" type="password" placeholder="senha" required>

            <label class="c-section-label h6 form-label">Imagem</label>
            <input class="c-section-input mb-3 form-control" id="image" name="image" type="file" >

            <label class="c-section-label h6 form-label">Admin</label>
            <input class="c-section-input mb-3 form-control" id="isAdmin" name="isAdmin" type="number" placeholder="0 ou 1" value="0" disabled>

            <div class="c-section-group-buttom">
                <a class="c-section-button--cancel" href="<?php echo e(Route('user.index')); ?>">Cancelar</a>
                <button type="submit" class="c-section-button--salve">Salvar</button>
            </div>

    </form>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/user/create.blade.php ENDPATH**/ ?>