import { useState, useEffect } from 'react'
import { useFirestore } from 'reactfire'
import { useHistory }  from 'react-router-dom'

export const useMatchRouteProductData = (collection, productId) => {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ productData, setProductData] = useState([])

  const history = useHistory()
  const firestore = useFirestore()
  
  useEffect(() => {
    const unsubscribe = firestore.collection(collection).where("uid", "==", productId).onSnapshot(productInfo => {
        if(productInfo.empty) {
          console.error("No existen datos")
          history.push("/")
          return null 
        } else {
          const collectionData = productInfo.docs.map(doc => {
            return {
              uid: doc.uid,
              ...doc.data()
            }
          })
          setProductData(collectionData)
          setLoading(false)
        }
    }, err => {
      setError(true)
      console.error("Error", err.message)
      history.push("/")
    })
      
    return () => unsubscribe()
  }, [collection, productId])

  return [productData, loading, error]
}
