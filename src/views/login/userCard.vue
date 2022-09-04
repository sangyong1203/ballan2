<template>
  <div class="content">
      <form>
        <div class="form-item">
          <label for="card" style="display:block;margin-left: 10px;">카드번호</label>
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
    name:"userCard",
  data(){
    return{
      A:"",
      B:"",
      C:"",
      D:"",
      numWarn:"",
    }
  },
  mounted(){
    console.log("usercard",this.$store.state.userInfo)
  },
  methods:{
    numVarify(num){
      const reg = /^[0-9]{4}$/
      if(!reg.test(num)){
        this.numWarn = "4자리 수자를 입력하세요"
      } else {
        this.numWarn =""
      }
    },
    submitInfo(){
      if(this.checkCard()){
        this.numWarn = ""
        this.$router.push("finishSignUp")
      } else {
        this.numWarn = "정확한 카드번호를 입력하세요"
      }
    },
   checkCard(){
      let A = this.A.toString()
      let B = this.B.toString()
      let C = this.C.toString()
      let D = this.D.toString()
      console.log("a",A)
      function handleNum (num){
        let evenNum1 = "" 
        let evenNum2 = "" 
        let chartNum1 = num.charAt(1)
        let chartNum2 = num.charAt(3)
        evenNum1 = chartNum1*2 >9 ? multiplyNum(chartNum1) : chartNum1
        evenNum2 = chartNum2*2 >9 ? multiplyNum(chartNum2) : chartNum2
        function multiplyNum(evenNum){
          let sum = evenNum.charAt(0)+evenNum.charAt(1)
          console.log("sum",sum)
          return sum
        }
        let newNum = num.charAt(0) + evenNum1 + num.charAt(2) +evenNum2
        return newNum
      }
      A = handleNum(A)
      B = handleNum(B)
      C = handleNum(C)
      D = handleNum(D)
      console.log("A + B + C + D ", (A + B + C + D ) )
      let wholeNum =  (A + B + C + D ).split("")
      console.log("wholeNum ", wholeNum )
      let total = 0
      wholeNum.forEach(element => {
        total = total + Number(element)
      });
      console.log( "total", total)
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
</style>