
export const Child1 = ({usertext, setUsertext}) => {
  return (
    <>
     <div className='min-h-90 bg-sky-200 flex items-center justify-center flex-col'>
        <h1 className='text-4xl font-black'>Lifting state up</h1>
        <input type="text" placeholder='Enter a text' value={usertext} onChange={(e)=>setUsertext(e.target.value)} className='border border-gray-600 p-2 mt-10 outline-none rounded-xl'/>
     </div>
    </>
  )
}
