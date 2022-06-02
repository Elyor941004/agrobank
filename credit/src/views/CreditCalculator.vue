<template>
  <div class="header_calculator">
    <calculator-header/>
  </div>
  <hr class="header_calculator_hr"/>
  <div class="body_calculator">
    <div class="body_calculator_form form-group">
      <label for="">Kredit nomi</label>
      <select name="" id="" class="form-control" v-model="calculatorValue" @change="selectCalculator">
        <option value="educationCard" class="form-control">Ta'lim krediti</option>
        <option value="onlineMicroCredit" class="form-control">Onlayn mikroqarz</option>
        <option value="creditCard" class="form-control">Kredit karta</option>
      </select>
      <label for="">Kredit miqdori</label>
      <input type="number" class="form-control" placeholder="Kredit miqdorini kiriting">
      <div class="OnlineMicroCredit" v-if="onlineMicroCreditHide">
        <div class="row">
          <div class="col">
            <label for="">Sug'urta to'lovi</label>
            <input type="number" class="form-control" placeholder="0">
          </div>
          <div class="col">
            <label for="">Notarius to'lovi</label>
            <input type="number" class="form-control" placeholder="0">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Garovni baholash bo'yicha xarajatlar</label>
            <input type="number" class="form-control" placeholder="0">
          </div>
          <div class="col">
            <label for="">Boshqa xarajatlar</label>
            <input type="number" class="form-control" placeholder="0" >
          </div>
        </div>
      </div>
      <div class="OnlineMicroCredit" v-if="onlineMicroCredit">
        <div class="row">
          <div class="col">
            <label for="">Kredit foiz stavkasi (oylik)</label>
            <input type="text" class="form-control" placeholder="2.25%" readonly>
          </div>
          <div class="col">
            <label for="">Kredit foiz stavkasi (yillik)</label>
            <input type="text" class="form-control" placeholder="26.99%" readonly>
          </div>
        </div>
        <div class="row">
          <div class="col"><label for="">Kredit muddati (oy)</label></div>
          <div class="col"><label for="">Depozit miqdori 10% hamda boshlang'ich to'lov</label></div>
          <div class="col"><label for="">Depozit miqdori 10% hamda boshlang'ich to'lov</label></div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="12" readonly>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="0.0" readonly>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="0" readonly>
          </div>
        </div>
      </div>
      <div class="CreditCard" v-if="creditCard">
        <div class="row">
          <div class="col">
            <label for="">Kredit foiz stavkasi (oylik)</label>
            <input type="text" class="form-control" placeholder="2.25%" readonly>
          </div>
          <div class="col">
            <label for="">Kredit foiz stavkasi (yillik)</label>
            <input type="text" class="form-control" placeholder="26.99%" readonly>
          </div>
        </div>
        <div class="row">
          <div class="col"><label for="">Kredit muddati (oy)</label></div>
          <div class="col"><label for="">Depozit miqdori 10% hamda boshlang'ich to'lov</label></div>
          <div class="col"><label for="">Depozit miqdori 10% hamda boshlang'ich to'lov</label></div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="48" readonly>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="0.0" readonly>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="0" readonly>
          </div>
        </div>
      </div>
      <div class="EducationCredit" v-if="educationCard">
        <div class="row">
          <div class="col">
            <label for="">Kredit foiz stavkasi (oylik)</label>
            <input type="text" class="form-control" placeholder="1.2%" readonly>
          </div>
          <div class="col">
            <label for="">Kredit foiz stavkasi (yillik)</label>
            <input type="text" class="form-control" placeholder="14%" readonly>
          </div>
        </div>
        <div class="row">
          <div class="col"><label for="">Kredit muddati (oy)</label></div>
          <div class="col"><label for="">Depozit miqdori 10% hamda boshlang'ich to'lov</label></div>
          <div class="col"><label for="">Depozit miqdori 10% hamda boshlang'ich to'lov</label></div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="172" readonly>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="0.0" readonly>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="0" readonly>
          </div>
        </div>
      </div>
      <button type="submit" href="" class="btn btn-success">Kreditni hisoblash</button>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>Oy</th>
          <th>Kredit qoldig'i</th>
          <th>Foiz to'lov summasi</th>
          <th>Uchinchi shaxs bilan bog'liq xarajatlar</th>
          <th>Boshqa xarajatlar</th>
          <th>Asosiy qarzni qaytarish ulishi</th>
          <th>Jami to'lov</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
          <td>john@example.com</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import CalculatorHeader from "@/components/CalculatorHeader";
  import {mapState, mapMutations} from "vuex"
  export default{
    components: {CalculatorHeader},
    data(){
      return{
        calculatorValue:'',
      }
    },
    computed:{
      ...mapState(['creditCard', 'educationCard', 'onlineMicroCreditHide', 'onlineMicroCredit'])
    },
    methods:{
       ...mapMutations(['selectCalculatorFunc']),
      selectCalculator(){
         console.log(this.calculatorValue)
        this.selectCalculatorFunc(this.calculatorValue);
      },
    }
  }
</script>
<style scoped>
@import '../assets/css/all.css';
@import '../assets/css/bootstrap.min.css';

.header_calculator_hr{
  border: solid 1px #189738;
  width: 80%;
}
.header_calculator{
  display: flex;
  justify-content: center;
}
.body_calculator_form{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
}
.body_calculator{
  display: flex;
  justify-content: center;
}
.body_calculator_form .form-control{
  border: solid 1px green;
  margin-bottom: 14px;
}
.body_calculator_form .btn-success{
  height: 40px;
}
.body_calculator_form .table-bordered{
  margin-top: 14px;
}
.body_calculator_form .btn-success:hover{
  background-color: white;
  border: solid 1px green;
  color: green;
}
</style>