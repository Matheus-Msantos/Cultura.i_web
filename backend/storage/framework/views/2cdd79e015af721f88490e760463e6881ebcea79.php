<?php $__env->startSection('content'); ?>
<body class="c-section-container">

    <?php if(session()->has('success')): ?>
        <div class="c-section-alert alert" role="alert">
            <?php echo e(session()->get('success')); ?>

        </div>
    <?php endif; ?>

    <h1 class="c-section-title">Lista de Eventos</h1>

    <a href="<?php echo e(Route('product.create')); ?>" class="c-section-button--create">Cadastrar Evento</a>

    <table class="c-section-table table table-hover">
        <thead class="c-section-table--head">
            <tr class="c-section-table--row">
                <th class="c-section-table--header">ID</th>
                <th class="c-section-table--header">Image</th>
                <th class="c-section-table--header">Nome</th>
                <th class="c-section-table--header">Preço</th>
                <th class="c-section-table--header">Data</th>
                <th class="c-section-table--header">Hora</th>
                <th class="c-section-table--header">Classificação</th>
                <th class="c-section-table--header">Descrição</th>
                <th class="c-section-table--header">Categoria</th>
                <th class="c-section-table--header">Endereço</th>
                <th class="c-section-table--header">Ação</th>
            </tr>
        <thead>

        <tbody class="c-section-table--body">
            <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr class="c-section-table--head">

                    <td class="c-section-table--data"><?php echo e($product->id); ?></td>
                    <td class="c-section-table--data">
                        <img class="c-section-table--image" src="<?php echo e($product->image); ?>">
                    </td>
                    <td class="c-section-table--data"><?php echo e($product->name); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->price); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->date); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->time); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->classification); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->description); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->category_id); ?></td>
                    <td class="c-section-table--data"><?php echo e($product->address_id); ?></td>
                    <td class="c-section-table--data c-section-table--button">

                        <a class="c-section-table--button-edit" href="<?php echo e(Route('product.edit', $product->id)); ?>">
                            <i class="fas fa-pencil-alt fa-sm"></i>
                        <a>
                        <form action="<?php echo e(Route('product.destroy', $product->id)); ?>" method="POST" onsubmit="return remover()" class="d-inline">
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

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/product/index.blade.php ENDPATH**/ ?>