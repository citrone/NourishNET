import Card from './components/controls/card/Card'
import CardHeader from './components/controls/card/CardHeader'
import CardBody from './components/controls/card/CardBody'
import Table from './components/controls/table/Table'

import { IActions, IBeneficiary } from './types/CommonTypes'

import './App.css'


function App() {
  const onAddClick = () => {
    alert('Im Add action')
  }
  const onEditClick = () => {
    alert('Im Edit action')
  }
  const onDeleteClick = () => {
    alert('Im Delete action')
  }

  const header = ['Name', 'City Name', 'Address', 'Capacity']
  const data: IBeneficiary[] = [
    {
      id: 1,
      name: 'Gabriel',
      cityName: 'Oradea',
      address: 'Independentei',
      capacity: 1
    },
    {
      id: 2,
      name: 'Ramona',
      cityName: 'Timisoara',
      address: 'Crizantemelor',
      capacity: 10
    }
  ]
  const actions: IActions[] = [
    {
      actionName: 'Add',
      actionHandler: onAddClick
    },
    {
      actionName: 'Edit',
      actionHandler: onEditClick
    },
    {
      actionName: 'Delete',
      actionHandler: onDeleteClick
    }
  ]


  return (
    <>
      <Card>
        <CardHeader>This is the title</CardHeader>
        <CardBody>
          Hello World!
          <Table header={header} actions={actions} data={data}></Table>
        </CardBody>
      </Card>
    </>
  )
}

export default App
