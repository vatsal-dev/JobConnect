import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'
import Logo from '../../assets/Logo.webp'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { MdOutlineLogout } from 'react-icons/md'

const DashboardNav = () => {
  const ref = useRef()
  const [openDropDown, setOpenDropDown] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  useOnClickOutside(ref, () => setOpenDropDown(false))

  return (
    <nav className='dashboard-nav'>
      <Link to={'/'} className='flex items-center gap-x-1'>
        
        <p className='text-xl font-bold text-black font-[Domine]'>JobConnect</p>
      </Link>

      <div className='relative'>
        <button type='button' onClick={() => setOpenDropDown(!openDropDown)}>
          <img
            className='dashboard-avatar'
            src="data:image/png;base64,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"
            alt='user-profile'
          />
        </button>

        {openDropDown && (
          <div ref={ref}>
            <div
              className='absolute right-0 z-30 mt-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
            >
              <span className='avatar-option' onClick={onLogout}>
                <MdOutlineLogout className='text-xl' />
                <span>Sign out</span>
              </span>
            </div>
          </div>
        )}

{
            <div className="relative">
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={() => setOpenDropDown(!openDropDown)}
              >
                <span className="text-white text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold">
                  Applicant Dashboard
                </span>
              </button>

              {openDropDown && (
                <div ref={ref}>
                  <div
                    className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                  >
                    {
                      <Link
                        to={"/user-profile"}
                        className="avatar-option text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold"
                      >
                        <span>Resume Upload & User Details</span>
                      </Link>
                    }
                    {
                      <Link
                        to={"/appliedjobs"}
                        className="avatar-option text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold"
                      >
                        <span>Applied Jobs</span>
                      </Link>
                    }

                    {
                      <Link
                        to={"/jobs"}
                        className="avatar-option text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold"
                      >
                        <span>Find more Jobs</span>
                      </Link>
                    }
                  </div>
                </div>
              )}
            </div>
          }
      </div>
    </nav>
  )
}

export default DashboardNav
