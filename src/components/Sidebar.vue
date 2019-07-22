<template>
  <div class="wky-dash__sidebar">
    <div class="wky-dash__logo">
      <img src="" alt="">
      <h1>WaKaYa</h1>
    </div>
    <div class="wky-dash__user">
      <div class="wky-dash__user-name">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ384VTf37Lgn06z3Sb1gbWi7YRCA6FwMBKTMFfzC78RtIm4fAM" alt="Perfil" width="50" height="50">
        <span>Ciro Yupanqui Pumachapi</span>
        <i class="fas fa-angle-right"></i>
      </div>
      <div class="wky-dash__user-menu">
        <a href="#" class="wky-dash__links-menu">Datos</a>
        <a href="#" class="wky-dash__links-menu">Compras</a>
        <a href="#" class="wky-dash__links-menu">Ventas</a>
        <a href="#" class="wky-dash__links-menu">Configuracion</a>
        <a href="#" class="wky-dash__links-menu">Salir</a>
      </div>
    </div>
    <div class="wky-dash__menu">
      <a href="#"><i class="fas fa-boxes"></i> <span>Dashboard</span></a>
      <a href="#"><i class="fas fa-boxes"></i> <span>Historial</span></a>
      <a href="#"><i class="fas fa-boxes"></i> <span>Organizaciones</span></a>
      <a href="#"><i class="fas fa-boxes"></i> <span>Ofertas de la semana</span></a>
      <a href="#"><i class="fas fa-boxes"></i> <span>Vender</span></a>
      <a href="#"><i class="fas fa-boxes"></i> <span>Ayuda</span></a>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.wky-dash__sidebar {
  height: 100vh;
  background-color: var(--color-white);
  box-shadow: .1rem 0 .3rem rgba(0, 0, 0, .2);
}

.wky-dash__logo {
  background-color: var(--color-primary-1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wky-dash__logo h1 {
  color: var(--color-white);
  text-align: center;
  padding: 1.5rem;
}

.wky-dash__user-name {
  padding: 1rem 1rem .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wky-dash__user-name span {
  font-size: 1.1rem;
}

.wky-dash__user-name i {
  font-size: 1.4rem;
}

.wky-dash__user-name img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.wky-dash__user-menu {
  padding: .5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  border: .1rem solid var(--color-gray);
}

.wky-dash__links-menu {
  text-decoration: none;
  text-align: center;
  padding: .5rem;
  font-size: 1.2rem;
  display: inline-block;
  color: var(--color-black);
  transition: color .3s;
}

.wky-dash__links-menu:hover {
  background-color: var(--color-gray);
}

.wky-dash__menu {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.wky-dash__menu a {
  text-decoration: none;
  font-size: 1.3rem;
  padding: .5rem;
  margin-bottom: 1rem;
  color: var(--color-black);
}

.wky-dash__menu a:hover {
  color: var(--color-secondary-1);
}

.wky-dash__menu a i {
  width: 1.5rem;
  margin-right: 1rem;
}

</style>