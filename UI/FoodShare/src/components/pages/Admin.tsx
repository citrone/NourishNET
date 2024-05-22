import Card from '../../components/controls/card/Card'
import CardHeader from '../../components/controls/card/CardHeader'
import CardBody from '../../components/controls/card/CardBody'
import Beneficiaries from '../../components/bussiness/Beneficiaries.tsx'

const Admin = () => {
    return (
        <>
            <Card>
                <CardHeader>Beneficiaries</CardHeader>
                <CardBody>
                    <Beneficiaries />
                </CardBody>
            </Card>
        </>
    )
}

export default Admin