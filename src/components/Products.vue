<template>
    <Master>
        <div class="container mt-5 pt-5">
            <div class="row">
              <div v-for="(p,i) in product" :key="i" class="col-lg-4 col-md-12 mb-4">
                    <!--Card-->
                  <div class="card card-cascade wider mb-4">

                    <!--Card image-->
                    <div class="view view-cascade" style="">
                      <img v-bind:src="p.image" class="card-img-top" style="max-height:300px; width:auto;" align="center">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <!--/Card image-->

                    <!--Card content-->
                    <div class="card-body card-body-cascade text-center">
                      <!--Title-->
                      <h4 class="card-title"><strong>{{p.title}}</strong></h4>
                      <h5 class="indigo-text"><strong>{{p.category}}</strong></h5>

                      <p class="card-text">{{p.description}}
                      </p>


                      <!--Linkedin-->
                      <a class="btn btn-primary" @click="ATC(p)">add to cart  <i class="fas fa-cart-plus"></i></a>
                  

                    </div>
                    <!--/.Card content-->

                  </div>
                  
              </div>
            </div>
        </div>
    </Master>
</template>
<script>
import Master from './Master.vue'
import axios from 'axios'
export default {
    data(){
      return {
        product:[]
      }
    },
    components: {Master},
    beforeCreate(){
      axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
              this.product = res.data
            })
            
    },
    name:'Products',
    methods:{
      ATC: function(p){
        var cart = this.$root.cart;
        var isInCart = cart.find(v=>{
          return v.id == p.id
        })
        if(!isInCart){
             cart.push({...p,qty:1});
        console.log(p);
        }else{
          return
        }

     
      },
    
    }
    }

    
</script>