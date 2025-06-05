import { restaurants } from '../data/restaurants';
import Card from './Card';

const CardContainer = () => {

  return (
    <div className='container mx-auto flex items-center justify-center flex-wrap gap-4 p-4'>
      {restaurants.map((restaurant) => (
       <Card key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default CardContainer
