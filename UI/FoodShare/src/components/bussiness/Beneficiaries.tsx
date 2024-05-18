import useBeneficiary from '../../hooks/useBeneficiary.ts'
import { IActions } from '../../types/CommonTypes.ts'
import Table from '../controls/table/Table.tsx'
import Button from '../controls/button/Button.tsx'
import ModalDialog from '../controls/dialog/ModalDialog.tsx'
import { useState } from 'react'
import BeneficiariesForm from './BeneficiariesForm.tsx'
import { BeneficiaryForm } from '../../types/BeneficiaryTypes.ts'

const Beneficiaries = () => {
  const { data, loading } = useBeneficiary().getBeneficiary()
  const header = ['Name', 'City', 'Address', 'Capacity']
  const [showAddBeneficiaryDialog, setShowAddBeneficiaryDialog] = useState(false)
  const [addBeneficiaryData, setAddBeneficiaryData] = useState<BeneficiaryForm>()

  const { addBeneficiary } = useBeneficiary()

  const addAction = () => {
    setShowAddBeneficiaryDialog(true)
    addBeneficiary(addBeneficiaryData)
  }
  const editAction = () => {
    alert('Edit action')
  }
  const removeAction = () => {
    alert('Remove action')
  }
  const actions: IActions[] = [
    {
      actionName: 'Edit',
      actionHandler: editAction,
    },
    {
      actionName: 'Delete',
      actionHandler: removeAction,
    },
  ]

  const onSubmit = (data: BeneficiaryForm) => {
    setAddBeneficiaryData(data)

  }

  return (<div>
    {loading && <p>Loading...</p>}
    {data && <Table header={header} data={data} actions={actions} />}
    <Button onClick={addAction}>Add Beneficiary</Button>
    {showAddBeneficiaryDialog && <ModalDialog /*closeModal={closeModalHandler}*/ openModal={showAddBeneficiaryDialog}>
      <BeneficiariesForm onSubmit={onSubmit} />
    </ModalDialog>}
  </div>)
}

export default Beneficiaries
