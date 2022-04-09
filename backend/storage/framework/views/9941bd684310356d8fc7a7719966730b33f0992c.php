<?php $__env->startSection('content'); ?>
<body class="c-section-container">

    <?php if(session()->has('success')): ?>
        <div class="c-section-alert alert" role="alert">
            <?php echo e(session()->get('success')); ?>

        </div>
    <?php endif; ?>

    <h1 class="c-section-title">Lista de Pedidos</h1>

    <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="c-order-container">
        <div class="c-order-container--row1">
            <div class="c-order-id">
                <span class="c-order--title">Número do pedido</span>
                <span class="c-order--text">000<?php echo e($order->id); ?></span>
            </div>

            <div class="c-order-nameUser">
                <span class="c-order--title">Nome do comprador</span>
                <span class="c-order--text"><?php echo e($order->user->name); ?></span>
            </div>
        </div>

        <div class="c-order-container--row2">
            <?php $__currentLoopData = $order->items(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="c-order-product-name">
                    <span class="c-order--title">Produto</span>
                    <span class="c-order--text"><?php echo e($item->product()->name); ?></span>
                </div>

                <div class="c-order-product-quantity">
                    <span class="c-order--title">Quantidade</span>
                    <span class="c-order--text"><?php echo e($item->quantity); ?></span>
                </div>

                <div class="c-order-product-price">
                    <span class="c-order--title">Preço</span>
                    <span class="c-order--text"><?php echo e($item->price); ?></span>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <div class="c-order-product-status">
                <span class="c-order--title">Status</span>
                <?php if($order->status == 'Aprovado'): ?>
                    <span class="c-order--text green"><?php echo e($order->status); ?></span>
                <?php endif; ?>
                <?php if($order->status == 'Cancelado'): ?>
                    <span class="c-order--text red"><?php echo e($order->status); ?></span>
                <?php endif; ?>
                <?php if($order->status == 'Processando'): ?>
                    <span class="c-order--text"><?php echo e($order->status); ?></span>
                <?php endif; ?>
            </div>

            <?php $__currentLoopData = $order->items(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $image): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="c-order-product-image">
                <span class="c-order--title">Imagem</span>
                <img class="c-section-table--image" src="<?php echo e(asset($item->product()->image)); ?>">
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>

        <div class="c-order-button">
            <a class="c-section-table--button-edit" href="<?php echo e(Route('order.edit', $order->id)); ?>">
                <i class="fas fa-pencil-alt fa-sm"></i>
            <a>
        </div>

    </div>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/order/index.blade.php ENDPATH**/ ?>