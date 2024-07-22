"use client"

import { FormEvent } from "react"
import { Button } from "./button"
import { Input } from "./input"

interface CounterProps {
    count: number
    onDecrease: () => void
    onIncrease: () => void
    onChange?: (event: FormEvent<HTMLInputElement>) => void
    onBlur?: (event: FormEvent<HTMLInputElement>) => void
    minimum?: number
    maximum?: number
}

const Counter = ({
    count,
    onDecrease,
    onIncrease,
    onChange,
    onBlur,
    minimum,
    maximum,
}: CounterProps) => {
    return (
        <div className="flex items-center gap-1">
            <div className="">
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    disabled={count === minimum}
                    onClick={onDecrease}>
                    -
                </Button>
            </div>
            <div className="">
                <Input
                    value={count}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="h-6 px-2 text-xs w-12"
                />
            </div>
            <div className="">
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    disabled={count === maximum}
                    onClick={onIncrease}>
                    +
                </Button>
            </div>
        </div>
    )
}

export default Counter
