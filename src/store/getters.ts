// import pruductsVuex from "./pruducts"
// import userVuex from "./user"
// const pruductsState = pruductsVuex.state;
//console.log(pruductsVuex.state,userVuex.state)
const getters = {
    filterPrice: (state) => {
        return state.shopCart.filter((p)=>{
          return p.price>=5;
        });
    },
    filterName:(state)=>{
        return state.filter((p)=>{
          return p.age>25
        });
    },
  }
   
export default getters