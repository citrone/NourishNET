import { useEffect, useState } from "react"

const useBeneficiary = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5022/api/Beneficiary/GetAll')
        const beneficiaries = await response.json()
        setData(beneficiaries)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const getBeneficiary = () => {
    return { data, loading }
  }

  const addBeneficiary = async (data: BodyInit) => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5022/api/Beneficiary/Create', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const beneficiaries = await response.json()
      setData(beneficiaries)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    getBeneficiary,
    addBeneficiary
  }
}

export default useBeneficiary
