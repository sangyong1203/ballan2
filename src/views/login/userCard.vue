<template>
  <div class="content">
      <form>
        <div class="form-item">
          <label for="card" style="display:block;margin-left: 10px;">카드번호</label>
          <div class="cardNum">
            <input type="text" id="card"/> -
            <input type="text"/> -
            <input type="text"/> -
            <input type="text"/>
          </div>

        </div>
      </form>
      <button type="submit" class="subBtn" @click="submitInfo">완 료</button>
    </div>
</template>

<script>
export default {
    name:"userCard",
  data(){
    return{
      
    }
  },
  mounted(){
    console.log("usercard",this.$store.state.userInfo)
  },
  methods:{
    submitInfo(){
      console.log("submitInfo...")
      this.$router.push("finishSignUp")
    },

  }
}
</script>

<style scoped>
.cardNum{
    width: 280px;
}
.cardNum input{
    width: 48px;
    display: inline;
    margin: 20px 0;
}
</style>