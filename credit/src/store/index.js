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
    user_password:false,
    user_cardid:false
  },
  getters: {

  },
  mutations: {
    mobile_navigator_func:state=>{
      if(state.mobile_navigator_show==false){
        state.mobile_navigator_show=true;
      }else{
        state.mobile_navigator_show=false;
      }
    },
    avtorization_func:state=>{
      if(state.form_avtorization==false){
        state.form_avtorization = true;
      }else{
        state.form_avtorization = false;
      }
    },
    transferModal_func:state=>{
      if(state.modalTransfer==false){
        state.modalTransfer=true;
      }else{
        state.modalTransfer=false;
      }
    },
    close_form_avtorization_func:state=>{
      state.form_avtorization = false;
    },
    submit_form_avtorization_func:(state, email, password)=>{
      const login = {
        email: email,
        password: password
      }
      axios.post('http://agrobankapi/api/login', login)
          .then((response)=>{
            localStorage.setItem('token', response.data.token);
            setAuthHeader(response.data.token);
          })
          .catch((err)=>console.log(err));
      state.form_avtorization = false;
    },
    getUsers_func:state=>{
      axios.get('http://agrobankapi/api/users')
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err.response));
    },
    modalForm_func:state=>{
      state.modalShow=true;
    },
    modalHide_func:state=>{
      state.modalShow=false;
    },
    formSubmit_func:state=>{
      state.modalShow=false;
    },
    UserPassword_func:state=>{
      state.user_password=true;
      state.user_cardid=false;
    },
    UserCardId_func:state=>{
      state.user_cardid=true;
      state.user_password=false;
    }
  },
  actions: {

  },
  modules: {

  }
})
