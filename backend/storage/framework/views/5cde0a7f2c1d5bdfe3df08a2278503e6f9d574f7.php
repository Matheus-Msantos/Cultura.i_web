
<?php $__env->startSection('content'); ?>

<body class="c-section-container">

    <a href="<?php echo e(Route('product.index')); ?>" class="c-section-button--back">Voltar</a>

    <h1 class="c-section-title--form">Editar Evento</h1>


    <form class="c-section-form" method="POST" action="<?php echo e(Route('product.update', $product->id)); ?>" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>

        <label class="c-section-label h6 form-label">Nome</label>
        <input class="c-section-input mb-3 form-control" id="nome" name="name" type="text" placeholder="nome" value='<?php echo e($product->name); ?>'/>


        <label class="c-section-label h6 form-label">Preço</label>
        <input class="c-section-input mb-3 form-control" id="preco" name="price" type="number" placeholder="Preço" value='<?php echo e($product->price); ?>'/>


        <label class="c-section-label h6 form-label">Hora</label>
        <input class="c-section-input mb-3 form-control" id="hora" name="time" type="text" placeholder="16:20h" value='<?php echo e($product->time); ?>' />


        <label class="c-section-label h6 form-label">Data</label>
        <input class="c-section-input mb-3 form-control" id="data" name="date" type="text" placeholder="DD/MM/YYYY" value='<?php echo e($product->date); ?>'/>



        <label class="c-section-label h6 form-label">Classificação</label>
        <input class="c-section-input mb-3 form-control" id="classification" name="classification" type="text" placeholder="+18" value='<?php echo e($product->classification); ?>' />



        <label class="c-section-label h6 form-label">Descrição</label>
        <textarea class="c-section-input mb-3 form-control" name="description"><?php echo e($product->description); ?></textarea>


        <label class="c-section-label h6 form-label">Imagem</label>
        <input class="c-section-input mb-3 form-control" id="image" name="image" type="file">


        <label class="c-section-label h6 form-label">Categoria</label>
        <select class="c-section-select mb-3 form-control" id="category" name="category_id">
            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($category->id); ?>" <?php if($category->id == $product->category_id): ?> selected <?php endif; ?>>
                    <?php echo e($category->name); ?>

                </option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </select>


        <label class="c-section-label h6 form-label">Endereço</label>
        <select class="c-section-select mb-3 form-control" id="address" name="address_id">
            <?php $__currentLoopData = $addresses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($address->id); ?>" <?php if($address->id == $product->address_id): ?> selected <?php endif; ?>>
                    <?php echo e($address->street); ?>

                </option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </select>

        <div class="c-section-group-buttom">
            <a class="c-section-button--cancel" href="<?php echo e(Route('product.index')); ?>">Cancelar</a>
            <button type="submit" class="c-section-button--salve">Atualizar</button>
        </div>

    </form>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/product/edit.blade.php ENDPATH**/ ?>