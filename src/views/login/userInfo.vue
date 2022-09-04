<template>
<!-- 회원상세정보 -->
  <div class="content">
      <form>
        <div class="form-item">
          <label for="name">이름</label>
          <input type="text" id="name" v-model="form.name" @blur="vfname" 
          placeholder="이름 입력하세요"/>
          <span class="warns">{{nameWarn}}</span>
        </div>
        <div class="form-item">
          <label for="phone">연락처</label>
          <input type="text" id="phone" v-model="form.phone" @blur="vfphone" 
          placeholder="연락처 입력하세요"/>
          <span class="warns">{{phoneWarn}}</span>
        </div>
        <div class="form-item">
          <div style="height:40px">
            <label style="line-height:30px;width: 165px;" for="address">주소</label>
            <button type="button" class="subBtn postCodeBtn" @click="checkAddress">우편번호</button>
          </div>
          <div class="address">
            <input id="address" type="text" v-model="form.address" @blur="vfaddress" 
          placeholder="주소 입력하세요"/>
          <span class="warns">{{addressWarn}}</span>
            <input id="detailAddress" type="text" v-model="form.detailAddress" @blur="vfdetailAddress" 
          placeholder="상세주소 입력하세요"/>
          <span class="warns">{{detailAddressWarn}}</span>
          </div>
          <!-- 우편변호 component -->
          <post-code ref="postCodeRef"></post-code>
        </div>
      </form>
      <button type="button" class="preBtn" @click="preButton">이 전</button>
      <button type="submit" class="subBtn" @click="nextButton">다 음</button>
    </div>
</template>

<script>
import PostCode from "../../components/postCode.vue"
export default {
  components:{
    PostCode
  },
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
      address:""
    }
  },
  mounted(){
    // 저장했던 정보를 조합
    this.form = Object.assign({},this.form,this.$store.state.userInfo)
    console.log("state",this.$store.state.userInfo)
  },
  watch:{
    // 주소변동 감시
    address(){
      this.form.address = this.address
      this.addressWarn = ""
    }
  },
  methods:{
    // 이를 검증
    vfname(){
      const regName=/^([가-힣]){2,}$/
      const regName2 = /^([a-zA-Z]){3,}$/
      if(!regName.test(this.form.name)&&!regName2.test(this.form.name)){
        this.nameWarn = "2글자 이상의 한글 완성형, 또는 3글자 이상의 영문 알파벳으로 입력하세요"
      } else {
        this.nameWarn = ""
        return true
      }
    },
    // 연락처 검증
    vfphone(){
      const regPhone = /^0(([0-9]{2}[ |-])|([0-9]{2}))(([0-9]{3,4}[ |-])|([0-9]{3,4}))[0-9]{4}$/
      if(!regPhone.test(this.form.phone)){
        this.phoneWarn = "연락처 정확히 입력해주세요"
      } else {
        this.phoneWarn = ""
        return true
      }
    },
    // 주소 검증
    vfaddress(){
      if(this.form.address === ""){
        this.addressWarn = "주소 입력해주세요"
      } else {
        this.addressWarn = ""
        return true
      }
    },
    // 상세주소 검증
    vfdetailAddress(){
      if(this.form.detailAddress === ""){
        this.detailAddressWarn = "상세주소 입력해주세요"
      } else {
        this.detailAddressWarn = ""
        return true
      }
    },
    // 이전 버튼
    preButton(){
      const params = this.form
      this.$store.commit("setUserInfo", params)
      this.$router.go(-1)
    },
    // 다음 버튼
    nextButton(){
      // 모든 입력한 정보가 맞으면 정보를 저장하고 다음 페이지로 이동
      if(this.vfname()&&this.vfphone()&&this.vfaddress()&&this.vfdetailAddress()){
        console.log("form",this.form)
        const params = this.form
        this.$store.commit('setUserInfo',params)
        this.$router.push("userCard")
      } else {
        alert("정확히 입력해주세요")
      }
    },
    // 우편번호 컴포넌트 호출
    checkAddress() {
      this.$refs.postCodeRef.open()
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