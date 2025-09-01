
export const Child2 = ({usertext}) => {
  return (
    <>
    <div className='min-h-90 bg-amber-100 flex items-center justify-center'>
       <h1 className="text-4xl mt-10"> User entered text : <span className="text-blue-700">{usertext}</span></h1>
    </div>
    </>
  )
}
