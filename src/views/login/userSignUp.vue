<template>
 <!-- 회원가입-->
    <div class="content">
      <form>
        <div class="form-item">
          <label for="email">이메일</label>
          <input type="email" id="email" v-model="form.email" @blur="this.email" name="email" 
          placeholder="이메일 입력하세요"/>
          <span class="warns">{{emailWarn}}</span>
        </div>
        <div class="form-item">
          <label for="password">비밀번호</label>
          <input id="password" v-model="form.password" type="password" @blur="this.password"
          placeholder="비밀번호 입력하세요"/>
          <span class="warns">{{passwordWarn}}</span>
        </div>
        <div class="form-item">
          <label for="password">비밀번호확인</label>
          <input id="passwordConfirm" v-model="form.passwordConfirm" type="password" @blur="this.passwordConfirm"
          placeholder="비밀번호 재입력하세요"/>
          <span class="warns">{{passwordConfirmWarn}}</span>
        </div>
      </form>
      <button type="submit" class="subBtn" @click="nextButton">다 음</button>
    </div>
</template>

<script>
export default {
  data(){
    return {
      form:{
        email:"", // 이메일
        password:"", // 비밀번호
        passwordConfirm:"", // 비밀번호확인
      },
      emailWarn:"", // 이메일 경고 메세지
      passwordWarn:"", // 비밀번호 경고 메세지
      passwordConfirmWarn:"", // 비밀번호확인 경고 메세지
      validate:false,

    }
  },
  mounted(){
    console.log("state",this.$store.state.userInfo)
    if(this.$store.state.userInfo.email){
      this.form = this.$store.state.userInfo
    }
  },
  methods:{
    // 이메일 검증하기
    email(){
      const regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if(this.form.email == ""){
        this.emailWarn = "이메일 입력하세요"
      } else if(!regEmail.test(this.form.email)){
          this.emailWarn = "정확한 이메일 입력하세요"
      } else {
        this.emailWarn =""
        return true
      }
    },
    // 비밀번호 검증하기
    password(){
      const regPassward = /(?!^(\d+|[0-9a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,}$/
      if(this.form.password==""){
        this.passwordWarn = "비밀번호 입력하세요"
      } else if(!regPassward.test(this.form.password)){
        this.passwordWarn = "영문 대문자, 소문자, 숫자, 특수문자를 포함한 8자리 이상의 문자열을 입력하세요"
      } else {
        this.passwordWarn =""
        return true
      }
    },
    // 비밀번호확인 검증하기
    passwordConfirm(){
      const regPassward = /(?!^(\d+|[0-9a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,}$/
      if(this.form.passwordConfirm==""){
        this.passwordConfirmWarn = "비밀확인번호 입력하세요"
      } else if(!regPassward.test(this.form.passwordConfirm)){
        this.passwordConfirmWarn = "영문 대문자, 소문자, 숫자, 특수문자를 포함한 8자리 이상의 문자열을 입력하세요"
      } else if (this.form.passwordConfirm !== this.form.password){
        this.passwordConfirmWarn = "두번 입력한 비밀번호가 다릅니다 "
      } else {
        this.passwordConfirmWarn =""
        return true
      }
    },
    // 다음버튼
    nextButton(){
      // 입력한 정보가 모두 맞으면 정보를 저장하고 다음 페이지로 이동
      if (this.email()&&this.password()&&this.passwordConfirm()){
        const params = this.form
        this.$store.commit('setUserInfo',params)
        this.$router.push("userInfo")
      } else {
        alert("정보를 정확히 입력해주세요")
      }
    },
  }
}
</script>
<style scoped>
  
</style>