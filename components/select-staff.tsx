import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectStaff() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select IT Staff" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>IT Personnel</SelectLabel>
                    <SelectItem value="cris">Cris</SelectItem>
                    <SelectItem value="gerald">Gerald</SelectItem>
                    <SelectItem value="kyle">Kyle</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
