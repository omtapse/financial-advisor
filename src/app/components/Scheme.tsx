import React from 'react'

type Props = {}

interface Region {
    id: number;
    name: string;
  }
  
  const regions: Region[] = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
    { id: 3, name: 'Assam' },
    { id: 4, name: 'Bihar' },
    { id: 5, name: 'Chhattisgarh' },
    { id: 6, name: 'Goa' },
    { id: 7, name: 'Gujarat' },
    { id: 8, name: 'Haryana' },
    { id: 9, name: 'Himachal Pradesh' },
    { id: 10, name: 'Jharkhand' },
    { id: 11, name: 'Karnataka' },
    { id: 12, name: 'Kerala' },
    { id: 13, name: 'Madhya Pradesh' },
    { id: 14, name: 'Maharashtra' },
    { id: 15, name: 'Manipur' },
    { id: 16, name: 'Meghalaya' },
    { id: 17, name: 'Mizoram' },
    { id: 18, name: 'Nagaland' },
    { id: 19, name: 'Odisha' },
    { id: 20, name: 'Punjab' },
    { id: 21, name: 'Rajasthan' },
    { id: 22, name: 'Sikkim' },
    { id: 23, name: 'Tamil Nadu' },
    { id: 24, name: 'Telangana' },
    { id: 25, name: 'Tripura' },
    { id: 26, name: 'Uttar Pradesh' },
    { id: 27, name: 'Uttarakhand' },
    { id: 28, name: 'West Bengal' },
    { id: 29, name: 'Andaman and Nicobar Islands' },
    { id: 30, name: 'Chandigarh' },
    { id: 31, name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { id: 32, name: 'Lakshadweep' },
    { id: 33, name: 'Delhi' },
    { id: 34, name: 'Puducherry' },
    { id: 35, name: 'Ladakh' },
    { id: 36, name: 'Jammu and Kashmir' }
  ];
  
  


const Scheme = (props: Props) => {
  return (

    <div className='flex flex-col border-white max-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
        
        <div className='flex flex-col p-5'>
            <h3 className='text-[#E0E2E5] text-[20px]'>Let's Find Best Scheme's For You.</h3>
            <h3 className='text-[#E0E2E5] text-[15px]'>Would Just Require Some Information</h3>
        </div>
    

    <div className='flex flex-col p-4 gap-2'>

            <div className='flex flex-row gap-3'>

            <div className='flex flex-col gap-2'>
            <h3 className='text-[#E0E2E5] text-md p-0'>Demographic Details</h3>
            <input id='monthly-expense' className='max-w-[200px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Age'></input>
            </div>  

            <div className='flex flex-col gap-2'>
            <h3 className='text-[#E0E2E5] text-md p-0'>Gender</h3>
            <select className='p-3 min-w-[200px] bg-[#313233] min-h-[63px] text-[#E0E2E5] rounded-md' name="cars" id="cars">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            </div>   

            </div>

            <div className='flex flex-col gap-2'>
            <h3 className='text-[#E0E2E5] text-md p-0'>Annual Income</h3>
            <input id='monthly-expense' className='w-full p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Annual Income'></input>
            </div>

            <div className='flex flex-col gap-2'>
            <h3 className='text-[#E0E2E5] text-md p-0'>Select State</h3>
            <select className='p-3 min-w-[200px] bg-[#313233] min-h-[63px] text-[#E0E2E5] rounded-md' name="cars" id="cars">
            {regions.map(region => (
                <option key={region.id} value={region.id}>{region.name}
                </option>
            ))}
            </select>
            </div>   
        </div>



        <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
            <button className=' min-w-[100px] min-h-[50px] self-end'>Submit </button>
        </div>
    </div>
  )
}

export default Scheme