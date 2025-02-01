import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'



function Header (props){
  const {index, title , description}=props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-xl sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator () {
  const [showModal,setShowModal]=useState(false)
  const [poison,setPoison]=useState('individual')
  const[muscles,setMuscles]=useState([])
  const[goal,setGoal]=useState('strength_power')

  function toggleModal (){
    setShowModal =!setShowModal
  }

  return (
    <SectionWrapper header={"Let's Generate Your Workout"} title={['It\'s','Huge','o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to Tranform into.'}/>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type,typeIndex)=> {
          return(
            <button onClick={()=> {
              setPoison(type)
            }}className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-800 py-4 rounded-lg' +(type===poison?"border-blue-800": "border-blue-400 ")} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('border-blue-800','border border-blue-400')}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'}/>
      
      <div className='bg-slate-950  p-3 border border-solid border-blue-400 rounded-lg flex flex-col '>
        <button onClick={toggleModal} className='relative flex items-center justify-center p-3'>
          <p>Select your Muscle</p>
          <i class="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div>Modal</div>
        )
        }
      </div>

      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
      
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((schemes,schemesIndex)=> {
          return(
            <button onClick={()=> {
              setGoal(schemes)
            }}className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-800 py-4 rounded-lg' +(schemes===goal?"border-blue-400 ": "border-blue-800 ")} key={schemesIndex}>
              <p className='capitalize'>{schemes.replaceAll('border-blue-800','border border-blue-400')}</p>
            </button>
          )
        })}
      </div>

    </SectionWrapper>
  )
}
