import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from "../ui/button";
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setsearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies(); // fetch all companies on mount
    const [search, setSearch] = useState(""); // controlled input
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Update Redux slice whenever search changes
    useEffect(() => {
        dispatch(setsearchCompanyByText(search.trim()));
    }, [search, dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 px-4'>
                <div className='flex items-center justify-between w-full mb-5'>
                    <Input
                        className="w-72 border-black focus-visible:ring-0 focus-visible:border-black"
                        placeholder="Filter by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                        className="bg-black text-white hover:bg-black/90"
                        onClick={() => navigate("/admin/companies/create")}
                    >
                        New Company
                    </Button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    );
};

export default Companies;