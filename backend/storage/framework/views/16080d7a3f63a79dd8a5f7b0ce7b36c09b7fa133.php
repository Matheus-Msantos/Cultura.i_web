
<?php $__env->startSection('content'); ?>
<body class="c-section-container">

    <a href="<?php echo e(Route('product.index')); ?>" class="c-section-button--back">Voltar</a>

    <h1 class="c-section-title--form">Cadastrar Evento</h1>


    <form class="c-section-form" method="POST" action="<?php echo e(Route('product.store')); ?>" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>

            <label class="c-section-label">Endereço</label>
            <select class="c-section-select form-control" id="address" name="address_id">
                <?php $__currentLoopData = $addresses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <option value="<?php echo e($address->id); ?>">
                        <?php echo e($address->street); ?>

                    </option>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>

            <span class="c-section-button-address--text">Não encontrou o endeço? Cadastre!</span>
            <a href="<?php echo e(Route('address.create')); ?>" target="_blank" class="c-section-button-address">endereço</a>


            <label class="c-section-label h6 form-label">Nome</label>
            <input class="c-section-input mb-3 form-control" id="nome" name="name" type="text" placeholder="nome" required>



            <label class="c-section-label h6 form-label">Preço</label>
            <input class="c-section-input mb-3 form-control" id="preco" name="price" type="number" placeholder="Preço" required>



            <label class="c-section-label h6 form-label">Hora</label>
            <input class="c-section-input mb-3 form-control" id="hora" name="time" type="text" placeholder="16:20h"  required>



            <label class="c-section-label h6 form-label">Data</label>
            <input class="c-section-input mb-3 form-control" id="data" name="date" type="text" placeholder="DD/MM/YYYY" required>



            <label class="c-section-label h6 form-label">Classificação</label>
            <input class="c-section-input mb-3 form-control" id="classification" name="classification" type="text" placeholder="+18"  required>


            <label class="c-section-label h6 form-label">Descrição</label>
            <textarea class="c-section-textArea mb-3 form-control" name="description"s rows="5"></textarea>

            <label class="c-section-label h6 form-label">Imagem</label>
            <input class="c-section-input mb-3 form-control" id="image" name="image" type="file">

            <label class="c-section-label h6 form-label">Categoria</label>
            <select class="c-section-select form-control" id="category" name="category_id" class="form-select" aria-label="Default select example">
            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($category->id); ?>">
                    <?php echo e($category->name); ?>

                </option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>

            <div class="c-section-group-buttom">
                <a class="c-section-button--cancel" href="<?php echo e(Route('product.index')); ?>">Cancelar</a>
                <button type="submit" class="c-section-button--salve">Salvar</button>
            </div>
    </form>
</body>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Matheus\OneDrive\Área de Trabalho\Study\Senac\PI4\application\resources\views/product/create.blade.php ENDPATH**/ ?>