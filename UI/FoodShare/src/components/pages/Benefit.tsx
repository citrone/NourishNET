import Card from "../controls/card/Card.tsx";
import CardHeader from "../controls/card/CardHeader.tsx";
import CardBody from "../controls/card/CardBody.tsx";

import './Benefit.css'
import useBeneficiary from "../../hooks/useBeneficiary.ts";
import useProducts from "../../hooks/useProducts.ts";

const Donate = () => {
    const {data, loading} = useBeneficiary().getBeneficiary()
    const {products, productsLoading} = useProducts()
    
//    console.log(data)

    return (
        <div className="benefit">
            {loading && <p>Loading...</p>}

            {data && data.map(beneficiary => {
                return (
                    <Card>
                        <CardHeader>{beneficiary.name}</CardHeader>
                        <CardBody>
                            {productsLoading && <p>Loading...</p>}
                            {products && products.map(product => {
                                return (
                                        <div>
                                            <input key={product.id} id={product.id} type='checkbox'/>
                                            <label htmlFor={product.id}>{product.name}</label>
                                        </div>
                                )
                            })}
                            <button type="submit">Order</button>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default Donate
