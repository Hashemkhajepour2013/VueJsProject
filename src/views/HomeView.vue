<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          voluptatem tenetur doloribus voluptates expedita molestias cumque
          similique mollitia molestiae maxime corporis, nam libero reiciendis
          dolorum iste odit velit minus atque perferendis illo magnam. Impedit,
          esse fugit! Reiciendis maiores veritatis accusantium quibusdam quas
          nulla obcaecati, impedit dolorem perspiciatis hic blanditiis sed porro
          quod totam fugiat deserunt quia aperiam corporis sapiente ex explicabo
          ab eos exercitationem atque. Ullam rem deleniti, rerum tempora tempore
          neque eligendi itaque molestias consectetur, quaerat velit. Aut quos
          quae ipsa in blanditiis possimus nemo illo, numquam, qui laborum
          officia deleniti voluptatem ducimus facere aspernatur, sed ratione ad
          harum?
        </p>

        <router-link class="btn btn-dark" :to="{name:'users'}">Users</router-link>
        <router-link class="btn btn-light ms-3" :to="{name:'posts'}">Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>
