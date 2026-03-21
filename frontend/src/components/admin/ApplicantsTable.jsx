import React from 'react'
import {
    Table,
    TableCell,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
    TableBody
} from '../ui/table'

import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'

const shortlistingStatus = ["Accepted", "Rejected"]

function ApplicantsTable() {
    const { applicants } = useSelector(store => store.application)
    const statusHandler = async (status, id) => {
        try {
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status }, {
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
            }
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your recent applied user
                </TableCaption>

                {/* ✅ Static Header */}
                <TableHeader>
                    <TableRow>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                {/* ✅ Dynamic Body */}
                <TableBody>
                    {
                        applicants && applicants.length > 0 ? (
                            applicants.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item?.applicant?.fullName}</TableCell>
                                    <TableCell>{item?.applicant?.email}</TableCell>
                                    <TableCell>{item?.applicant?.phoneNumber}</TableCell>

                                    <TableCell>
                                        {item?.applicant?.profile?.resume ? (
                                            <a
                                                href={item.applicant.profile.resume}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                View Resume
                                            </a>
                                        ) : (
                                            "No Resume"
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        {item?.createdAt?.split("T")[0]}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <Popover>
                                            <PopoverTrigger>
                                                <MoreHorizontal className="cursor-pointer" />
                                            </PopoverTrigger>

                                            <PopoverContent className="w-32">
                                                {
                                                    shortlistingStatus.map((status, i) => (
                                                        <div onClick={() => statusHandler(status, item?._id)}
                                                            key={i}
                                                            className="cursor-pointer p-1 hover:bg-gray-100"
                                                        >
                                                            {status}
                                                        </div>
                                                    ))
                                                }
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">
                                    No applicants found
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>

            </Table>
        </div>
    )
}

export default ApplicantsTable