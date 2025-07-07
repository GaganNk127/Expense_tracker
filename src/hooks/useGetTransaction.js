import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { useGetUserInfo } from './useGetUserInfo';

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { userID } = useGetUserInfo();

  useEffect(() => {
    const transactionRef = collection(db, "transactions");
    const q = query(
      transactionRef,
      where("userID", "==", userID),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(data);
    });

    return () => unsubscribe();
  }, [userID]);

  return { transactions };
};
