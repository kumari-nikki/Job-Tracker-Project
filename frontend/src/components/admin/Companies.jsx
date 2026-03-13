import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from "../ui/button"
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
    const navigate=useNavigate()
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 px-4'>
                <div className='flex items-center justify-between w-full mb-5'>
                    <Input
                        className="w-72 border-black focus-visible:ring-0 focus-visible:border-black"
                        placeholder="Filter by name"
                    />
                    <Button className="bg-black text-white hover:bg-black/90" onClick={()=>navigate("/admin/companies/create")}>
                        New Company
                    </Button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    )
}

export default Companies