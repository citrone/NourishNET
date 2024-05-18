import Card from './components/controls/card/Card'
import CardHeader from './components/controls/card/CardHeader'
import CardBody from './components/controls/card/CardBody'
import Beneficiaries from './components/bussiness/Beneficiaries.tsx'
import './App.css'


function App() {
  return (
    <>
      <Card>
        <CardHeader>This is the title</CardHeader>
        <CardBody>
          Hello World!
          <Beneficiaries />
        </CardBody>
      </Card>
    </>
  )
}

export default App
