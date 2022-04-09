
<?php $__env->startSection('content'); ?>
<body class="c-section-container">

    <a href="<?php echo e(Route('address.index')); ?>" class="c-section-button--back">Voltar</a>

    <h1 class="c-section-title--form">Cadastrar Endereço</h1>

    <form class="c-section-form" method="POST" action="<?php echo e(Route('address.store')); ?>">
        <?php echo csrf_field(); ?>

        <label class="c-section-label form-label">Rua / Av</label>
        <input class="c-section-input form-control" id="street" name="street" type="text" placeholder="Rua / Av" />

        <label class="c-section-label form-label">Número</label>
        <input class="c-section-input form-control" id="number" name="number" type="number" placeholder="Número" />

        <label class="c-section-label form-label">Bairro</label>
        <input class="c-section-input form-control" id="district" name="district" type="text" placeholder="Bairro" />

        <label class="c-section-label form-label">Cidade</label>
        <input class="c-section-input form-control" id="city" name="city" type="text" placeholder="Cidade" />

        <label class="c-section-label form-label">Estado</label>
        <input class="c-section-input form-control" id="state" name="state" type="text" placeholder="Estado" />

        <label class="c-section-label form-label">Pais</label>
        <input class="c-section-input form-control" id="country" name="country" type="text" placeholder="Pais" />



        <div class="c-section-group-buttom">
            <a class="c-section-button--cancel" href="<?php echo e(Route('address.index')); ?>">Cancelar</a>
            <button type="submit" class="c-section-button--salve">Salvar</button>
        </div>
    </form>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/address/create.blade.php ENDPATH**/ ?>