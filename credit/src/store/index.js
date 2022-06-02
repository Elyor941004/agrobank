import { createStore } from 'vuex'
import axios from "axios";
import setAuthHeader from "@/utils/setAuthHeader";

export default createStore({
  state: {
    mobile_navigator_show: true,
    containerShow: '',
    form_avtorization: false,
    email:'',
    password:'',
    modalTransfer:false,
    modalShow:false,
    user_password:true,
    user_cardid:false,
    calculatorValue:'',
    creditCard:false,
    educationCard:true,
    onlineMicroCreditHide:true,
    onlineMicroCredit:false,
  },
  getters: {

  },
  mutations: {
    mobile_navigator_func:state=>{
      if(state.mobile_navigator_show==false){
        state.mobile_navigator_show=true;
        document.getElementById("overlay").style.display = "block";
      }else{
        state.mobile_navigator_show=false;
        document.getElementById("overlay").style.display = "none";
      }
    },
    avtorization_func:state=>{
      if(state.form_avtorization==false){
        state.form_avtorization = true;
        document.getElementById("overlay").style.display = "block";
      }else{
        state.form_avtorization = false;
        document.getElementById("overlay").style.display = "none";
      }
    },
    inputChange_func:(state, formValue)=>{
      if (formValue=='password'){
        state.user_password=true;
        state.user_cardid=false;
      }else{
        state.user_cardid=true;
        state.user_password=false;
      }
    },
    transferModal_func:state=>{
      if(state.modalTransfer==false){
        state.modalTransfer=true;
        document.getElementById("overlay").style.display = "block";
      }else{
        state.modalTransfer=false;
        document.getElementById("overlay").style.display = "none";
      }
    },
    close_form_avtorization_func:state=>{
      state.form_avtorization = false;
      document.getElementById("overlay").style.display = "none";
    },
    submit_form_avtorization_func:(state, form)=>{
      state.form_avtorization = false;
      document.getElementById("overlay").style.display = "none";

      const login = {
        email: form.email,
        password: form.password
      }
      axios.post('http://agrobankapi/api/login', login)
          .then((response)=>{
            localStorage.setItem('jwttoken', response.data.token);
            setAuthHeader(response.data.token);
          })
          .catch((err)=>console.log(err));
    },
    getUsers_func(){
     axios.get('http://agrobankapi/api/users')
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err.response));
    },
    logoutUser_func(){
      axios.post('http://agrobankapi/api/logout')
          .then(console.log('succesfully logged out'))
          .catch(console.log('not logged out'))
    },
    modalForm_func:state=>{
      state.modalShow=true;
      document.getElementById("overlay").style.display = "block";
    },
    modalHide_func:state=>{
      state.modalShow=false;
      document.getElementById("overlay").style.display = "none";
    },
    formSubmit_func:state=>{
      state.modalShow=false;
      document.getElementById("overlay").style.display = "none";
    },
    selectCalculatorFunc:(state, text)=>{
      switch (text){
        case 'creditCard':
          state.creditCard=true;
          state.educationCard=false;
          state.onlineMicroCreditHide=true;
          state.onlineMicroCredit=false;
        break;
        case 'educationCard':
          state.creditCard=false;
          state.educationCard=true;
          state.onlineMicroCreditHide=true;
          state.onlineMicroCredit=false;
        break;
        case 'onlineMicroCredit':
          state.creditCard=false;
          state.educationCard=false;
          state.onlineMicroCreditHide=false;
          state.onlineMicroCredit=true;
        break;
        default:
      }
    }
  },
  actions: {

  },
  modules: {

  }
})
