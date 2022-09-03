<template>
  <div class="content">
      <form>
        <div class="form-item">
          <label for="name">이름</label>
          <input type="text" id="name" placeholder="이름"/>
        </div>
        <div class="form-item">
          <label for="phone">연락처</label>
          <input id="phone" type="text"/>
        </div>
        <div class="form-item">
          <div style="height:40px">
            <label style="line-height:30px;width: 165px;" for="address">주소</label>
            <button type="button" class="subBtn postCodeBtn" @click="checkAddress()">우편번호</button>
          </div>
          <div class="address">
            <input id="address" type="text"/>
            <input id="detailAddress" type="text"/>
          </div>
          
        </div>
      </form>
      <button type="button" class="preBtn" @click="preButton()">이 전</button>
      <button type="submit" class="subBtn" @click="nextButton()">다 음</button>
    </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  mounted(){
    console.log("state",this.$store.state.userInfo)
  },
  methods:{
    checkAddress(){
      console.log("check address...")
    },
    preButton(){
      this.$router.go(-1)
    },
    nextButton(){
      this.$router.push("userCard")
    },

  }
}
</script>

<style scoped>
.postCodeBtn{
  background-color: black;
  color: white;
  margin-right: 10px;
}
.postCodeBtn:hover{
  background-color: white;
  color: black;
  margin-right: 10px;
}
.address input{
  width: 260px;
  padding: 0;
  margin: 5px;
}
</style>