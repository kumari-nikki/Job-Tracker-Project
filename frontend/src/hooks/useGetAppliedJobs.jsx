import { useEffect } from 'react'
import axios from "axios"

import { useDispatch } from 'react-redux'
import { setAllJobs } from '@/redux/jobSlice' 
import { APPLICATION_API_END_POINT } from '@/utils/constant'

const useGetAppliedJobs = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllJobs();
    }, [dispatch])
}

export default useGetAllJobs