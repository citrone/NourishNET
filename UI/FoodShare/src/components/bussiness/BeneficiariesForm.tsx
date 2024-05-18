import { useState } from "react"
import { BeneficiaryForm } from '../../types/BeneficiaryTypes.ts'
import './BeneficiariesForm.css'

export type SubmitHandler = (formData: BeneficiaryForm) => void


const BeneficiariesForm = ({ onSubmit }: { onSubmit: SubmitHandler }) => {
  const [formData, setFormData] = useState({ name: "", city: "", address: "", capacity: 0 })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  }


  return (
    <>
      <form method="dialog" onSubmit={() => onSubmit(formData)}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="city">City</label>
        <input id="city" name="city" value={formData.city} onChange={handleChange} required />
        <label htmlFor="address">Address</label>
        <input id="address" name="address" value={formData.address} onChange={handleChange} required />
        <label htmlFor="capacity">Capacity</label>
        <input id="capacity" name="capacity" type="number" value={formData.capacity} onChange={handleChange} required />

        <button type="submit" className="button">Add Beneficiary</button>
      </form>
    </>
  )
}

export default BeneficiariesForm
