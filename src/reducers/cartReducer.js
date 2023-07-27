import {
  ADD_TO_CART,
  DEL_ITEM_IN_CART,
  UPDATE_ITEM_IN_CART,
} from "../actions/cratAction";

// {
//   id: '',
//   title: '',
//   price: 2,
//   quantity: 1
// }

const initialState = [];

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // เช็คว่ามีข้อมูลสินค้านั้นหรือยังหากมีแล้วให้อัพเดท qty เข้าไป 1
      const chk_item = state.find((item) => item.id === action.payload.id);

      if (!chk_item) {
        return [...state, action.payload];
      } else {
        return state.map((item) => ({
          ...item,
          qty: item.id === chk_item.id ? item.qty + 1 : item.qty,
        }));
      }

    case DEL_ITEM_IN_CART:
      // ในกรณีลบข้อมูลออกจาก Array ควรใช้ filter และไม่ควรใช้ map
      return state.filter((itemDel) => itemDel.id !== action.payload);

    case UPDATE_ITEM_IN_CART:
      // เช็คว่ามีข้อมูลสินค้านั้นหรือยังหากมีแล้วให้อัพเดท qty เข้าไป 1
      const chk_item_QP = state.find(
        (itemqp) => itemqp.id === action.payload.id
      );

      if (!chk_item_QP) {
        return [...state, action.payload];
      } else {
        return state.map((i) => ({
          ...i,
          qty: i.id === action.payload.id ? (i.qty = action.payload.qty) : i.qty,
          price: i.id === action.payload.id
              ? (i.price = action.payload.price)
              : i.price,
        }));
      }

    default:
      return state;
  }
}
