// import React from 'react'
// import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
// import { NavLink, useLocation } from 'react-router-dom'

// const Sidebar = () => {

//     const user= dummyUserData
//     const location= useLocation()
//     const [image,setImage]= React.useState('')

//     const updateImage = () => { 
//         user.image=URL.createObjectURL(image)
//         setImage('')
//     }
//   return (
//     <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>

//         <div className='group relative'>
//             <label htmlFor="image">
//                 <img src={image? URL.createObjectURL(image):user?.image||" https://unsplash.com/photos/a-man-in-a-white-shirt-posing-for-a-picture-4DwRp_5Dzo0"} alt="" />
//                 <input type='file' accept='image/*' id='image' hidden onChange={(e) => setImage(e.target.files[0])} />

//                 <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
//                     <img src={assets.edit_icon} alt="" />

//                 </div>
//             </label>
//         </div>
//         {image && (
//             <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'>Save <img src={assets.check_icon} width={13} alt="" onClick={updateImage}/></button>
//         )}
//         <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

//         <div className='w-full'>
//             {ownerMenuLinks.map((link, index) => (
//                 <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${location.pathname === link.path ? 'bg-primary text-primary' : 'text-gray-600'} transition-all duration-300`}>
//                     <img src={link.path === location.pathname? link.coloredIcon:link.icon} alt="car icon" />
//                     <span className='max-md:hidden'>{link.name}</span>
//                     <div className={`${link.path === location.pathname && 'bg-primary'} w-1.5 h-8 rounded-l right-0 absolute`}></div>

//                 </NavLink>
//             ))}
//         </div>
      
//     </div>
//     )
// }

// export default Sidebar


import React from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const user = dummyUserData
    const location = useLocation()
    
    const [image, setImage] = React.useState('')
    const [profileImage, setProfileImage] = React.useState(user.image || 'https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=400&q=80')

    const updateImage = () => {
        setProfileImage(URL.createObjectURL(image))
        setImage('')
    }

    return (
        <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>

            <div className='group relative'>
                <label htmlFor="image">
                    <img
                        src={image ? URL.createObjectURL(image) : profileImage}
                        alt="Profile"
                        className='w-24 h-24 rounded-full object-cover cursor-pointer'
                    />
                    <input
                        type='file'
                        accept='image/*'
                        id='image'
                        hidden
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
                        <img src={assets.edit_icon} alt="Edit Icon" />
                    </div>
                </label>
            </div>

            {image && (
                <button
                    onClick={updateImage}
                    className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer rounded'
                >
                    Save <img src={assets.check_icon} width={13} alt="Check" />
                </button>
            )}

            <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

            <div className='w-full'>
                {ownerMenuLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${location.pathname === link.path ? 'bg-blue-100  text-primary' : 'text-gray-600'} transition-all duration-300`}
                    >
                        <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="icon" />
                        <span className='max-md:hidden'>{link.name}</span>
                        <div className={`${link.path === location.pathname ? 'bg-primary' : ''} w-1.5 h-8 rounded-l right-0 absolute`}></div>
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default Sidebar
