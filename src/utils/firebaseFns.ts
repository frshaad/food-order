import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Food } from "../types";

// Save new item to firestore db
export const firebaseSaveItem = async (item: Food) => {
  await setDoc(doc(db, "foods", `${item.id}-${item.title}`), item, {
    merge: true,
  });
};
