"use client"
import React from 'react'
import Image from 'next/image'
import { BarChart, PieChart } from '@mui/x-charts';
import { pieArcLabelClasses } from '@mui/x-charts/PieChart';


type Props = {}

const PaymentHistory = (props: Props) => {
  return (

    <div className='grid grid-cols-2 border-white min-h-[500px] max-w-[1200px] rounded-lg bg-[#1E1F20] items-center'>

        

        <div className='flex flex-col border-white min-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
            <div>
                <h3 className='text-[#E0E2E5] text-[20px] p-5'>Hey Shivam, Here is Your Financials</h3>
            </div>

            <div className='flex flex-col'>

                <div className='flex flex-col'>

                    <div className='flex flex-row'>
                        <div className='rounded-lg bg-[#3d3b3b] w-full min-h-[50px] p-2 m-4 flex flex-row gap-4 items-center justify-between'>
                            
                            <div className='flex gap-2 items-center'>

                                <div>
                                    <Image src="/assets/Netflix.png" alt='netflix' width={30} height={30}/>
                                </div>

                                <div className='flex flex-col'>
                                <p className='text-[#E0E2E5]'>Netflix Entertainment</p>
                                <p className='text-[#97989a] text-[12px]'>12th May 2024</p>
                                </div>
                            
                            </div>
                            <p className='text-[#10ff5c]'>₹ 590.00</p>
                        </div>

                    </div>

                    


                </div>

                <div className='flex flex-col'>

            <div className='flex flex-row'>
                <div className='rounded-lg bg-[#3d3b3b] w-full min-h-[50px] p-2 m-4 flex flex-row gap-4 items-center justify-between'>
                    
                    <div className='flex gap-2 items-center'>

                        <div>
                            <Image src="/assets/Netflix.png" alt='netflix' width={30} height={30}/>
                        </div>

                        <div className='flex flex-col'>
                        <p className='text-[#E0E2E5]'>Netflix Entertainment</p>
                        <p className='text-[#97989a] text-[12px]'>12th May 2024</p>
                        </div>
                    
                    </div>
                    <p className='text-[#10ff5c]'>₹ 590.00</p>
                </div>

            </div>
                </div>

                <div className='flex flex-col'>

            <div className='flex flex-row'>
                <div className='rounded-lg bg-[#3d3b3b] w-full min-h-[50px] p-2 m-4 flex flex-row gap-4 items-center justify-between'>
                    
                    <div className='flex gap-2 items-center'>

                        <div>
                            <Image src="/assets/Netflix.png" alt='netflix' width={30} height={30}/>
                        </div>

                        <div className='flex flex-col'>
                        <p className='text-[#E0E2E5]'>Netflix Entertainment</p>
                        <p className='text-[#97989a] text-[12px]'>12th May 2024</p>
                        </div>
                    
                    </div>
                    <p className='text-[#10ff5c]'>₹ 590.00</p>
                </div>

            </div>
                </div>

                <div className='flex flex-col'>

                    <div className='flex flex-row'>
                        <div className='rounded-lg bg-[#3d3b3b] w-full min-h-[50px] p-2 m-4 flex flex-row gap-4 items-center justify-between'>
                            
                            <div className='flex gap-2 items-center'>

                                <div>
                                    <Image src="/assets/Netflix.png" alt='netflix' width={30} height={30}/>
                                </div>

                                <div className='flex flex-col'>
                                <p className='text-[#E0E2E5]'>Netflix Entertainment</p>
                                <p className='text-[#97989a] text-[12px]'>12th May 2024</p>
                                </div>
                            
                            </div>
                            <p className='text-[#10ff5c]'>₹ 590.00</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col'>

            <div className='flex flex-row'>
                <div className='rounded-lg bg-[#3d3b3b] w-full min-h-[50px] p-2 m-4 flex flex-row gap-4 items-center justify-between'>
                    
                    <div className='flex gap-2 items-center'>

                        <div>
                            <Image src="/assets/Netflix.png" alt='netflix' width={30} height={30}/>
                        </div>

                        <div className='flex flex-col'>
                        <p className='text-[#E0E2E5]'>Netflix Entertainment</p>
                        <p className='text-[#97989a] text-[12px]'>12th May 2024</p>
                        </div>
                    
                    </div>
                    <p className='text-[#10ff5c]'>₹ 590.00</p>
                </div>

            </div>
                </div>

                <div className='flex flex-col'>

            <div className='flex flex-row'>
                <div className='rounded-lg bg-[#3d3b3b] w-full min-h-[50px] p-2 m-4 flex flex-row gap-4 items-center justify-between'>
                    
                    <div className='flex gap-2 items-center'>

                        <div>
                            <Image src="/assets/Netflix.png" alt='netflix' width={30} height={30}/>
                        </div>

                        <div className='flex flex-col'>
                        <p className='text-[#E0E2E5]'>Netflix Entertainment</p>
                        <p className='text-[#97989a] text-[12px]'>12th May 2024</p>
                        </div>
                    
                    </div>
                    <p className='text-[#10ff5c]'>₹ 590.00</p>
                </div>

            </div>
                </div>

            </div>

        </div>

        

        <div className='flex flex-col gap-4 py-5 mx-3 items-center'>

            <h3 className='text-white self-start'>Categorized Expense</h3>

        <div className='flex bg-[#3d3b3b] min-h-[200px] min-w-[400px] rounded-lg p-5'>

        </div>

            <h3 className='text-white self-start'>Categorized Expense</h3>

        <div className='flex bg-[#3d3b3b] rounded-lg p-5 items-center'>
        <PieChart
            slotProps={{ legend: { hidden: true } }}
            colors={['#03E2FF', '#4CF6CD', '#C1FC89', '#F9F871']}
            series={[
                {
                data: [
                    { id: 0, value: 10, label: 'Food' },
                    { id: 1, value: 15, label: 'Entertainments' },
                    { id: 2, value: 50, label: 'Bills' },
                    { id: 3, value: 30, label: "EMI's"}
                ],
                
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                // cx: 150,
                // cy: 150,
                },
            ]}
            labelStyles={{fill:"#FFF"}}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: 'white',
                  color:'white',
                    
                  fontWeight: 'bold',
                },
              }}
            width={400}
            height={300}
            />
        </div>
            
        </div>


    </div>
  )
}

export default PaymentHistory