<template>
  <footer>
    <div class="footer">
      <div class="show"><p><b>Sophia de Jong</b></p></div>
      <!-- <div class="hide"><u>Username:</u><b>&nbsp;<span>{{ name }}</span></b></p></div> -->
      <div><p>2022</p></div>
      <div class="hide"><p><b>Ironhack BCN</b></p></div>
    </div>
  </footer>
</template>

<script>

</script>

<style>
.footer {
  font-family: "Darker Grotesque", sans-serif;
  width: 96%;
  background-color: blue;
  color: white;
  height: auto;
  padding: 0 2% 0 2%;
  bottom: 0;
  text-align: right;
  position: fixed;
  display: flex;
  bottom: 0;
  justify-content: space-between;
}


@media screen and  (max-width: 900px) {
  .hide {
    display: none;
  }

}
</style>
