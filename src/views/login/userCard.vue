<template>
<!-- 카드번호 -->
  <div class="content">
      <form>
        <div class="form-item">
          <label for="card">카드번호</label>
          <div class="cardNum">
            <input type="text" id="card" v-model="A" maxlength="4" @keyup="numVarify(A)" autocomplete="off"/> -
            <input type="text" v-model="B" maxlength="4" @keyup="numVarify(B)" autocomplete="off"/> -
            <input type="text" v-model="C" maxlength="4" @keyup="numVarify(C)" autocomplete="off"/> -
            <input type="text" v-model="D" maxlength="4" @keyup="numVarify(D)" autocomplete="off"/>
          </div>
          <span>{{numWarn}}</span>
        </div>
      </form>
      <button type="submit" class="subBtn" @click="submitInfo">완 료</button>
    </div>
</template>

<script>
export default {
  data(){
    return{
      A:"",
      B:"",
      C:"",
      D:"",
      numWarn:"",
    }
  },
  methods:{
    // 4자리 수자인지를 검증
    numVarify(num){
      const reg = /^[0-9]{4}$/
      if(!reg.test(num)){
        this.numWarn = "4자리 수자를 입력하세요"
      } else {
        this.numWarn =""
      }
    },
    // 완료버튼
    submitInfo(){
      if(this.checkCard()){
        this.numWarn = ""
        let cardNumber = this.A + this.B + this.C + this.D
        this.$store.commit("setUserInfo", cardNumber)
        console.log("UserInformation:", this.$store.state.userInfo)
        this.$router.push("finishSignUp")
      } else {
        this.numWarn = "정확한 카드번호를 입력하세요"
      }
    },
    // 카드번호 검증
    checkCard(){
      let A = this.A.toString()
      let B = this.B.toString()
      let C = this.C.toString()
      let D = this.D.toString()
      // 짝수번제 수자처리방법
      function handleNum (num){
        let chartNum1 = num.charAt(0) // 오른쪽 두번제수자 뽑기
        let chartNum2 = num.charAt(2) // 오른쪽 네번제수자 뽑기
        // 짝수번제 수자를 곱하기 2 한다. 9보다 크면 각 자리수를 더한다
        let evenNum1 = multiplyNum(chartNum1) 
        let evenNum2 = multiplyNum(chartNum2) 
        function multiplyNum(evenNum){
          let nums = (evenNum * 2 ).toString()
          if(nums>9){
            let sum = Number(nums.charAt(0)) + Number(nums.charAt(1))
            console.log("sum",sum)
            return sum
          } else {
           return nums
          }
        }
        // 4자리 수자를 다시조합
        let newNum = evenNum1 + num.charAt(1) + evenNum2 + num.charAt(3)
        return newNum
      }
      // 짝수번제 수자처리
      A = handleNum(A)
      B = handleNum(B)
      C = handleNum(C)
      D = handleNum(D)
      // 처리후의 수자문열을 붙인후 배열로 변환
      let wholeNum =  (A + B + C + D ).split("")
      console.log("wholeNum ", wholeNum )
      let total = 0
      // 각 수자를 더한다
      wholeNum.forEach(element => {
        total = total + Number(element)
      });
      console.log( "total", total)
      // 더한 합계를 10으로 나눈후의 판단한 불린 결과를 얻는다
      let resualt = total % 10 == 0 ? true : false
      return resualt
   }
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
span{
  font-size: 12px;
  color: red;
}
label{
  display:block;
  margin-left: 10px;
}
</style>