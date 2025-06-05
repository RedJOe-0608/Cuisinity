const Card = ({restaurant}) => {
  return (
    <div key={restaurant.id} className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64 overflow-hidden'>
    {/* Image placeholder */}
    <div className='w-full h-48 bg-gray-200 flex items-center justify-center'>
      <span className='text-gray-500'>Restaurant Image</span>
    </div>
    
    {/* Restaurant details */}
    <div className='p-4'>
      <h3 className='text-lg font-semibold text-gray-800 mb-1'>{restaurant.name}</h3>
      <p className='text-sm text-gray-600 mb-2'>{restaurant.cuisine}</p>
      
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center'>
          <span className='text-yellow-500'>⭐</span>
          <span className='text-sm text-gray-700 ml-1'>{restaurant.rating}</span>
        </div>
        <span className='text-sm text-gray-600'>{restaurant.deliveryTime}</span>
      </div>
      
      <div className='flex items-center justify-between'>
        <span className='text-sm text-gray-600'>{restaurant.location}</span>
        <span className='text-sm font-medium text-gray-800'>{restaurant.price}</span>
      </div>
    </div>
  </div>
  )
}

export default Card
