<script>
// Función para aplicar el zoom en la imagen
function zoom(e) {
    var zoomer = e.currentTarget;
    var offsetX = e.offsetX || e.touches[0].pageX;
    var offsetY = e.offsetY || e.touches[0].pageY;
    var x = (offsetX / zoomer.offsetWidth) * 100;
    var y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
</script>