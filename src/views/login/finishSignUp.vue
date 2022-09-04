<template>
  <div class="content">
    <div class="info">
      <div class="headInfo">
        <h2>'{{form.name}}'님</h2>
        <h2>회원가입 되었습니다</h2>
      </div>
      <div class="bottomInfo">
        <p><span>이메일: </span>{{form.email}}</p>
        <p><span>주소: </span>{{form.address}}</p>
        <p><span>연락처: </span>{{form.phone}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{}
    }
  },
  mounted(){
    console.log(this.$store.state.userInfo)
    this.form = this.$store.state.userInfo
  },
  methods:{

  }
}
</script>

<style scoped>
.headInfo{
  margin: 50px 30px;
}
.bottomInfo{
  margin: 0 40px;
  text-align: left;
  font-size: 14px;
}
span{
  display: inline-block;
}
p{
  word-wrap:break-word
}
</style>