<template>
    <div class="content">
      <form>
        <div class="form-item">
          <label for="email">이메일</label>
          <input type="email" id="email" v-model="form.email" name="email" placeholder="이메일입력하세요" required/>
          <span class="warns">{{emailWarn}}</span>
        </div>
        <div class="form-item">
          <label for="password">비밀번호</label>
          <input id="password" v-model="form.password" type="password" required/>
          <span class="warns">{{passwordWarn}}</span>
        </div>
        <div class="form-item">
          <label for="password">비밀번호확인</label>
          <input id="passwordConfirm" v-model="form.passwordConfirm" type="password" required/>
          <span class="warns">{{passwordConfirmWarn}}</span>
        </div>
      </form>
      <button type="submit" class="subBtn" @click="nextButton()">다 음</button>
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

    }
  },
  mounted(){
    console.log("state",this.$store.state.userInfo)
    if(this.$store.state.userInfo.email){
      this.form = this.$store.state.userInfo
    }
    
  },
  methods:{
    nextButton(){
      console.log("form",this.form)
      const regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if(this.form.email == ""){
        this.emailWarn = "이메일 입력하세요"
      } else if(!regEmail.test(this.form.email)){
          this.emailWarn = "정확한 이메일 입력하세요"
      }
      if(this.form.password==""){
        this.passwordWarn = "비밀번호 입력하세요"
      } else if(this.form.password==""){
        this.passwordWarn = "비밀번호 입력하세요"
      } else if (this.form.passwordConfirm == ""){
        this.passwordConfirmWarn = "비밀확인번호 입력하세요"
      } else {
        const params = this.form??{}
        this.$store.commit('setUserInfo',params)
        this.$router.push("userInfo")
      }


    },

  }
}
</script>
<style scoped>
  
</style>