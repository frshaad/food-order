import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Food } from "../types";

// Save new item
export const firebaseSaveItem = async (item: Food) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), item, {
    merge: true,
  });
};
