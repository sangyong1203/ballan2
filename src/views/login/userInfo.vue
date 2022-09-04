<template>
  <div class="content">
      <form>
        <div class="form-item">
          <label for="name">이름</label>
          <input type="text" id="name" v-model="form.name" @blur="name" 
          placeholder="이름 입력하세요"/>
          <span class="warns">{{nameWarn}}</span>
        </div>
        <div class="form-item">
          <label for="phone">연락처</label>
          <input type="text" id="phone" v-model="form.phone" @blur="phone" 
          placeholder="연락처 입력하세요"/>
          <span class="warns">{{phoneWarn}}</span>
        </div>
        <div class="form-item">
          <div style="height:40px">
            <label style="line-height:30px;width: 165px;" for="address">주소</label>
            <button type="button" class="subBtn postCodeBtn" @click="checkAddress">우편번호</button>
          </div>
          <div class="address">
            <input id="address" type="text" v-model="form.address" @blur="address" 
          placeholder="주소 입력하세요"/>
          <span class="warns">{{addressWarn}}</span>
            <input id="detailAddress" type="text" v-model="form.detailAddress" @blur="detailAddress" 
          placeholder="상세주소 입력하세요"/>
          <span class="warns">{{detailAddressWarn}}</span>
          </div>
          
        </div>
      </form>
      <button type="button" class="preBtn" @click="preButton">이 전</button>
      <button type="submit" class="subBtn" @click="nextButton">다 음</button>
    </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        name:"",
        phone:"",
        address:"",
        detailAddress:""
      },
      nameWarn:"",
      phoneWarn:"",
      addressWarn:"",
      detailAddressWarn:"",
    }
  },
  mounted(){
    this.form = Object.assign({},this.$store.state.userInfo)
    console.log("state",this.$store.state.userInfo)
  },
  methods:{
    name(){
      const regName=/^([가-힣]){2,}$/
      const regName2 = /^([a-zA-Z]){3,}$/
      if(!regName.test(this.form.name)&&!regName2.test(this.form.name)){
        this.nameWarn = "2글자 이상의 한글 완성형, 또는 3글자 이상의 영문 알파벳으로 입력하세요"
      } else {
        this.nameWarn = ""
        return true
      }
    },
    phone(){
      const regPhone = /^0(([0-9]{2}[ |-])|([0-9]{2}))(([0-9]{3,4}[ |-])|([0-9]{3,4}))[0-9]{4}$/
      if(!regPhone.test(this.form.phone)){
        this.phoneWarn = "연락처 정확히 입력해주세요"
      } else {
        this.phoneWarn = ""
        return true
      }
    },
    address(){
      if(this.form.address === ""){
        this.addressWarn = "주소 입력해주세요"
      } else {
        this.addressWarn = ""
        return true
      }
    },
    detailAddress(){
      if(this.form.detailAddress === ""){
        this.detailAddressWarn = "상세주소 입력해주세요"
      } else {
        this.detailAddressWarn = ""
        return true
      }
    },
    checkAddress(){
      console.log("check address...")
    },
    preButton(){
      const params = this.form??{}
      this.$store.commit("setUserInfo", params)
      this.$router.go(-1)
    },
    nextButton(){
      console.log("123123123123")
      if(this.name()&&this.phone()&&this.address()&&this.detailAddress()){
        console.log("form",this.form)
        const params = this.form
        this.$store.commit('setUserInfo',params)
        this.$router.push("userCard")
      } else {
        alert("정확히 입력해주세요")
      }
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