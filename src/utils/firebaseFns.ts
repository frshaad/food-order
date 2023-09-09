import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import { Food } from "../types";

// Save new item to firestore db
export const firebaseSaveItem = async (item: Food) => {
  await setDoc(doc(db, "foods", `${item.id}-${item.title}`), item, {
    merge: true,
  });
};

// Fetch all foods from db
export const firebaseFetchAllFoods = async () => {
  const items = await getDocs(
    query(collection(db, "foods"), orderBy("category", "asc")),
  );
  return items.docs.map((doc) => doc.data());
};
