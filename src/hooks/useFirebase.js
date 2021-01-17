import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export const useFireStoreDoc = (path) => {
    const [doc, setDoc] = useState(null);

    useEffect(() => {
        db.doc(path).onSnapshot((res) => setDoc(res.data()));
    }, [path]);

    const updateDoc = (data) => {
        db.doc(path).set(
            {
                ...data,
            },
            { merge: true }
        );
    };

    const deleteDoc = () => db.doc(path).delete();

    return { doc, updateDoc, deleteDoc };
};

export const useFireStoreCol = (path) => {
    const [collection, setCollection] = useState([]);

    const createDoc = (data) => {
        db.collection(path).add(data);
    };

    useEffect(() => {
        db.collection(path).onSnapshot((res) => {
            const array = res.docs.map((cur) => {
                return cur.data();
            });
            setCollection(array);
        });
    }, [path]);
    
    return { collection, createDoc };
};
