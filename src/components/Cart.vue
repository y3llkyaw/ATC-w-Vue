<template>
    <Master>
      <div class="container pt-5 mt-5">
          <div class="row">
            
            <div v-if="this.product.length!=0" class="card w-100 ml-1 mr-1">
              <div class="card-body p-0 m-0">
                <div class="card-header bg-info text-white"><span>Items in your Cart</span><div class="badge badge-notification bg-warning ml-1">{{this.product.length}}</div></div>
                <table class="table">
                  <tr class=" text-center">
                    <th class="col-1"><strong>Image</strong></th>
                    <th class="col-1"><strong>Name</strong></th>
                    <th class="col-2"><strong>Price (mmk)</strong></th>
                    <th class="col-1"><strong>Quantity</strong></th>
                    <th class="col-1"><strong>Total</strong></th>
                  </tr>
                  <tr  v-for="(p,i) in product" :key="i">
                    <td class="text-center"><img   class="img-thumbnail" style="max-width:100%; max-height:200px;" :src="p.image" alt=""></td>
                    <td  class="text-center" ><strong>{{p.title}}</strong></td>
                    <td  class="text-center"><strong>{{p.price}}</strong></td>
                    <td  class="text-center"><span>{{p.qty}}</span><br><a class="btn btn-sm px-3 m-1 btn-success" @click="plus(p)">+</a><a class="btn btn-sm px-3 m-1 btn-warning" @click="minus(p)">-</a><a class="btn btn-sm px-3 m-1 btn-danger" @click="remove(p)">remove from Cart</a></td>
                    <td class="text-center" style=""><p><strong>{{parseFloat(p.price * p.qty).toFixed(2)}}</strong></p></td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-right"><strong>Total :</strong></td>
                    <td colspan="2" class="text-center"><strong>{{(this.total).toFixed(3)}}</strong></td>
                  </tr>
              </table>
              </div>
            </div>
          </div>
      </div>
    </Master>
</template>
<script>
import Master from './Master.vue'
export default {
  components: { Master },
  data(){
    return{
      emptyCart:false,
      product:this.$root.cart,
      total:0,
    }
    },
    created(){
        this.product.forEach(element => {
        this.total=this.total+element.price * element.qty;
      });
     
    },
    methods:{
      plus:function(p){
        p.qty++;
        
        this.showtotal();
      },
      minus:function(p){
        if(p.qty>1){
          p.qty--;
          this.showtotal();
        }
      },
      remove:function(p){
        for( var i = 0; i < this.product.length; i++){ 
          // console.log(p.id,this.product[i].id);
        if ( this.product[i] === p) { 
            // console.log(this.product[i].id+":"+p.id+"same");
            this.product.splice(i,1); 
            this.showtotal();
            return;
          }
      

        }
      },
      showtotal:function(){
        this.total = 0;
        this.product.forEach(element => {
        this.total=this.total+element.price * element.qty;
      });
      }
      

    },
   name:'Cart',
}
</script>