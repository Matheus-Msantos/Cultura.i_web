<?php $__env->startSection('content'); ?>

<body class="c-section-container">

    <?php if(session()->has('success')): ?>
        <div class="c-section-alert alert" role="alert">
            <?php echo e(session()->get('success')); ?>

        </div>
    <?php endif; ?>

    <div class="d-flex justify-content-center">
        <h1 class="c-section-title">Lista de Categorias</h1>

        <div>
            <a href="<?php echo e(Route('category.create')); ?>" class="c-section-button--create mt-4">
                <i class="fas fa-plus"></i>
            </a>
        </div>
    </div>

    <table class="c-section-table table table-hover">
        <thead class="c-section-table--head">
            <tr class="c-section-table--row">
                <th class="c-section-table--header">ID</th>
                <th class="c-section-table--header">Nome</th>
                <th class="c-section-table--header">Ação</th>
            </tr>
        <thead>

        <tbody class="c-section-table--body">
            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr class="c-section-table--head">
                    <td class="c-section-table--data"><?php echo e($category->id); ?></td>
                    <td class="c-section-table--data"><?php echo e($category->name); ?></td>
                    <td class="c-section-table--data c-section-table--button">
                        
                        <a href="<?php echo e(Route('category.edit', $category->id)); ?>" class="c-section-table--button-edit" style="border-radius: 100%">
                            <i class="fas fa-pencil-alt fa-sm"></i>
                        </a>
                        <form action="<?php echo e(Route('category.destroy', $category->id)); ?>" method="POST" onsubmit="return remover()" class="d-inline">
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

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/category/index.blade.php ENDPATH**/ ?>