import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardNav from '../components/Dashboard/DashboardNav'
import PostJobImage from '../assets/postJob.webp'
import { MdAdd, MdRemove } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getCompany } from '../features/company/companySlice'
import { createJob, updateJob } from '../features/job/jobSlice'
import Loading from '../components/Loading'
import { useForm, useFieldArray } from 'react-hook-form'
import countries from '../utils/countries.json'
import { editJob, viewJob } from '../features/ui/uiSlice'

const PostEvent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const { company, isLoading } = useSelector((state) => state.company)
  const { jobView, jobEdit } = useSelector((state) => state.ui)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      jobTitle:
        (jobView.state && jobView.viewData.jobTitle) ||
        (jobEdit.state && jobEdit.editData.jobTitle) ||
        '',
      jobCategory:
        (jobView.state && jobView.viewData.jobCategory) ||
        (jobEdit.state && jobEdit.editData.jobCategory) ||
        'Choose a category',
      jobType:
        (jobView.state && jobView.viewData.jobType) ||
        (jobEdit.state && jobEdit.editData.jobType) ||
        'Choose a job type',
      jobDescription:
        (jobView.state && jobView.viewData.jobDescription) ||
        (jobEdit.state && jobEdit.editData.jobDescription) ||
        '',
      country:
        (jobView.state && jobView.viewData.country) ||
        (jobEdit.state && jobEdit.editData.country) ||
        'Choose a country',
      workType:
        (jobView.state && jobView.viewData.workType) ||
        (jobEdit.state && jobEdit.editData.workType) ||
        'Choose a work type',
      numberOfVacancy:
        (jobView.state && jobView.viewData.numberOfVacancy) ||
        (jobEdit.state && jobEdit.editData.numberOfVacancy) ||
        'Choose a value',
      jobDeadline:
        (jobView.state && jobView.viewData.jobDeadline) ||
        (jobEdit.state && jobEdit.editData.jobDeadline) ||
        '',
      averageSalary:
        (jobView.state && jobView.viewData.averageSalary) ||
        (jobEdit.state && jobEdit.editData.averageSalary) ||
        '',
      jobRequirements:
        (jobView.state && jobView.viewData.jobRequirements) ||
        (jobEdit.state && jobEdit.editData.jobRequirements) ||
        [],
      jobExpectations:
        (jobView.state && jobView.viewData.jobExpectations) ||
        (jobEdit.state && jobEdit.editData.jobExpectations) ||
        [],
    },
  })

  const {
    fields: requirementFields,
    append: requirementAppend,
    remove: requirementRemove,
  } = useFieldArray({
    control,
    name: 'jobRequirements',
    rules: { required: 'Job requirements required.' },
  })

  const {
    fields: expectationFields,
    append: expectationAppend,
    remove: expectationRemove,
  } = useFieldArray({
    control,
    name: 'jobExpectations',
    rules: { required: 'Job expectations required.' },
  })

  const onSubmit = async (data) => {
    data.company = user.userId
    if (jobEdit.state) {
      dispatch(updateJob({ jobId: jobEdit.editData._id, jobData: data }))
      dispatch(editJob({ state: false, editData: null }))
    }
    if (!jobView.state && !jobEdit.state) {
      dispatch(createJob(data))
    }
    navigate('/company/dashboard')
  }

  useEffect(() => {
    if (!company) {
      dispatch(getCompany(user?.userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading)
    return (
      <div className='h-screen'>
        <Loading />
      </div>
    )

  return (
    <div className='bg-[#F3F2F1] min-h-screen'>
      <div className='sticky top-0'>
        <DashboardNav />
      </div>

      <div className='flex flex-col items-center justify-center gap-y-6 pt-6 pb-12 w-full sm:w-[600px] md:w-[650px] lg:w-[700px] mx-auto px-3'>
        {/* Post Job Title Section */}
        <div className='post-job-section !py-0 font-[Poppins] text-3xl md:text-4xl font-semibold overflow-hidden'>
          <h2 className='md:max-w-xs leading-10'>Create a new event!</h2>
          <img src={PostJobImage} alt='post-img' className='max-h-48' />
        </div>

        {/* Company Brief Detail Section */}
        <div className='post-job-section'>
          <div className='grid grid-cols-6 gap-4 w-full'>
            <div className='col-span-6 md:col-span-2 row-span-1 flex items-center justify-center bg-[#F3F2F1]/80 rounded-xl shadow-md h-40 aspect-square md:aspect-auto md:h-auto sm:mx-auto md:mx-0'>
              <img
                src="https://cdn-icons-png.flaticon.com/512/45/45533.png"
                alt='company-logo'
                className='w-12 object-cover'
              />
            </div>
            <div className='col-span-6 md:col-span-4 row-span-1 font-[Mulish] font-bold'>
              <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-6'>
                  <p>Company Name :</p>
                  <p className='w-full text-[#7A7A7A]'>{company?.name}</p>
                </div>

                <div className='col-span-6'>
                  <p>Company Description :</p>
                  <p className='w-full text-[#7A7A7A]'>
                    {company?._company?.companyDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className='space-y-6 w-full' onSubmit={handleSubmit(onSubmit)}>
          {/* Form 1st Section */}
          <div className='post-job-section'>
            <div className='grid grid-cols-6 gap-3 w-full'>
              <div className='col-span-6'>
                <label
                  htmlFor='job-title'
                  className='mb-1 block text-sm font-medium'
                >
                  Event title <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='text'
                  {...register('jobTitle', {
                    required: 'Event title is required',
                    minLength: { value: 6, message: 'Event title too short' },
                  })}
                  className='input-field'
                  placeholder='Event Title'
                  disabled={jobView.state || false}
                />
                {errors.jobTitle && (
                  <p className='text-xs text-red-500 pt-0.5'>
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='job-title'
                  className='mb-1 block text-sm font-medium'
                >
                  Event Date and Time <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='text'
                  {...register('jobTitle', {
                    required: 'Date and Time is required',
                  })}
                  className='input-field'
                  placeholder='24th April 8PM'
                  disabled={jobView.state || false}
                />
                {errors.jobTitle && (
                  <p className='text-xs text-red-500 pt-0.5'>
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='job-title'
                  className='mb-1 block text-sm font-medium'
                >
                  Event Link/URL <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='text'
                  {...register('jobTitle', {
                    required: 'Event Link is required',
                  })}
                  className='input-field'
                  placeholder='meet.google.com/xxx-xxxx-xxx'
                  disabled={jobView.state || false}
                />
                {errors.jobTitle && (
                  <p className='text-xs text-red-500 pt-0.5'>
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='job-title'
                  className='mb-1 block text-sm font-medium'
                >
                  Event category <span className='text-red-500 font-bold'>*</span>
                </label>
                <select
                  id='job-title'
                  {...register('jobCategory', {
                    validate: () => {
                      if (watch('jobCategory') === 'Choose a category') {
                        return 'Please select the job category'
                      }
                    },
                  })}
                  className='input-field'
                  disabled={jobView.state || false}
                >
                  <option>Choose a category</option>
                  <option value='IT/Telecommunication'>
                    IT/Telecommunication
                  </option>
                  <option value='Management'>Management</option>
                  <option value='Digital & Creative'>Digital & Creative</option>
                  <option value='Sales & Marketing'>Sales & Marketing</option>
                  <option value='Accounting'>Accounting</option>
                  <option value='Design & Art'>Design & Art</option>
                </select>
                {errors.jobCategory && (
                  <p className='text-xs text-red-500 pt-0.5'>
                    {errors.jobCategory.message}
                  </p>
                )}
              </div>


              <div className='col-span-6'>
                <label
                  htmlFor='job-description'
                  className='mb-2 block text-sm font-medium text-gray-900'
                >
                  Event Description
                </label>
                <textarea
                  {...register('jobDescription', {
                    required: 'Job description is required',
                    minLength: {
                      value: 20,
                      message: 'Description is too short',
                    },
                    maxLength: {
                      value: 500,
                      message: 'Description is too long',
                    },
                  })}
                  rows='4'
                  className='input-field'
                  placeholder='Job description'
                  disabled={jobView.state || false}
                />
                {errors.jobDescription && (
                  <p className='text-xs text-red-500 pt-0.5'>
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button Section */}
          <div className='post-job-section font-[Poppins]'>
            <Link
              to={'/'}
              className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              onClick={() => {
                dispatch(viewJob({ state: false, viewData: null }))
                dispatch(editJob({ state: false, editData: null }))
              }}
            >
              Back
            </Link>
            <button
              type='submit'
              className={`text-white bg-[#312ECB] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ${
                jobView.state && 'hidden'
              }`}
            >
              {jobEdit.state ? 'Update Job' : 'Create an Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostEvent
