'use client'
import { MinusIcon, PlusIcon } from 'lucide-react'

function QuantityControl({ setPrice, setQuantity, quantity, unitPrice }) {
    const handleIncrement = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1
            setPrice(newQuantity * unitPrice)
            return newQuantity
        })
    }

    const handleDecrement = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = Math.max(prevQuantity - 1, 0)
            setPrice(newQuantity * unitPrice)
            return newQuantity
        })
    }

    return (
        <div className='flex gap-3 border border-slate-700 p-2 items-center rounded-xl'>
            <button onClick={handleIncrement}>
                <span>
                    <PlusIcon />
                </span>
            </button>
            <button>{quantity}</button>
            <button onClick={handleDecrement} disabled={quantity <= 1}>
                <span>
                    <MinusIcon />
                </span>
            </button>
        </div>
    )
}

export default QuantityControl
