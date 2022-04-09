<?php $__env->startSection('content'); ?>
<body class="c-section-container">

    <?php if(session()->has('success')): ?>
        <div class="c-section-alert alert" role="alert">
            <?php echo e(session()->get('success')); ?>

        </div>
    <?php endif; ?>

    <h1 class="c-section-title">Lista de Endereço</h1>

    <a href="<?php echo e(Route('address.create')); ?>" class="c-section-button--create">Cadastrar Endereço</a>

    <table class="c-section-table table">
        <thead class="c-section-table--head">
            <tr class="c-section-table--row">
                <th class="c-section-table--header">ID</th>
                <th class="c-section-table--header">Rua / Av</th>
                <th class="c-section-table--header">Bairro</th>
                <th class="c-section-table--header">Número</th>
                <th class="c-section-table--header">Cidade</th>
                <th class="c-section-table--header">Estado</th>
                <th class="c-section-table--header">Pais</th>
                <th class="c-section-table--header">Ação</th>
            </tr>
        <thead>

        <tbody class="c-section-table--body">
            <?php $__currentLoopData = $addresses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr class="c-section-table--head">
                    <td class="c-section-table--data"><?php echo e($address->id); ?></td>
                    <td class="c-section-table--data"><?php echo e($address->street); ?></td>
                    <td class="c-section-table--data"><?php echo e($address->district); ?></td>
                    <td class="c-section-table--data"><?php echo e($address->number); ?></td>
                    <td class="c-section-table--data"><?php echo e($address->city); ?></td>
                    <td class="c-section-table--data"><?php echo e($address->state); ?></td>
                    <td class="c-section-table--data"><?php echo e($address->country); ?></td>
                    <td class="c-section-table--data c-section-table--button">
                    <a href="<?php echo e(Route('address.edit', $address->id)); ?>" class="c-section-table--button-edit">
                            <i class="fas fa-pencil-alt fa-sm"></i>
                        </a>
                        <form action="<?php echo e(Route('address.destroy', $address->id)); ?>" method="POST" onsubmit="return remover()" class="d-inline">
                            <?php echo method_field('DELETE'); ?>
                            <?php echo csrf_field(); ?>
                            <button type="submit" class="text-danger border-none"><i class="fas fa-trash fa-sm"></i></button>
                        </form>

                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/address/index.blade.php ENDPATH**/ ?>