import { collection, addDoc,getDocs, query } from "firebase/firestore";
import { DB } from "../config";

export async function addUserToDB(name: string) {
    try {
        const userRef = collection(DB, "users")

        const docRef = await addDoc(userRef, {
            first: name
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//get users from DB
export async function getUsersFromDB() {
    const q = query(collection(DB, "users"));
    const querySnapshot = await getDocs(q);
    const users: any[] = [];
    querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
    });
    // console.log(users)
    return users;
} 

