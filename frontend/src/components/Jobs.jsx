import useGetAllJobs from '@/hooks/useGetAllJobs';
import FilterCard from './FilterCard'
import Job from './Job';
import Navbar from './shared/Navbar';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { motion,AnimatePresence} from 'framer-motion';

const Jobs = () => {
  useGetAllJobs();

  const { allJobs, searchedQuery } = useSelector(store => store.job)
  const [filterJobs, setFilterJobs] = useState([])

  useEffect(() => {
    if (searchedQuery.length > 0) {
      const filteredJobs = allJobs.filter((job) => {
        return searchedQuery.some((query) =>
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.description.toLowerCase().includes(query.toLowerCase()) ||
          job.location.toLowerCase().includes(query.toLowerCase()) ||
          job.salary.toString().toLowerCase().includes(query.toLowerCase())
        )
      })
      setFilterJobs(filteredJobs)
    } else {
      setFilterJobs(allJobs)
    }
  }, [allJobs, searchedQuery])

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-[20%]'>
            <FilterCard />
          </div>
          {
            filterJobs.length === 0 ? (
              <span>Job not found</span>
            ) : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  <AnimatePresence>
                  {filterJobs.map((job) => (
                    <motion.div
                      key={job._id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
                  </AnimatePresence>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Jobs;