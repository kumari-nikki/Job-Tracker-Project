import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreHorizontal, Edit } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
    const { searchCompanyByText } = useSelector((store) => store.company);
    const { allAdminJobs = [] } = useSelector((store) => store.job);
    const navigate = useNavigate();

    // Filter directly in render
    const filteredJobs = allAdminJobs.filter((job) => {
        if (!searchCompanyByText) return true;
        return (
            job.title?.toLowerCase().includes(searchCompanyByText.toLowerCase()) ||
            job.company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        );
    });

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {filteredJobs.length === 0 ? (
                        <tr>
                            <td colSpan={4}>No jobs found</td>
                        </tr>
                    ) : (
                        filteredJobs.map((job) => (
                            <tr key={job._id}>
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>
                                    {job?.createdAt ? job.createdAt.split("T")[0] : "N/A"}
                                </TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div
                                                onClick={() =>
                                                    navigate(`/admin/jobs/${job._id}`)
                                                }
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <Edit className="w-4" />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminJobsTable;