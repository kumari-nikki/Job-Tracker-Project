
import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Appliedjobtable from './Appliedjobtable'
import UpdateProfileDialog from './UpdateProfileDialog '
import { useSelector } from 'react-redux'
const isResume = true;
function Profile() {
    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth)
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="data:image/jpeg;base64,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" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullName}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right border border-gray-200" variant="outline"><Pen /></Button>
                </div>
                <div className='flex items-center gap-3 mt-4'>
                    <Mail size={18} />
                    <span>{user?.email}</span>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                    <Contact size={18} />
                    <span>{user?.phoneNumber}</span>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills?.length !== 0
                                ? user?.profile?.skills.map((item, index) => (
                                    <Badge key={index}>{item}</Badge>
                                ))
                                : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        user?.profile?.resume
                            ? <a
                                target="_blank"
                                href={user?.profile?.resume}
                                className='text-blue-500 w-full hover:underline cursor-pointer'
                            >
                               {user?.profile?.resumeOriginalName}
                            </a>
                            : <span>NA</span>
                    }
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <Appliedjobtable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}
            />
        </div>
    )
}
export default Profile
